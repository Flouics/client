const {ccclass, property} = cc._decorator;

@ccclass
export default class BaseView extends cc.Component{     
    _httpEvents: {[key:string]:any};
    _socketEvents: {[key:string]:any};
    // use this for initialization
    onLoad () {

    }

    show() {

    }
    hide() {

    }
    onEnable() {
        this.onMsg();
    }

    onClose(){

    }

    onDisable(){
        this.offMsg();
    }

    onDestroy() {
        this.offMsg();
    }

    onMsg() {
        this.offMsg();
        this._httpEvents.forEach(function (obj:any) {
            app.httpMgr.on(obj.event, obj.tag, obj.fn);
        });
        this._socketEvents.forEach(function (obj:any) {
            game.socketMgr.on(obj.event, obj.tag, obj.fn);
        });
    },

    offMsg() {
        this._httpEvents.forEach(function (obj:any) {
            app.httpMgr.off(obj.event, obj.tag, obj.fn);
        });
        this._socketEvents.forEach(function (obj:any) {
            game.socketMgr.off(obj.event, obj.tag, obj.fn);
        });
    }
    registerHttpEvent(event:string, fn:Function) {
        var tag = '' + cc.js.getClassName(this) + this.__instanceId;
        //var tag = this.__instanceId;
        this._httpEvents.push({
            event: event,
            tag: tag,
            fn: fn
        })
        app.httpMgr.on(event, tag, fn);
    }

    registerSocketEvent(event:string, fn:Function) {
        var tag = '' + cc.js.getClassName(this) + this.__instanceId;
        //var tag = this.__instanceId;
        this._socketEvents.push({
            event: event,
            tag: tag,
            fn: fn
        })
        game.socketMgr.on(event, tag, fn);
    }
}
