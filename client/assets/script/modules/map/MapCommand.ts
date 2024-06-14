
import BaseCommand from "../base/Command"
import WindowMgr from "../../manager/WindowMgr"
import ModuleMgr from "../../manager/ModuleMgr"
import App from "../../App";
import MapProxy from "./MapProxy";
import Block from "../../logic/Block";
import TaskBase from "../../logic/TaskBase";
import { toolKit } from "../../utils/ToolKit";

export default class MapCommand extends BaseCommand{
    proxy:MapProxy;
    moduleName:String = "map";
    showMapView(params:any){
        let proxy = ModuleMgr.getInstance(ModuleMgr).getProxy("map")
        WindowMgr.getInstance(WindowMgr).open("");
    }

    onClickBuild(){
        this.showView("buildView")
    }

    onClickDig(){
        toolKit.showTip("onClickDig")
    }    
    pushTask(task:TaskBase){
        this.proxy.pushTask(task)
    }

    digBlock(params:any){
        var pos = params.pos || {}
        var block = this.proxy.getBlock(pos.x,pos.y)
        if(block && block.checkType(Block.BLOCK_VALUE_ENUM.BLOCK)){
            block.onDig()
            this.proxy.updateView("digBlock", params);
        }        
    }

    buildTower(params:any){
        var pos = params.pos || {}
        var block = this.proxy.getBlock(pos.x,pos.y)
        //todo 修改炮塔
        if(block && block.checkType(Block.BLOCK_VALUE_ENUM.EMPTY)){
            //todo tower
            var towerType = 1001;
            this.proxy.towerMgr.create(pos.x,pos.y,towerType)
            block.id = Block.BLOCK_VALUE_ENUM.BUILDING;
            this.proxy.updateView("buildTower", params);
        }    
    }
    
    reloadMapView(){
        this.proxy.updateView("reloadMapView");
    }
}
