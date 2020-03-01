import Emitter from "../zero/Emitter";

var HttpCmd = {
    PHP_CMD_LOGIN: '/api/login.do',
    PHP_CMD_SIGN_CODE: '/api/getValidateCode.do',
};

var global = window;
export default class HttpMgr {
    _reqHttpList: any[] = []; //网络请求——键值对队列
    _isReqHttpIng: boolean = false; //当前是否还有网络请求还在进行

    CMD = HttpCmd;
    _login_server: any = null;
    emitter: Emitter = new Emitter();

    //不需要显示loading动画的网络请求
    no_play_anim_proto_list: any[] = [];

    //直接请求 不需要排队的网络请求
    no_queue_list: any[] = [];

    // 连接配置
    _server_conf = [
        // 正式服
        {
            login_server: "",
        },
        // 测试服
        {
            login_server: "",
        },
        // 开发服
        {
            login_server: "http://127.0.0.1",
        }
    ];

    post(cmd:string, _param:any, _cb?:Function, _errCb?:Function) {
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

    httpReq(req_data?:any) {
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
        function callback (res:any) {
            self.emit(cmd, res);
            self._isReqHttpIng = false;
            if (is_queue) {
                self.httpReq();
            }
        };

        function callback_error (res:any) {
            self._isReqHttpIng = false;
            if (!!errCb) errCb('');
        };

        this._isReqHttpIng = true;
        this.ajax(method, cmd, param, callback, callback_error, 5, true);

        // 心跳不走loading
        if (this.no_play_anim_proto_list.indexOf(cmd) == -1) {
            global.app.loadingMgr.playAnimation();
        }
    };

    //_method 类型 GET   POST
    //_url 地址  https://www.crystalgames.com
    //_async 是否异步 true false
    //_param  发送参数 type=101&gameid=4&channel=ios
    //_timeOut  超时(毫秒)
    //_cb 回调
    //_errCb 错误回调
    ajax(_method:string, _url:string, _param:any, _cb?:Function, _errCb?:Function, _timeOut?:number, _async?:boolean) {
        var xmlhttp = new XMLHttpRequest();
        if (!xmlhttp || typeof xmlhttp == 'undefined') {
            cc.error("Init xmlhttprequest fail");
            if (_errCb)
                _errCb('');
            return;
        }

        var t1:number;// 用来作超时处理
        var self = this;
        _method = _method.toUpperCase();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                self._isReqHttpIng = false;
                global.app.loadingMgr.stopAnimation();

                if (_method == "POST") {
                    try {
                        JSON.parse(xmlhttp.responseText);
                        if (!!_cb) _cb(xmlhttp.responseText);
                        if (t1)
                            clearTimeout(t1);
                    } catch (error) {
                        cc.log('could not transform to json data:', _url, _param);
                        if (!!xmlhttp.responseText) {
                            _errCb('');
                        } else {
                            if (!!_cb) _cb(xmlhttp.responseText);
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

    getLoginServer() {
        //设置服务器类型
        if (this._login_server) {
            return this._login_server;
        }
        var serverType = global.app.config.server_type;
        var serverConfig = this._server_conf[serverType];
        this._login_server = serverConfig.login_server;
        return this._login_server;
    };


    on(cmd:string, tag:any, fn?:Function, errcb?:Function) {
        this.emitter.on(cmd, tag, fn, errcb);
    };

    once(cmd:string, fn?:Function) {
        this.emitter.once(cmd, fn);
    };

    off(cmd:string, tag:any, fn?:Function) {
        this.emitter.off(cmd, tag, fn);
    };

    emit(cmd:string, data:any) {
        this.emitter.emit(cmd, data);
    };
};
