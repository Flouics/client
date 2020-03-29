import MapMainView from "../modules/map/MapMainView";
import MapUtils from "./MapUtils";
import Live from "./Live";
import UIManster from "../modules/map/UIMaster";
import MonsterMgr from "../manager/MonsterMgr";
import Headquarters from "./building/Headquarters";
import Building from "./Building";
export default class Monster extends Live {
    moveSpeed: number = 180;    //1秒
    static _idIndex = 100000;
    _pb_url:string = "prefab/map/monster";
    target:Live|Building = null;
    constructor(mapMainView: MapMainView, x: number = 0, y: number = 0) {
        super(mapMainView,x,y)
        this.id = Monster._idIndex;
        Monster._idIndex += 1;
    }

    clear(){
        MonsterMgr.getInstance().clear(this.id);        
    }
    
    attackHeadquarters(){
        var target = this.mapMainView.headquarters;
        this.target = target;
        this.moveToPos(target.pos);
    }
    checkAction():boolean{
        if(this.target instanceof Building){
            if(this.checkCrossBuilding(this.target)){
                MonsterMgr.getInstance().clear(this.id)
                return true;
            }
        }     
        return false;
    }
    checkCrossBuilding(building:Building){
        var area = building.getRealArea();
        var isCross = area.some((pos)=>{
            if(this.getDistance(pos) <= 1){
                return true
            }
        })       
        return !!isCross;
    }
}