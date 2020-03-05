var global = window;
export default class LoginMgr {
    _is_login: boolean = false;
    _req_list_map = {};
    _req_list = [];
    _req_total = 0;
    _cb = null;

    // 单例处理
    static _instance: LoginMgr = null;
    constructor() {
        LoginMgr._instance = this;
        this.init()
    }
    static getInstance():LoginMgr{
        if (LoginMgr._instance) {
            return LoginMgr._instance
        } else {
            let instance = new LoginMgr();
            return instance
        }
    }
    static get obj() {
        return LoginMgr.getInstance()
    }

    init() {

        this._req_list_map = {};
        this._req_list = [];
        this._req_total = 0;
        this._cb = null;
    }
    initWebRequest(protoObjList: any, cb?: Function) {
        if (!protoObjList || protoObjList.length < 1) {
            cb(1);
            return;
        }
        this.init()
        var protoObj: any;
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

    startHttpReq() {
        this._req_list.forEach(function (protoObj) {
            global.app.httpMgr.sendMessage(protoObj.cmd, protoObj.data);
        });
    };

    onWebRes(protoName) {
        if (this._req_list_map && this._req_list_map[protoName]) {
            delete this._req_list_map[protoName];
            this.callback();
        }
    };

    callback() {
        var keys = Object.keys(this._req_list_map);
        var left_count = keys.length;
        var percent: number = this._req_total == 0 ? 1 : (this._req_total + 1 - left_count) / this._req_total;
        if (!!this._cb) this._cb(parseInt((percent * 100).toString()));
    };

    setLogin() {
        this._is_login = true;
        this._cb = null;
    };

    isLogin() {
        return this._is_login;
    };
};
