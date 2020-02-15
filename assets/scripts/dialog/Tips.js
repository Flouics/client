cc.Class({
    extends: cc.DialogBase,

    properties: {
        lb_content: cc.Label,
        num_tipShowTime: 1.5,
        // ...
    },

    onLoad: function () {
        this._super();
        this.tipsList = []; //队列。
        this.closeTime = 0;
    },

    open: function (msg) {
        this.lb_content.string = msg;
        //todo ddz 队列后面在说
        this.closeTime = new Date().getTime() + this.num_tipShowTime * 1000;
    },

    update: function () {
        var nowTimestamp = new Date().getTime();
        if (nowTimestamp > this.closeTime) {
            this.onClose();
        }
    },

});
