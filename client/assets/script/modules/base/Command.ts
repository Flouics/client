import App from "../../App";
import BaseView from "../../zero/BaseView";
import Proxy from "./Proxy";

export default class Command{
    app:App;
    proxy:Proxy;
    moduleName:String = "";
    constructor(){
        this.app = App.getInstance(App);
    }
    init(){
    }
    showView(name:string,cb:Function = nullfun,param?:any){
        var winRes = name;
        if (name.startsWith("prefab") || name.startsWith("/prefab")){
            winRes = name;
        }else{
            winRes = "prefab/" + this.moduleName + "/" + name;
        }
        App.windowMgr.open(winRes, cb);
    }
}
