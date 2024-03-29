import Mine from "../../logic/Mine";
import BaseUI from "../../zero/BaseUI";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIMine extends BaseUI {
    @property(cc.Sprite)
    spt_face:cc.Sprite = null;
    _baseUrl = "texture/map/";
    _logicObj:Mine = null;
    updateUI(){
        var self = this;
        var logicObj = this._logicObj
        this.updateDataToUI("mine.type",logicObj.id,()=>{
            if(logicObj.id > 0){
                self.loadSpt(self.spt_face, "mine/mine_" + logicObj.id)
            }else{
                self.spt_face.spriteFrame = null;
            }           
        })
    }
}