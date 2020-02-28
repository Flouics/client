/*
 *	PHP请求命令
 */
var HttpCmd = {
    PHP_CMD_HEARTBEAT: "HeartBeatRequest",
    PHP_CMD_LOGIN: "LoginRequest",
    PHP_CMD_USER_BALANCE: "UserBalanceRequest",

    //平台支付相关的
    PHP_CMD_PAYHEARTBEAT: "PayHeartbeatRequest",
};

var serverType = {
    NormalServer: 0,	// 正式服
    TestServer: 1,		// 测试服
    DevServer: 2,		// 开发服
};

var webType = {
    Login: 1,			// 登录类型
    Pay: 2,			    // 支付类型
};

var HttpMessageHelp = function () {
    this._reqHttpList = []; //网络请求——键值对队列
    this._staticMap = [];   //网络请求域名后缀——键值对列表
    this._serverMap = [];   //请求类型——键值对列表
    this._writerMap = [];   //网络请求数据组装方法——键值对列表
    this._readerMap = [];   //网络请求回调函数——键值对列表
    this._nameMap = [];     //网络请求的文字描述——键值对列表

    this._isReqHttpIng = false; //当前是否还有网络请求还在进行


    this._login_server = "";    //当前服务器类型下的【登录】服务器地址：域名+端口
    this._pay_server = "";      //当前服务器类型下的【支付】服务器地址：域名+端口

    this._serverType = serverType.DevServer;    //服务器类型 0：正式  1：测试   2：开发
    this.CMD = HttpCmd;                         //所有的登录服务器——网络请求类型命令
    this._init();//*****************************************
    this._httpCallback = require('HttpMessageCallback');    //引用 【登录服务器回调管理类】
    this._initStaticMap();//*****************************************
    this.emitter = new require("Emitter")(this);//*****************************************

    //不需要显示loading动画的网络请求
    this.no_play_anim_proto_list = [
        this.CMD.PHP_CMD_HEARTBEAT,
        this.CMD.PHP_CMD_PAYHEARTBEAT,
        this.CMD.PHP_CMD_USER_BALANCE,
    ];

    //直接请求 不需要排队的网络请求
    this.no_queue_list = [
        this.CMD.PHP_CMD_HEARTBEAT,
    ];

};

HttpMessageHelp.prototype._init = function () {
    //设置服务器类型
    this._serverType = app.config.server_type;
    var serverConfig = this.ServerConfig[this._serverType];
    this._login_server = serverConfig.login_server;
    this._pay_server = serverConfig.pay_server;
    //todo 轮询后面再说。      
};


HttpMessageHelp.prototype.bindStaticMap = function (protoName, suffix, server, writerFunction, readerFunction, name) {
    this._serverMap[protoName] = server;
    this._staticMap[protoName] = suffix;
    this._writerMap[protoName] = writerFunction;
    this._readerMap[protoName] = readerFunction;
    this._nameMap[protoName] = name;
};

HttpMessageHelp.prototype.writerPacket = function (protoName, data) {
    if (protoName && this._writerMap[protoName]) {

        return this._writerMap[protoName](data);
    }
    else
        return null;
};

HttpMessageHelp.prototype.readerPacket = function (protoName, data) {
    if (protoName && this._readerMap[protoName])
        return this._readerMap[protoName](data);
    else
        return null;
};


HttpMessageHelp.prototype._initStaticMap = function () {
    // 登录请求
    this.bindStaticMap(this.CMD.PHP_CMD_LOGIN,
        "login_v1",
        webType.Login,
        this.requestLogin,
        this._httpCallback.onLogin.bind(this._httpCallback),
        "登录");
    // 大厅心跳请求
    this.bindStaticMap(this.CMD.PHP_CMD_HEARTBEAT,
        "heartbeat.php",
        webType.Login,
        this.heartBeatRequest,
        this._httpCallback.heartBeatResponse.bind(this._httpCallback),
        "大厅心跳");

    // 金币更新
    this.bindStaticMap(this.CMD.PHP_CMD_USER_BALANCE,
        "my_balance",
        webType.Login,
        this.UserBalanceRequest,
        this._httpCallback.UserBalanceResponse.bind(this._httpCallback),
        "金币更新");

    /******支付*******/
        // 支付心跳请求
    this.bindStaticMap(this.CMD.PHP_CMD_PAYHEARTBEAT,
        "heartbeat.php",
        webType.Pay,
        this.heartBeatPayRequest,
        this._httpCallback.payHearbeatResponse.bind(this._httpCallback),
        "支付心跳");
};

