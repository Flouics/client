import App from "../../App";
import DBMgr from "../../manager/DBMgr";
import BaseClass from "../../zero/BaseClass";
import BaseView from "../../zero/BaseView";
import Command from "./Command";

export default class Proxy extends BaseClass {
    uiMap:{[key:string]:any} = {};
    attrs:{[key:string]:any} = {};
    app:App;
    cmd:Command;
    isDump:boolean = true;
    constructor(_class:any){       
        super(_class);
        this.app = App.getInstance(App);
    }
    
    onHttpMsg(cmd:string,data:any){
        cc.log(cmd,data);
    }

    onSocketMsg(cmd:string,data:any){
        cc.log(cmd,data);
    }

    bindView(view:BaseView){
        this.uiMap[view.getId()] = view;
    }
    unbindView(view:BaseView){
        delete this.uiMap[view.getId()];
    }
    updateView(funcName:string,params?:{}){
        for (var uuid in this.uiMap) {
            if (this.uiMap.hasOwnProperty(uuid)) {
                let  ui = this.uiMap[uuid];
                if(ui[funcName] && typeof(ui[funcName]) == "function"){
                    ui[funcName](params)
                }
            }
        }
    }

    getDbKey(){        
        var playerProxy = App.moduleMgr.getProxy("player");
        var userId = playerProxy.uuid;
        return this._classDbKey + "_" + userId
    }

    dumpToDb(){
        if (!this.isDump) {
            return
        }
        var key = this.getDbKey();
        var json = this.serialize();
        cc.log("dumpToDb",json)
        DBMgr.getInstance(DBMgr).setItem(key,json);
    }
    reloadFromDb(){
        if (!this.isDump) {
            return
        }
        var key = this.getDbKey();
        var json = DBMgr.getInstance(DBMgr).getItem(key);
        if(json){
            cc.log("reloadFromDb",json)
            this.unserialize(json);
        }
    }
}

