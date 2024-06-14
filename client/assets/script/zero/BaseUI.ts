
import { EDITOR } from "cc/env";
import BoxBase from "../logic/BoxBase";

import { _decorator,resources,Sprite,SpriteFrame,Component } from 'cc';
import CCEvent from "./CCEvent";
const {ccclass, property} = _decorator;

@ccclass("BaseUI")
export default class BaseUI extends Component {
    _bindData: { [key: string]: any } = {};
    _baseUrl: string = "";
    _logicObj: BoxBase = null;

    @property({
        tooltip: '切换场景的时候是否直接destroy'
    })
    is_destroy: boolean = true;    

    getId(){        
        return this.uuid
    }

    bindBox(box: BoxBase) {
        if(this._logicObj == box){
            return;
        }
        this._logicObj = box
        this._bindData = {}     
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

    init(...args: any[]){
        
    }

    show (...args: any[]) {

    }


    hide (...args: any[]) {

    }

    _show (...args: any[]) {
        this.node.active = true;
    }


    _hide (...args: any[]) {
        this.node.active = false;
        var self = this;
        if(this.is_destroy){    // 30秒后销毁
            this.scheduleOnce(()=>{
                if(self.node.isValid && self.node.active == true){
                    this.node.removeFromParent();
                }
            },30.0)
        }
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

    getResUrl(res_url:string){
        return this._baseUrl + res_url;
    }

    loadSpt(spt: Sprite, res_url: string = null, cb?: Function) {
        this.loadSptEx(spt,this.getResUrl(res_url),cb);
    };
    
    loadSptEx(spt: Sprite, res_url: string = null, cb?: Function) {
        if (!res_url) return;
        resources.load(res_url, SpriteFrame, function (err, spriteFrame) {
            if (!err && spt && spt.node) {
                spt.spriteFrame = spriteFrame ;
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
        if(!EDITOR){
            this.updateUI();
        }        
    }

    //CC 引擎的事件派发
    dispatchEvent(key:string,detail:any = this._logicObj){
        this.node.dispatchEvent(new CCEvent(key,true,detail));
    }

    regClickEvent(key:string,callback?:Function){
        this.node.on(key,(event:CCEvent)=>{
            event.propagationStopped = true;
            if (callback) callback(event);          
        });
    }
}