/*
 * 开始普通心跳
 */
HttpMessageHelp.prototype.startNormalHearBeat = function (time) {
    return;
    if (time == undefined) time = 60;
    this.stopNormalHearBeat();
    app.schedule(function callback() {
        this.sendMessage(this.CMD.PHP_CMD_HEARTBEAT);
    }.bind(this), time, "normalHeartBeat");
};


//停止普通心跳

HttpMessageHelp.prototype.stopNormalHearBeat = function () {
    app.unschedule("normalHeartBeat");
};

//开始支付心跳

HttpMessageHelp.prototype.startPayHearBeat = function () {
    app.schedule(function callback() {
        this.sendMessage(this.CMD.PHP_CMD_PAYHEARTBEAT)
    }.bind(this), 0.8, "payHeartBeat");
};

//停止支付心跳

HttpMessageHelp.prototype.stopPayHearBeat = function () {
    app.unschedule("payHeartBeat");
};

/*
 * 登录请求
 */
HttpMessageHelp.prototype.requestLogin = function (data) {
    console.log("登录请求 ---");
    //ios和安卓账号分离，默认连安卓。
    var android_ios = cc.sys.OS_IOS == cc.sys.os ? 2 : 1;
    var message = new proto.login.LoginRequest();
    message.setOpenId(data.openId);
    message.setOpenKey(data.openKey);
    message.setChannel(data.loginType);
    message.setAppId(app.config.app_id);
    message.setDeviceId(app.config.device_id);
    message.setVerId(app.config.version);
    message.setLocation("");
    //message.setAndroidIos(android_ios);
    //message.setPf(app.config.pf);
    return message;
};

/*
 * 心跳请求
 */
HttpMessageHelp.prototype.heartBeatRequest = function (data) {
    var message = new proto.login.HeartbeatRequest();
    message.setUserId(app.userData.getUserId());
    message.setDeviceId(app.config.device_id);
    message.setAppId(app.config.app_id);
    return message;
};

/*
 * 支付心跳请求
 */
HttpMessageHelp.prototype.heartBeatPayRequest = function (data) {
    var message = new proto.recharge.PayHeartbeatRequest();
    message.setUserId(app.userData.getUserId());
    message.setAppId(app.config.app_id);
    return message;
};

/*
 * 获取金币请求
 */
HttpMessageHelp.prototype.UserBalanceRequest = function (data) {
    var message = new proto.login.UserBalanceRequest();
    message.setUserId(app.userData.getUserId());
    return message;
};

/*
 * 发送消息
 */
