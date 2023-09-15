import UIBuilding from "../UIBuilding";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UITower extends UIBuilding {
    _baseUrl = "texture/map/";

    updateUI(){
/*         var self = this;
        var logicObj = this._logicObj
        this.updateDataToUI("building.type",logicObj.id,()=>{
            if(logicObj.id > 0){
                self.loadSpt(self.spt_face, "building/building_" + logicObj.id)
            }else{
                self.spt_face.spriteFrame = null;
            }           
        }) */
    }
}