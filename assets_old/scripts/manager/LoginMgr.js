var LoginMgr = function () {
    this._is_login = false;
};

LoginMgr.prototype.init = function () {
    this._req_list_map = {};
    this._req_list = [];
    this._req_total = 0;
    this._cb = null;
};

LoginMgr.prototype.initWebRequest = function (protoObjList, cb) {
    if (!protoObjList || protoObjList.length < 1) {
        cb(1);
        return;
    }
    this.init();
    var protoObj;
    for (var i in protoObjList) {
        protoObj = protoObjList[i];
        if (protoObj && protoObj.cmd) {
            this._req_list_map[protoObj.cmd] = protoObj.data || {};
            this._req_list.push(protoObj);
        }
    }

    this._req_total = protoObjList.length;
    this._cb = cb;
    this.startHttpReq();
};

LoginMgr.prototype.startHttpReq = function () {
    this._req_list.forEach(function (protoObj) {
        global.app.httpMgr.sendMessage(protoObj.cmd, protoObj.data);
    });
};

LoginMgr.prototype.onWebRes = function (protoName) {
    if (this._req_list_map && this._req_list_map[protoName]) {
        delete this._req_list_map[protoName];
        this.callback();
    }
};

LoginMgr.prototype.callback = function () {
    var keys = Object.keys(this._req_list_map);
    var left_count = keys.length;
    var percent = this._req_total == 0 ? 1 : (this._req_total + 1 - left_count) / this._req_total;
    if (!!this._cb) this._cb(parseInt(percent * 100));
};

LoginMgr.prototype.setLogin = function () {
    this._is_login = true;
    this._cb = null;
};

LoginMgr.prototype.isLogin = function () {
    return this._is_login;
};


module.exports = function () {
    return new LoginMgr();
};
