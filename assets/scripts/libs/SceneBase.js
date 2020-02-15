cc.SceneBase = cc.Class({
    extends: cc.BaseView,

    properties: {},

    // use this for initialization
    onLoad: function () {
        this._super();
        this.fitWinSize();
    },

    fitWinSize: function () {
        var is_fit = cc.winSize.width / cc.winSize.height >= 1280 / 720;
        var canvas = this.node.getComponent(cc.Canvas);
        if (!is_fit && canvas) {
            canvas.fitWidth = true;
        }
    },
});
