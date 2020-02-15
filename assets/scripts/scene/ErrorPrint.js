/**
 * Created by Administrator on 2017/9/12.
 * 独立所有场景之外。
 */
cc.Class({
    extends: cc.Component,

    properties: {
        lb_error: cc.Label,
    },

    // use this for initialization
    onLoad: function () {

    },

    onEnable: function () {
        this.lb_error.string = window.g_event_error_str;
    },

    onRestart: function () {
        //todo ddz
        cc.game.restart();
    },
});
