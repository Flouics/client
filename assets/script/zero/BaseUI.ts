
import BoxBase from "../logic/BoxBase";

const { ccclass, property } = cc._decorator;
var global = window;
@ccclass
export default class BaseUI extends cc.Component {
    _bindData: { [key: string]: any } = {};
    _baseUrl: string = "";
    _logicObj: BoxBase = null;
    init(){
        
    }
    getId(){        
        return this.uuid
    }

    bindBox(box: BoxBase) {
        this._logicObj = box     
    }
    setBaseUrl(baseUrl:string){
        this._baseUrl = baseUrl;        
    }
    updateUI() {
        //todo需要重写
    /*         var self = this;
        var logicObj = this._logicObj
        this.updateDataToUI("value", logicObj.id, () => {
            //--todo
        }) */
    }

    // use this for initialization
    onLoad() {
        if (this._logicObj){
            this._logicObj.onLoad(this)
        }
    }

    show() {

    }
    hide() {

    }
    onEnable() {
        if (this._logicObj){
            this._logicObj.onEnable(this)
        }
    }

    onClose() {
        if (this._logicObj){
            this._logicObj.onClose(this)
        }
    }

    onDisable() {
        if (this._logicObj){
            this._logicObj.onDisable(this)
        }
    }

    onDestroy() {
        if (this._logicObj){
            this._logicObj.onDestroy(this)
        }
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

    
    loadSptEx(spt: cc.Sprite, res_url: string = null, cb?: Function) {
        if (!res_url) return;
        cc.loader.loadRes(res_url, cc.SpriteFrame, function (err, spriteFrame) {
            if (!err && spt && spt.node) {
                spt.spriteFrame = spriteFrame;
                if (!!cb) cb(err, spriteFrame);
            }
        });
    };

    updateDataToUI(key: string, data: any, cb: Function) {
        let dataKey = this.getDataKey(key)
        let dataUnique = this.getDataUnique(data)
        if (this._bindData[dataKey] != dataUnique) {
            if (!!cb) {
                cb(data);
            }
        }
        this._bindData[dataKey] = dataUnique;
    }

    getDataUnique(data: any) {
        if (typeof (data) == "object") {
            return JSON.stringify(data)
        } else {
            return data;
        }
    }

    getDataKey(key:string){
        return this._logicObj.getClassName() + "." + key
    }

    update(dt:number){
        this.updateUI();
    }
}
