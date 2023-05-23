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
    @property(cc.Sprite)
    spt_flag:cc.Sprite = null;

    _baseUrl = "texture/map/";
    _logicObj:Block = null;
    updateUI(){
        var self = this;
        var logicObj = this._logicObj
        var loadBlockSpt = function(){
            let spt = self.spt_item;
            if(logicObj.checkType(Block.BLOCK_VALUE_ENUM.BLOCK) && logicObj.data_1 > 0){
                self.loadSpt(spt, "block/block_" + logicObj.data_1)
            }else{
                spt.spriteFrame = null;
            }       
        }
        this.updateDataToUI("block.type",logicObj.id,()=>{
            loadBlockSpt()           
        })

        this.updateDataToUI("block.data_1",logicObj.data_1,loadBlockSpt)

        this.updateDataToUI("block.data_2",logicObj.data_2,()=>{
            let spt = self.spt_flag;
            if(logicObj.data_2 > 0){
                self.loadSpt(spt, "block/flag_" + logicObj.data_2)
            }else{
                spt.spriteFrame = null;
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