import BaseView from "../../zero/BaseView";
import Block from "../../logic/Block";
import Building from "../../logic/Building";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIBuilding extends BaseView {
    @property(cc.Sprite)
    spt_face:cc.Sprite = null;

    _baseUrl = "texture/map/";
    _logicObj:Building = null;
    updateUI(){
        var self = this;
        var logicObj = this._logicObj
        this.updateDataToUI("building.type",logicObj.type,()=>{
            if(logicObj.type > 0){
                self.loadSpt(self.spt_face, "block/block_" + logicObj.type)
            }else{
                self.spt_face.spriteFrame = null;
            }           
        })
    }
}