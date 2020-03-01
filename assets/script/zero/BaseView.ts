const { ccclass, property } = cc._decorator;
var global = window;
@ccclass
export default class BaseView extends cc.Component {
    _httpEvents: { [key: string]: any };
    _socketEvents: { [key: string]: any };
    __instanceId: string;
    _objFlags: string;
    // use this for initialization
    onLoad() {

    }

    show() {

    }
    hide() {

    }
    onEnable() {
        this.onMsg();
    }

    onClose() {

    }

    onDisable() {
        this.offMsg();
    }

    onDestroy() {
        this.offMsg();
    }

    onMsg() {
        this.offMsg();
        this._httpEvents.forEach(function (obj: any) {
            global.app.httpMgr.on(obj.event, obj.tag, obj.fn);
        });
        this._socketEvents.forEach(function (obj: any) {
            global.game.socketMgr.on(obj.event, obj.tag, obj.fn);
        });
    }

    offMsg() {
        this._httpEvents.forEach(function (obj: any) {
            global.app.httpMgr.off(obj.event, obj.tag, obj.fn);
        });
        this._socketEvents.forEach(function (obj: any) {
            global.game.socketMgr.off(obj.event, obj.tag, obj.fn);
        });
    }
    registerHttpEvent(event: string, fn: Function) {
        var tag = '' + cc.js.getClassName(this) + this._objFlags;
        //var tag = this.__instanceId;
        this._httpEvents.push({
            event: event,
            tag: tag,
            fn: fn
        })
        global.app.httpMgr.on(event, tag, fn);
    }

    registerSocketEvent(event: string, fn: Function) {
        var tag = '' + cc.js.getClassName(this) + this._objFlags;
        //var tag = this.__instanceId;
        this._socketEvents.push({
            event: event,
            tag: tag,
            fn: fn
        })
        global.game.socketMgr.on(event, tag, fn);
    }
}
