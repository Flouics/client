import App from "../App";
import Proxy from "../modules/base/Proxy";
import BaseClass from "./BaseClass";
import BaseUI from "./BaseUI";

const { ccclass, property } = cc._decorator;
var global = window;
@ccclass
export default class BaseView extends BaseClass {
    _httpEvents: Object[] = [];
    _socketEvents: Object[] = [];
    _objFlags: number;
    proxys:Proxy[] = []
    ui:BaseUI
    node:cc.Node
    bindView(ui:BaseUI){
        this.ui = ui;
        this.node = ui.node;
        this.ui.bindUI(this);
    }
    updateUI() {
        if(this.ui){
            this.ui.updateUI()
        }
    }

    onLoad(ui?:BaseUI) {

    }

    show() {

    }
    hide() {

    }
    onEnable(ui?:BaseUI) {
    }

    onClose(ui?:BaseUI) {

    }

    onDisable(ui?:BaseUI) {
        this.offMsg();
    }

    onDestroy(ui?:BaseUI) {
        this.offMsg();
        this.ui = null
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
    schedule(callback: Function, interval?: number, repeat?: number, delay?: number){
        if (this.ui){
            return this.ui.schedule(callback, interval, repeat, delay)
        }        
    }
    unschedule(callback: Function){
        if (this.ui){
            return this.ui.unschedule(callback)
        }        
    }
    update(dt:number){
        //this.updateUI();  主动刷新
    }
}
