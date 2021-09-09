cc.BaseView = cc.Class({
    extends: cc.Component,

    properties: {
        _httpEvents: [],
        _socketEvents: [],
    },

    // use this for initialization
    onLoad: function () {

    },
    show: function () {

    },
    hide: function () {

    },
    onEnable: function () {
        this.onMsg();
    },

    onClose: function () {

    },

    onDisable: function () {
        this.offMsg();
    },

    onDestroy: function () {
        this.offMsg();
    },

    onMsg: function () {
        this.offMsg();
        this._httpEvents.forEach(function (obj) {
            App.httpMgr.on(obj.event, obj.tag, obj.fn);
        });
        this._socketEvents.forEach(function (obj) {
            game.socketMgr.on(obj.event, obj.tag, obj.fn);
        });
    },

    offMsg: function () {
        this._httpEvents.forEach(function (obj) {
            App.httpMgr.off(obj.event, obj.tag, obj.fn);
        });
        this._socketEvents.forEach(function (obj) {
            game.socketMgr.off(obj.event, obj.tag, obj.fn);
        });
    },

    registerHttpEvent: function (event, fn) {
        var tag = '' + cc.js.getClassName(this) + this.__instanceId;
        //var tag = this.__instanceId;
        this._httpEvents.push({
            event: event,
            tag: tag,
            fn: fn
        })
        App.httpMgr.on(event, tag, fn);
    },

    registerSocketEvent: function (event, fn) {
        var tag = '' + cc.js.getClassName(this) + this.__instanceId;
        //var tag = this.__instanceId;
        this._socketEvents.push({
            event: event,
            tag: tag,
            fn: fn
        })
        game.socketMgr.on(event, tag, fn);
    },
});