HttpMessageHelp.prototype.sendMessage = function (protoName, data, cb) {

    console.log("---------------HTTP请求 protoName：", protoName, "   data:", data);

    if (!proto) {
        cc.log("httpMessageHelp proto is error")
        return;
    }
    //todo ddz
    /*    // 网络异常
     if (!extension.isNetworkAvailable()) {
     GlobalConstant.showNetNoConnectDialog();
     return;
     }*/

    var message = null;
    if (!message) {
        message = this.writerPacket(protoName, data);
    }

    if (!message) {
        app.toolKit.showTip("HTTP请求数据为空");
        return;
    }
    var req_data = {
        protoName: protoName,
        message: message,
        cb: cb
    };

    if (this.no_queue_list.indexOf(protoName) != -1) {
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

HttpMessageHelp.prototype.httpReq = function (req_data) {
    var reqData = req_data ? req_data : this._reqHttpList[0];
    if (!reqData) return;

    var protoName = reqData.protoName;
    var message = reqData.message;
    var cb = reqData.cb;

    if (!!cb) {
        this.once(protoName, cb);
    }

    if (!req_data) this._isReqHttpIng = true;
    var self = this;
    var url = this.getReqUrl(protoName);
    cc.log("------[http]url:", url);
    if (!url) {
        app.toolKit.showTip("请求地址无效！");
        return;
    }
    try {
        var request = new XMLHttpRequest();
        request.open("post", url);
        var bytes = message.serializeBinary();
        request.send(bytes);
        this._startReqTimeOut(protoName, request);
        request.onload = function (evt) {
            app.loginMgr.onWebRes(protoName);
            self._endReqTimeOut();
            if (!req_data) {
                self._reqHttpList.shift();
            }
            self._isReqHttpIng = false;
            app.loadingMgr.stopAnimation();
            try {
                var result = goog.crypt.base64.decodeStringToUint8Array(request.responseText);
                self.readerPacket(protoName, result);
            } catch (e) {
                app.toolKit.showTip("无法解析数据！" + e);
            }

            if (!self._isReqHttpIng && !req_data) {
                self.httpReq();
            }
        };

        // 心跳不走loading
        if (this.no_play_anim_proto_list.indexOf(protoName) == -1) {
            app.loadingMgr.playAnimation();
        }


    } catch (e) {
        this._isReqHttpIng = false;
        this._reqHttpList = [];
        cc.error(protoName, "协议出错");
        app.toolKit.showTip("协议出错");
    }
};


HttpMessageHelp.prototype._startReqTimeOut = function (protoName, request) {
    if (this.no_queue_list.indexOf(protoName) != -1)
        return;

    var self = this;
    self._protoName = protoName;
    self._request = request;
    this._timeOutInterval = setTimeout(function () {
        self._isReqHttpIng = false;
        self._reqHttpList = [];
        if (self._request) self._request.abort();
        app.toolKit.showTip((self._nameMap[self._protoName]) ? self._nameMap[self._protoName] + "请求超时" : self._protoName + "请求超时");
        app.loadingMgr.stopAnimation();
    }, 15 * 1000);
};

HttpMessageHelp.prototype._endReqTimeOut = function () {
    if (this.no_queue_list.indexOf(this._protoName) != -1)
        return;

    clearTimeout(this._timeOutInterval);
    this._protoName = null;
    this._request = null;
};

HttpMessageHelp.prototype.getReqUrl = function (protoName) {
    if (protoName && this._staticMap[protoName] && this._serverMap[protoName]) {
        if (this._serverMap[protoName] == webType.Login)
            return this._login_server + "/" + this._staticMap[protoName];
        else if (this._serverMap[protoName] == webType.Pay)
            return this._pay_server + "/" + this._staticMap[protoName];
    }
};

// 连接配置
HttpMessageHelp.prototype.ServerConfig = [
    // 正式服
    {
        login_server: "https://mj-game1.szfyhd.com:8100",
        pay_server: "https://mj-game1.szfyhd.com:8300",
    },
    // 测试服
    {
        login_server: "http://111.231.65.136:8000",
        pay_server: "http://111.231.65.136:8701",
    },
    // 开发服
    {
        login_server: "http://127.0.0.1:8010",
        pay_server: "http://127.0.0.1:8030",
    }
];

HttpMessageHelp.prototype.on = function (event, tag, fn, errcb) {
    this.emitter.on(event, tag, fn, errcb);
};

HttpMessageHelp.prototype.once = function (event, fn) {
    this.emitter.once(event, fn);
};

HttpMessageHelp.prototype.off = function (event, tag, fn) {
    this.emitter.off(event, tag, fn);
};

HttpMessageHelp.prototype.emit = function (event, data) {
    this.emitter.emit(event, data);
};

module.exports = function () {
    return new HttpMessageHelp();
};
