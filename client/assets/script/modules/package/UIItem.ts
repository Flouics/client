import BaseUI from "../../zero/BaseUI";
import Block from "../../logic/Block";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIItem extends BaseUI {
    @property(cc.Sprite)
    spt_item:cc.Sprite = null;

    _baseUrl = "texture/package/";
    _logicObj:Block = null;
    updateUI(){
        var self = this;
        var logicObj = this._logicObj
        var loadSpt = function(){
            let spt = self.spt_item;
            if(logicObj.id > 0){
                self.loadSpt(spt, "package/item/" + logicObj.id)
            }else{
                spt.spriteFrame = null;
            }       
        }
        this.updateDataToUI("item.type",logicObj.id,loadSpt)
    }
}