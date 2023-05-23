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
export default class MineView extends BaseView {
    mapProxy:MapProxy = null;
    mineId:number = 0; //矿山id
    mineData = {};  // 矿山数据
    moduleName = "map";
    
    onLoad(){
        super.onLoad()
        this.mapProxy = this.proxy as MapProxy;
    }
    initData(id:number): void {
       this.mineId = id; 
    }
}
