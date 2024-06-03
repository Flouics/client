import BaseUI from "../../zero/BaseUI";
import Block from "../../logic/Block";

import { _decorator, Sprite} from 'cc';
const {ccclass, property} = _decorator;

@ccclass("UIItem")
export default class UIItem extends BaseUI {
    @property(Sprite)
    spt_item:Sprite = null;

    _baseUrl = "texture/package/";
    _logicObj:Block = null;
    updateUI(){
        var self = this;
        var logicObj = this._logicObj
        var loadSpt = function(){
            let spt = self.spt_item;
            if(logicObj.id > 0){
                self.loadSpt(spt, "item/" + logicObj.id)
            }else{
                spt.spriteFrame = null;
            }       
        }
        this.updateDataToUI("item.type",logicObj.id,loadSpt)
    }
}