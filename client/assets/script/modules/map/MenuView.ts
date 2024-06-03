import Building from "../../logic/Building";
import MapMainView from "./MapMainView";
import BaseView from "../../zero/BaseView";
import App from "../../App";

import { _decorator, Toggle} from 'cc';
import { RES_WINDOW } from "../../Global";
const {ccclass, property} = _decorator;

@ccclass("MenuView")
export default class MenuView extends BaseView {
    _clickBuilding:Building

    @property(Toggle)
    tgBuild:Toggle = null;
    @property(Toggle)
    tgDig:Toggle = null;
    moduleName = "map";
    
    onLoad(){
        super.onLoad()
    }

    onClickBuild(){
        //this._clickBuilding = new Tower(null);
        var value = this.tgBuild.isChecked ? MapMainView.OPERATION_ENUM.BUILD : MapMainView.OPERATION_ENUM.COMMON;
        this.proxy.updateView("switchOperation",value);
        this.command("onClickBuild")
    }

    onClickDig(){
        var value = this.tgDig.isChecked ? MapMainView.OPERATION_ENUM.DIG : MapMainView.OPERATION_ENUM.COMMON;
        this.proxy.updateView("switchOperation",value);
        this.command("onClickDig")
    }

    touchMove(){

    }

    onClickSetting(){
        App.windowMgr.open(RES_WINDOW.setting, function (uiNode:Node) {
        });
    }
}
