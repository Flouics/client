cc.Class({
    extends: cc.DialogBase,

    properties: {
        nd_btnOK: cc.Node,
        nd_btnCancel: cc.Node,
        lb_content: cc.Label,
        nd_getReward: cc.Prefab,
    },

    // use this for initialization
    onLoad: function () {
        this._super();
    },

    initState: function () {
        this._isCanClose = true;
    },

    setCanClose: function (isCanClose) {
        if (isCanClose == undefined) isCanClose = true;
        this._isCanClose = isCanClose;
    },

    //打开一个窗口
    OpenWindow: function (l_info, cb_ok, cb_cancel) {
        this.lb_content.string = l_info;
        if (cb_ok) {
            this.nd_btnOK.active = true;
            this.cb_ok = cb_ok;
        } else {
            this.nd_btnOK.active = false;
        }
        if (cb_cancel) {
            this.nd_btnCancel.active = true;
            this.cb_cancel = cb_cancel;
        } else {
            this.nd_btnCancel.active = false;
        }
    },

    openCommon: function (content, cb_ok, cb_equit) {
        this.cb_ok = cb_ok;
        this.cb_equit = cb_equit;
        this.lb_content.string = content;
        this.nd_btnCancel.active = false;
        this.initState();
    },

    openWithCancel: function (content, cb_ok, cb_cancel, cb_equit) {
        this.cb_ok = cb_ok;
        this.cb_cancel = cb_cancel;
        this.cb_equit = cb_equit;
        this.lb_content.string = content;
        this.nd_btnCancel.active = true;
        this.initState();
    },

    onClickOK: function () {
        // 关闭界面
        if (typeof this.cb_ok == "function") {
            this.cb_ok();
        }
        this.onClose();
    },

    onClickCancel: function () {
        // 关闭界面
        if (typeof this.cb_cancel == "function") {
            this.cb_cancel();
        }
        this.onClose();
    },

    onClose: function () {
        // 关闭界面
        if (typeof this.cb_equit == "function") {
            this.cb_equit();
        }
        this._super();
    },
});
