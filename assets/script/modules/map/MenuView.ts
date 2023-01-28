import Building from "../../logic/Building";
import Tower from "../../logic/tower/Tower";
import ModuleMgr from "../../manager/ModuleMgr";
import MapProxy from "./MapProxy";
import ToolKit from "../../utils/ToolKit";
import MapMainView from "./MapMainView";
import BaseView from "../../zero/BaseView";
import App from "../../App";
import BaseUI from "../../zero/BaseUI";
import TouchUtils from "../../utils/TouchUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MenuView extends BaseView {
    _clickBuilding:Building
    mapProxy:MapProxy = null;
    @property(cc.Toggle)
    tgBuild:cc.Toggle = null;
    @property(cc.Toggle)
    tgDig:cc.Toggle = null;
    moduleName = "map";
    
    onLoad(){
        super.onLoad()
        this.mapProxy = this.proxy as MapProxy;
    }

    onClickBuild(){
        //this._clickBuilding = new Tower(null);
        var value = this.tgDig.isChecked ? MapMainView.OPERATION_ENUM.BUILD : MapMainView.OPERATION_ENUM.COMMON;
        this.mapProxy.updateView("switchOperation",value);
        this.command("onClickBuild")
    }

    onClickDig(){
        var value = this.tgDig.isChecked ? MapMainView.OPERATION_ENUM.DIG : MapMainView.OPERATION_ENUM.COMMON;
        this.mapProxy.updateView("switchOperation",value);
        this.command("onClickDig")
    }

    touchMove(){

    }

    onClickSetting(){
        App.windowMgr.open(App.RES_WINDOW.setting, function (uiNode:cc.Node) {
        });
    }
}
