import Building from "../../logic/Building";
import BaseUI from "../../zero/BaseUI";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIBuilding extends BaseUI {
    @property(cc.Sprite)
    spt_face:cc.Sprite = null;
    _baseUrl = "texture/map/";
    _logicObj:Building = null;
    _directAction:cc.Tween = null;
    
    playDirectAction(angle:number):void {
        if(!!this._directAction) return;
        var duration = 0.3;
        var self = this;
        this._directAction = cc.tween(this.node)
        .to(duration,
            { angle: angle})
        .call(() => {                
            //todo
            self.stopDirectAction();
        })
        this._directAction.start();
    }
    
    stopDirectAction(): void {
        this._directAction = null;
    }

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