var HttpCmd = {
    PHP_CMD_LOGIN: '/api/login.do',
    PHP_CMD_SIGN_CODE: '/api/getValidateCode.do',
};

var HttpMgr = function () {
    this._reqHttpList = []; //网络请求——键值对队列
    this._isReqHttpIng = false; //当前是否还有网络请求还在进行

    this.CMD = HttpCmd;
    this._login_server = null;
    this.emitter = new require("Emitter")(this);//*****************************************

    //不需要显示loading动画的网络请求
    this.no_play_anim_proto_list = [];

    //直接请求 不需要排队的网络请求
    this.no_queue_list = [];
};

HttpMgr.prototype.post = function (cmd, _param, _cb, _errCb) {
    var req_data = {
        method: 'POST',
        cmd: cmd,
        param: _param,
        cb: _cb,
        errCb: _errCb
    };

    if (this.no_queue_list.indexOf(cmd) != -1) {
        this.httpReq(req_data);
    } else {
        // 添加到请求队列
        this._reqHttpList.push(req_data);
        if (this._isReqHttpIng) {
            return;
        } else {
            this.httpReq();
        }
    }
};

HttpMgr.prototype.httpReq = function (req_data) {
    var is_queue = !req_data;
    if (!req_data) req_data = this._reqHttpList[0];
    if (!req_data) return;
    var method = req_data.method;
    var cmd = req_data.cmd;
    var url = this.getLoginServer() + cmd;
    var param = req_data.param;
    var cb = req_data.cb;
    var errCb = req_data.errCb;
    if (!!cb) {
        this.once(cmd, cb);
    }
    var self = this;
    var callback = function (res) {
        self.emit(cmd, res);
        self._isReqHttpIng = false;
        if (is_queue) {
            self.httpReq();
        }
    };

    var callback_error = function (res) {
        self._isReqHttpIng = false;
        if (!!errCb) errCb('');
    };

    this._isReqHttpIng = true;
    this.ajax(method, cmd, param, callback, callback_error, 5, true);

    // 心跳不走loading
    if (this.no_play_anim_proto_list.indexOf(cmd) == -1) {
        app.loadingMgr.playAnimation();
    }
};

//_method 类型 GET   POST
//_url 地址  https://www.crystalgames.com
//_async 是否异步 true false
//_param  发送参数 type=101&gameid=4&channel=ios
//_timeOut  超时(毫秒)
//_cb 回调
//_errCb 错误回调
HttpMgr.prototype.ajax = function (_method, _url, _param, _cb, _errCb, _timeOut, _async) {
    var xmlhttp = new XMLHttpRequest();
    if (!xmlhttp || typeof xmlhttp == 'undefined') {
        cc.error("Init xmlhttprequest fail");
        if (_errCb)
            _errCb('');
        return;
    }

    var t1;// 用来作超时处理
    _method = _method.toUpperCase();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            self._isReqHttpIng = false;
            app.loadingMgr.stopAnimation();

            if (_method == "POST") {
                try {
                    JSON.parse(xmlhttp.responseText);
                    if (!!_cb)_cb(xmlhttp.responseText);
                    if (t1)
                        clearTimeout(t1);
                } catch (error) {
                    cc.log('could not transform to json data:', _url, _param);
                    if (!!xmlhttp.responseText) {
                        _errCb('');
                    } else {
                        if (!!_cb)_cb(xmlhttp.responseText);
                    }
                    if (t1)
                        clearTimeout(t1);
                }
            } else {
                _cb(xmlhttp.responseText);
                if (t1)
                    clearTimeout(t1);
            }
        }
    };
    if (!_url) {
        cc.error('打开的地址有问题,跳过这一步');
        if (_errCb)
            _errCb('');
        return;
    }
    cc.log('url:' + _url);
    xmlhttp.open(_method, _url, _async);
    if (_method == "POST") {
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        cc.log('post:' + _param);
        xmlhttp.send(_param);
    } else {
        xmlhttp.send();
    }

    var connecttoFail = function () {
        if (xmlhttp)
            xmlhttp.abort();
        cc.error('time out', _url, _param);
        if (_errCb)
            _errCb('');
    };
    t1 = setTimeout(connecttoFail, _timeOut); // 用来作超时处理
};

HttpMgr.prototype.getLoginServer = function () {
    //设置服务器类型
    if (this._login_server) {
        return this._login_server;
    }
    var serverType = app.config.server_type;
    var serverConfig = this._server_conf[serverType];
    this._login_server = serverConfig.login_server;
    return this._login_server;
};

// 连接配置
HttpMgr.prototype._server_conf = [
    // 正式服
    {
        login_server: "https://mj-game1.szfyhd.com:8100",
    },
    // 测试服
    {
        login_server: "http://111.231.65.136:8000",
    },
    // 开发服
    {
        login_server: "http://127.0.0.1",
    }
];

HttpMgr.prototype.on = function (cmd, tag, fn, errcb) {
    this.emitter.on(cmd, tag, fn, errcb);
};

HttpMgr.prototype.once = function (cmd, fn) {
    this.emitter.once(cmd, fn);
};

HttpMgr.prototype.off = function (cmd, tag, fn) {
    this.emitter.off(cmd, tag, fn);
};

HttpMgr.prototype.emit = function (cmd, data) {
    this.emitter.emit(cmd, data);
};

module.exports = function () {
    return new HttpMgr();
};