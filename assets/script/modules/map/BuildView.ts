
import BaseView from "../../zero/BaseView";
import MapProxy from "./MapProxy";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BuildView extends BaseView {
    moduleName = "map";
    _baseUrl = "texture/map/";
    @property(cc.Prefab)

    onLoad(){
        super.onLoad()
    }

    initBuildListView(){

    }

}