import MapMainView from "../modules/map/MapMainView";
import MapUtils from "./MapUtils";
import Live from "./Live";
import UIManster from "../modules/map/UIMaster";
import MonsterMgr from "../manager/MonsterMgr";
import Headquarters from "./building/Headquarters";
import Building from "./Building";
import PoolMgr from "../manager/PoolMgr";
import BoxBase from "./BoxBase";
export default class Monster extends Live {
    moveSpeed: number = 180;    //1秒
    static _idIndex = 100000;
    _pb_tag:string = PoolMgr.POOL_TAG_ENUM.MONSTER;
    target:Live|Building = null;
    monsterMgr:MonsterMgr = null;
    constructor(mapMainView: MapMainView, x: number = 0, y: number = 0) {
        super(mapMainView,x,y)
        this.id = Monster._idIndex;
        Monster._idIndex += 1;
        this.init();
    }
    init(){
        this.life = 10;
        this.monsterMgr = this.mapMainView.monsterMgr;
    }
    clear(){
        this.monsterMgr.clear(this.id);        
    }    
    attackHeadquarters(){
        var target = this.mapMainView.headquarters;
        var nearByPos = this.getNearByPos(target.getRealArea())
        this.target = target;
        this.moveToPos(nearByPos);
    }
    checkAction():boolean{
        if(this.target instanceof Building){
            if(this.checkCrossBuilding(this.target)){
                MonsterMgr.getInstance(MonsterMgr).clear(this.id)
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

    update(){
        
    }
}