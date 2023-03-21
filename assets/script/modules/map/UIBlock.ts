import BaseUI from "../../zero/BaseUI";
import Block from "../../logic/Block";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIBlock extends BaseUI {
    @property(cc.Sprite)
    spt_floor:cc.Sprite = null;
    @property(cc.Sprite)
    spt_item:cc.Sprite = null;
    @property(cc.Sprite)
    spt_event:cc.Sprite = null;

    _baseUrl = "texture/map/";
    _logicObj:Block = null;
    updateUI(){
        var self = this;
        var logicObj = this._logicObj
        this.updateDataToUI("block.type",logicObj.type,()=>{
            if(logicObj.type == Block.BLOCK_VALUE_ENUM.BLOCK){
                self.loadSpt(self.spt_item, "block/block_" + logicObj.data_1)
            }else{
                self.spt_item.spriteFrame = null;
            }           
        })

        this.updateDataToUI("block.data_1",logicObj.data_1,()=>{
            if(logicObj.type == Block.BLOCK_VALUE_ENUM.BLOCK){
                self.loadSpt(self.spt_item, "block/block_" + logicObj.data_1)
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
}