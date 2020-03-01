/*
 * 登录
 * 登录标识；1，游客测试；2，微信测试；3，自动登录测试；4，游客登录；5，微信登录；6，自动登录
 */
var LoginType = {
    GuestTest: 1,
    WechatTest: 2,
    AutoTest: 3,
    Guest: 4,
    Wechat: 5,
    Auto: 6,
};

cc.Class({
    extends: cc.BaseView,

    properties: {
        btn_wanba: cc.Button,
        btn_guest: cc.Button,
    },

    // use this for initialization
    onLoad: function () {
    },

    onEnable: function () {
        this._super();
    },

    checkPlatform: function () {
     
    },

    loginGuest: function (event) {
        var isClickCD = global.app.buttonCtrl.isClickToFast(event.target);
        if (isClickCD) {
            var data = {
                loginType: LoginType.Guest,
                openId: global.app.config.device_id,
                openKey: global.app.config.device_id,
                pf: 'test'
            }
            this.login(data);
        }
    },

    login: function () {
        global.app.httpMgr.sendMessage(global.app.httpMgr.CMD.PHP_CMD_LOGIN, data);
    },


});
