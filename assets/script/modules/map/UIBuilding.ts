import Building from "../../logic/Building";
import BaseUI from "../../zero/BaseUI";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIBuilding extends BaseUI {
    @property(cc.Sprite)
    spt_face:cc.Sprite = null;
    _baseUrl = "texture/map/";
    _logicObj:Building = null;
    updateUI(){
        var self = this;
        var logicObj = this._logicObj
        this.updateDataToUI("building.type",logicObj.id,()=>{
            if(logicObj.id > 0){
                self.loadSpt(self.spt_face, "building/building_" + logicObj.id)
            }else{
                self.spt_face.spriteFrame = null;
            }           
        })
    }
}