import BaseClass from "../../zero/BaseClass";
import BaseView from "../../zero/BaseView";

export default class Proxy extends BaseClass {
    uiMap:{[key:string]:any} = {};
    attrs:{[key:string]:any} = {};
    
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

