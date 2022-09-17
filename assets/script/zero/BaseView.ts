import App from "../App";
import Proxy from "../modules/base/Proxy";
import BaseClass from "./BaseClass";
import BaseUI from "./BaseUI";

const { ccclass, property } = cc._decorator;
var global = window;
@ccclass
export default class BaseView extends BaseUI {
    _httpEvents: Object[] = [];
    _socketEvents: Object[] = [];
    _objFlags: number;
    proxys:Proxy[] = [];

    onLoad() {

    }

    show() {

    }
    hide() {

    }
    onEnable() {
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
            App.httpMgr.on(obj.event, obj.tag, obj.fn);
        });
        this._socketEvents.forEach(function (obj: any) {
           App.game.socketMgr.on(obj.event, obj.tag, obj.fn);
        });
    }

    offMsg() {
        this._httpEvents.forEach(function (obj: any) {
            App.httpMgr.off(obj.event, obj.tag, obj.fn);
        });
        this._socketEvents.forEach(function (obj: any) {
           App.game.socketMgr.off(obj.event, obj.tag, obj.fn);
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
        App.httpMgr.on(event, tag, fn);
    }

    registerSocketEvent(event: string, fn: Function) {
        var tag = '' + cc.js.getClassName(this) + this._objFlags;
        //var tag = this.__instanceId;
        this._socketEvents.push({
            event: event,
            tag: tag,
            fn: fn
        })
       App.game.socketMgr.on(event, tag, fn);
    }

    getDataUnique(data: any) {
        if (typeof (data) == "object") {
            return JSON.stringify(data)
        } else {
            return data;
        }
    }
    bindProxys() {
        this.proxys.forEach((proxy) => {
            proxy.bindView(this)
        })
    }
    unbindProxys() {
        this.proxys.forEach((proxy) => {
            proxy.unbindView(this)
        })
    }
    update(dt:number){
        //this.updateUI();  主动刷新
    }
}
