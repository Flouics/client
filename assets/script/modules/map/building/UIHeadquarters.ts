import UIBuilding from "../UIBuilding";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIHeadquarters extends UIBuilding {
    _baseUrl = "texture/map/";
    updateUI(){
        var self = this;
        var logicObj = this._logicObj
        // this.updateDataToUI("building.type",logicObj.type,()=>{
        //     if(logicObj.type > 0){
        //         self.loadSpt(self.spt_face, "block/block_" + logicObj.type)
        //     }else{
        //         self.spt_face.spriteFrame = null;
        //     }           
        // })
    }
}