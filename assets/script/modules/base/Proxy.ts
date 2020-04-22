import BaseView from "../../zero/BaseView";
import BaseClass from "../../zero/BaseClass";

export default class Proxy extends BaseClass {
    uiMap:{[key:string]:any} = {};
    attrs:{[key:string]:any} = {};

    // 单例处理
    static _instance:any = null;
    
     // 构造函数 
    constructor() { 
        super();
        this.init();                    
    }
    init(){
        Proxy._instance = this;
    }

    static getInstance(){
        if( Proxy._instance){
            return Proxy._instance
        }else{
            let instance = new Proxy();
            return instance
        }
    }

    static get obj(){
        return Proxy.getInstance();
    } 
    
    onHttpMsg(cmd:string,data:any){
        cc.log(cmd,data);
    }

    onSocketMsg(cmd:string,data:any){
        cc.log(cmd,data);
    }

    bindView(view:BaseView){
        this.uiMap[view.uuid] = view;
    }
    unbindView(view:BaseView){
        delete this.uiMap[view.uuid];
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
}

