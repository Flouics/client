import App from "../../App";
import DBMgr from "../../manager/DBMgr";
import BaseClass from "../../zero/BaseClass";
import BaseView from "../../zero/BaseView";

export default class Proxy extends BaseClass {
    uiMap:{[key:string]:any} = {};
    attrs:{[key:string]:any} = {};
    app:App;
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

    dumpToDb(){
        DBMgr.getInstance(DBMgr).setItem(this._classDbKey,this.serialize())
    }
    reloadFromDb(){
        var json = DBMgr.getInstance(DBMgr).getItem(this._classDbKey);
        if(json){
            this.unserialize(json);
        }
    }
}

