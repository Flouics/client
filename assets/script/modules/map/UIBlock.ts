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
    updateUI(block:Block){
        var self = this;
        this.updateDataToUI("block.value",block.value,()=>{
            if(block.value > 0){
                self.loadSpt(self.spt_item, "block/block_" + block.value)
            }else{
                self.spt_item.spriteFrame = null;
            }           
        })

        this.updateDataToUI("block.event",block.event,()=>{
            if(block.event > 0){
                self.loadSpt(self.spt_event, "event/event_" + block.event)
            }else{
                self.spt_event.spriteFrame = null;
            }           
        })
    }
}