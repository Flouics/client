import BaseView from "../../zero/BaseView";
import Building from "../../logic/Building";
import Tower from "../../logic/tower/Tower";
import ModuleMgr from "../../manager/ModuleMgr";
import MapProxy from "./MapProxy";
import ToolKit from "../../utils/ToolKit";
import MapMainView from "./MapMainView";

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
        this.mapProxy = ModuleMgr.obj.getProxy("map") as MapProxy;
        this.proxys = [this.mapProxy];
    }

    onClickBuild(){
        this._clickBuilding = new Tower(null);
    }
    onMapBuild(){
        ToolKit.getInstance().showTip("onMapBuild")
    }

    onClickDig(){
        var value = this.tgDig.isChecked ? MapMainView.OPERATION_ENUM.DIG : MapMainView.OPERATION_ENUM.COMMON;
        this.mapProxy.updateView("switchOperation",value);
    }
    onMapDig(){
        ToolKit.getInstance().showTip("onMapDig")
    }

    touchMove(){

    }
}
