import App from "../../App";
import DBMgr from "../../manager/DBMgr";
import BaseClass from "../../zero/BaseClass";
import BaseView from "../../zero/BaseView";
import Debug from "../../utils/Debug";
import { getPlayerProxy } from "../player/PlayerProxy";
import Command from "./Command";

export default class Proxy extends BaseClass {
    viewMap:{[key:string]:any} = {};
    attrs:{[key:string]:any} = {};
    app:App;
    cmd:Command;
    isDump:boolean = true;
    moduleName:string = "";
    _baseUrl:string = "";
    static _moduleName:string = "";
    constructor(_class:any){       
        super(_class);
        this.app = App.getInstance(App);
        this.init()
    }

    setCommand<T extends Command>(command:T){
        this.cmd = command as T;
        this.cmd.proxy = this;
    }

    setModuleName(name:string) {
        this.moduleName = name;
        this._class._moduleName = name;
        this._baseUrl = "texture/" + this.moduleName + "/";
        window[this.moduleName + "Proxy"] = this;
        if(this.cmd){
            this.cmd.moduleName = this.moduleName;
        }
    }
    
    init(){
        
    }
    onHttpMsg(cmd:string,data:any){
        Debug.log(cmd,data);
    }

    onSocketMsg(cmd:string,data:any){
        Debug.log(cmd,data);
    }

    bindView(view:BaseView){
        this.viewMap[view.getId()] = view;
    }
    unbindView(view:BaseView){
        delete this.viewMap[view.getId()];
    }
    updateView(funcName:string,params?:{}){
        for (var uuid in this.viewMap) {
            if (this.viewMap.hasOwnProperty(uuid)) {
                let  ui = this.viewMap[uuid];
                if(ui[funcName] && typeof(ui[funcName]) == "function"){
                    ui[funcName](params)
                }
            }
        }
    }

    getConf(filename:string,id?: number){
        if(!id){
            return App.dataMgr.getTable(filename);
        }else{
            return App.dataMgr.findById(filename,id);
        }
    }

    getDbKey(){        
        var userId = getPlayerProxy().attrs.uid;
        return this._classDbKey + "_" + userId
    }

    dumpPrepare(){
        
    }

    reloadPrepare(){

    }

    dumpToDb(){
        if (!this.isDump) {
            return
        }
        this.dumpPrepare()
        var key = this.getDbKey();
        var json = this.serialize();
        Debug.log("dumpToDb",json)
        App.dbMgr.setItem(key,json);
    }
    reloadFromDb(){
        if (!this.isDump) {
            return
        }        
        var key = this.getDbKey();
        var json = App.dbMgr.getItem(key);
        if(json){
            Debug.log("reloadFromDb",json)
            this.unserialize(json);
            this.reloadPrepare()
        }
    }
}

