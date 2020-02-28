cc.EffectBase = cc.Class({
    extends: cc.Component,

    properties: {
        max_effect_sec: {
            default: 6,
            tooltip: '动画播放秒数。'
        },
        _cmpCallBack: null,
    },

    // use this for initialization
    onLoad: function () {
        var animation = this.node.getComponent(cc.Animation);
        animation.on('finished', this.cmpCallBack.bind(this));
    },

    onEnable: function () {
        this._maxFinishTime = new Date().getTime() + this.max_effect_sec * 1000;
    },

    setMaxEffectSec: function (sec) {
        if (!sec) reutrn;
        this.max_effect_sec = sec;
        this._maxFinishTime = new Date().getTime() + this.max_effect_sec * 1000;
    },

    onDisable: function () {
        this._maxFinishTime = null;
        this._cmpCallBack = null;
    },

    setCmpCallBack: function (cb) {
        this._cmpCallBack = cb;
    },

    cmpCallBack: function () {
        if (this._cmpCallBack) {
            this._cmpCallBack(this.node);
        }
        this._maxFinishTime = null;
        this._cmpCallBack = null;
    },

    update: function () {
        if (!this._maxFinishTime) {
            return;
        }
        var now = new Date().getTime();
        if (now > this._maxFinishTime) {
            this.cmpCallBack();
        }
    }
});
