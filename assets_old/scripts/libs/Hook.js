/*
 //Hook函数
 //function (context, HookFunc, funcName)
 context:字符串，上下文。
 HookFunc：你自己的Hook函数。实现自己的内容就可以了，不需要回调原函数。
 funcName：可选参数，字符串，有些函数会重写toString的方法，建议传下函数名。
 */
//Hook例子
/*
 //Hook
 cc.log.Hook('cc', function () {
 console.log('Hook log');
 }, 'log');

 //unHook
 cc.log.unHook('cc', 'log');

 */

var Hook = function () {
    this.initEnv();
    this.init();
};

Hook.prototype.initEnv = function () {
    var self = this;
    Function.prototype.hook = function (context, HookFunc, funcName) {
        var _context = null; //函數上下文
        var _funcName = null; //函數名      
        _funcName = funcName || getFuncName(this);
        eval('_context = ' + context + ' || window;')
        var _fullName = context + '.' + funcName; //函数加上上下文的全名。
        if (_funcName == '') {
            console.log("can not find funName,Hook failed");
            return false;
        }


        if (_context[_funcName].prototype && _context[_funcName].prototype.isHooked) {
            console.log("Already has been Hooked,unHook first");
            return false;
        }

        if (self.HookFns[_fullName]) {
            cc.log("HookFns has same Hook name");
        }

        self.HookFns[_fullName] = this;

        function getFuncName(fn) {
            // 獲取函數名稱
            var strFunc = fn.toString();
            var _regex = /function\s+(\w+)\s*\(/;
            var patten = strFunc.match(_regex);
            if (patten) {
                return patten[1];
            }

            return '';
        }

        try {
            eval('_context[_funcName] = function ' + _funcName + '(){\n' +
                'var args = Array.prototype.slice.call(arguments,0);\n' +
                'var obj = this;\n' +
                'HookFunc.apply(obj,args)\n' +
                'return self.HookFns[_fullName].apply(obj,args);\n' +
                '};');
            _context[_funcName].prototype.isHooked = true;
            return true;
        } catch (e) {
            console.log("Hook failed,check the params.");
            return false;
        }
    };
    Function.prototype.unHook = function (context, funcName) {
        var _context = null;
        var _funcName = null;
        _funcName = funcName;
        eval('_context = ' + context + ' || window;')
        var _fullName = context + '.' + funcName; //函数加上上下文的全名。
        if (!_context[_funcName].prototype || !_context[_funcName].prototype.isHooked) {
            cc.log("No function is Hooked on");
            return false;
        }
        if (self.HookFns[_fullName]) {
            //重启的时候会丢失HookFns，存在BUG。
            _context[_funcName] = self.HookFns[_fullName];
            delete self.HookFns[_fullName];
        }
        return true;
    }
};

Hook.prototype.init = function () {
    this.HookFns = {};
    this.HookString();
    //this.HookWindow();
    //this.hookLogs();
    return this;
};

Hook.prototype.HookString = function () {
    String.prototype.uGetLength = function () {
        var len = 0;
        for (var i = 0; i < this.length; i++) {
            if (this.charCodeAt(i) > 127 || this.charCodeAt(i) == 94) {
                len += 2;
            } else {
                len++;
            }
        }
        return len;
    };
    String.prototype.uSlice = function (start, end) {
        start = start < 0 ? start + this.uGetLength() : start;
        end = start < 0 ? end + this.uGetLength() : end;
        start = start < this.uGetLength() ? start : this.uLength - 1;
        //slice 原来的接口就是如此
        end = end < this.uGetLength() ? end : this.uGetLength();

        if (start > end) {
            end = this.uGetLength() - 1;
        }

        var len = 0;
        var _start = 0, _end = 0;
        for (var i = 0; i < this.length; i++) {
            if (this.charCodeAt(i) > 127) {
                len += 2;
            } else {
                len++;
            }
            if (len <= start) {
                _start = i + 1;
            }
            if (len <= end) {
                _end = i + 1;
            }
        }
        console.log('slice :', _start, _end);
        return this.slice(_start, _end);
    }

    String.prototype.trim = function () {
        return this.replace(/(^\s+)|(\s+$)/g, '')
    }
};

Hook.prototype.HookWindow = function () {
    window.__errorHandler = function (error) {
        console.log('event_js_error:' + error);
        window.g_event_error_str = error;
        cc.director.loadScene('errorprint');
    }
};

Hook.prototype.hookLogs = function () {
    var self = this;
    cc.log.hook('cc', function () {
        var args = Array.prototype.slice.call(arguments, 0);
        args.unshift('ppddz_log:');
        console.log.apply(null, args);
    }, 'log');

    cc.warn.hook('cc', function () {
        var args = Array.prototype.slice.call(arguments, 0);
        args.unshift('ppddz_warn:');
        console.log.apply(null, args);
    }, 'warn');

    cc.error.hook('cc', function () {
        var args = Array.prototype.slice.call(arguments, 0);
        args.unshift('ppddz_error:');
        console.log.apply(null, args);
    }, 'error');
};


Hook.prototype.clearEnv = function () {
    if (Function.prototype.hasOwnProperty("Hook")) {
        delete Function.prototype.hook;
    }
    if (Function.prototype.hasOwnProperty("unHook")) {
        delete Function.prototype.unHook;
    }
    return true;
}


Hook.prototype.printHookFns = function () {
    for (var id in this.HookFns) {
        console.log('Hookfn:\t%s', id);
    }
};

window.hook = new Hook();