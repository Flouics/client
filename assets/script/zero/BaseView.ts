import Proxy from "../modules/base/Proxy";
import BoxBase from "../logic/BoxBase";

const { ccclass, property } = cc._decorator;
var global = window;
@ccclass
export default class BaseView extends cc.Component {
    _httpEvents: Object[] = [];
    _socketEvents: Object[] = [];
    _bindData: { [key: string]: any } = {};
    _baseUrl: string = "";
    proxys: Proxy[] = [];
    _objFlags: number;

    _logicObj: BoxBase = null;
    bindUI(boxBase: BoxBase) {
        this._logicObj = boxBase
    }
    updateUI() {
        //todo需要重写
    /*         var self = this;
        var logicObj = this._logicObj
        this.updateDataToUI("boxBase.value", logicObj.id, () => {
            //--todo
        }) */
    }

    // use this for initialization
    onLoad() {

    }

    show() {

    }
    hide() {

    }
    onEnable() {
        this.onMsg();
        this.bindProxys();
    }

    onClose() {

    }

    onDisable() {
        this.offMsg();
        this.unbindProxys();
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

    loadSpt(spt: cc.Sprite, res_url: string = null, cb?: Function) {
        if (!res_url) return;
        cc.loader.loadRes(this._baseUrl + res_url, cc.SpriteFrame, function (err, spriteFrame) {
            if (!err && spt && spt.node) {
                spt.spriteFrame = spriteFrame;
                if (!!cb) cb(err, spriteFrame);
            }
        });
    };

    updateDataToUI(key: string, data: any, cb: Function) {
        let dataUnique = this.getDataUnique(data)
        if (this._bindData[key] != dataUnique) {
            if (!!cb) {
                cb(data);
            }
        }
        this._bindData[key] = dataUnique;
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
        this.updateUI();
    }
}
