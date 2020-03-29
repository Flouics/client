import BaseView from "../../zero/BaseView";
import Block from "../../logic/Block";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIBlock extends BaseView {
    @property(cc.Sprite)
    spt_floor:cc.Sprite = null;
    @property(cc.Sprite)
    spt_item:cc.Sprite = null;
    @property(cc.Sprite)
    spt_event:cc.Sprite = null;

    _baseUrl = "texture/map/";
    _logicObj:Block = null;
    bindUI(block:Block){
        this._logicObj = block
    }
    updateUI(){
        var self = this;
        var logicObj = this._logicObj
        this.updateDataToUI("block.value",logicObj.value,()=>{
            if(logicObj.value > 0){
                self.loadSpt(self.spt_item, "block/block_" + logicObj.value)
            }else{
                self.spt_item.spriteFrame = null;
            }           
        })

        this.updateDataToUI("block.event",logicObj.event,()=>{
            if(logicObj.event > 0){
                self.loadSpt(self.spt_event, "event/event_" + logicObj.event)
            }else{
                self.spt_event.spriteFrame = null;
            }           
        })
    }
    update(dt:number){
        this.updateUI()
    }
}