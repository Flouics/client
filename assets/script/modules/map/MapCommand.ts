
import BaseCommand from "../base/Command"
import WindowMgr from "../../manager/WindowMgr"
import ModuleMgr from "../../manager/ModuleMgr"
import App from "../../App";
import DigTask from "../../logic/task/DigTask";
import MapProxy from "./MapProxy";

export default class MapCommand extends BaseCommand{
    proxy:MapProxy;
    showMapView(params:any){
       let proxy = ModuleMgr.getInstance(ModuleMgr).getProxy("map")
        WindowMgr.getInstance(WindowMgr).open("");
    }

    onClickBuild(){
        App.toolKit.showTip("onClickBuild")
    }

    onClickDig(){
        App.toolKit.showTip("onClickDig")
    }    
    pushTask(task:DigTask){
        this.proxy.pushTask(task)
    }
    
}
