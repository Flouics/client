import Building from "../../logic/Building";
import Tower from "../../logic/tower/Tower";
import ModuleMgr from "../../manager/ModuleMgr";
import MapProxy from "./MapProxy";
import ToolKit from "../../utils/ToolKit";
import MapMainView from "./MapMainView";
import BaseView from "../../zero/BaseView";
import App from "../../App";
import BaseUI from "../../zero/BaseUI";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MenuView extends BaseView {
    _clickBuilding:Building
    mapProxy:MapProxy = null;
    @property(cc.Toggle)
    tgBuild:cc.Toggle = null;
    @property(cc.Toggle)
    tgDig:cc.Toggle = null;
    
    onLoad(){
        this.mapProxy = App.moduleMgr.getProxy("map") as MapProxy;
        this.proxys = [this.mapProxy];
    }

    onClickBuild(){
        //this._clickBuilding = new Tower(null);
    }
    onMapBuild(){
        ToolKit.getInstance(ToolKit).showTip("onMapBuild")
    }

    onClickDig(){
        var value = this.tgDig.isChecked ? MapMainView.OPERATION_ENUM.DIG : MapMainView.OPERATION_ENUM.COMMON;
        this.mapProxy.updateView("switchOperation",value);
    }
    onMapDig(){
        ToolKit.getInstance(ToolKit).showTip("onMapDig")
    }

    touchMove(){

    }
}
