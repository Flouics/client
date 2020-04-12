import MapMainView from "../../modules/map/MapMainView";
import Building from "../Building";
import BoxBase from "../BoxBase";
import MapUtils from "../MapUtils";
import DataMgr from "../../manager/DataMgr";
import BulletMgr from "../../manager/BulletMgr";
import Monster from "../Monster";
import MonsterMgr from "../../manager/MonsterMgr";
import TowerMgr from "../../manager/TowerMgr";

export default class Tower extends Building {
    static _idIndex = 1;
    bulletId = 100101;
    bulletCfg:any = {};
    constructor(mapMainView: MapMainView) {
        super(mapMainView)
        this.init()
    } 
    init(){
        this.atk = 1;
        this.range = 10;
        this.setBullet(this.bulletId);
        this.initSchedule();
    }

    setBullet(bulletId:number){
        this.bulletId = bulletId;
        this.bulletCfg = DataMgr.getInstance().getTable("bullet").findById(this.bulletId);
    }

    atkTarget(){
        let target:BoxBase;
        do {
            target = this.targetExtraList.shift();
        } while (!target || MapUtils.getLineDis(this.target.pos,this.pos) < this.range);
        if(!!target){
            this.genBullet(target)
        }
    }

    addMainTarget(target:BoxBase){
        if(this.targetExtraList.indexOf(target) == -1){
            this.targetExtraList.push(target)
        }
    }
    //寻找主目标
    findTarget(){
        var monsterMap = MonsterMgr.getInstance().monsterMap;
        var target:Monster
        for (const key in monsterMap) {
            if (monsterMap.hasOwnProperty(key)) {                
                if(this.checkTargetIntoRange(monsterMap[key])){
                    target = monsterMap[key];
                    break;
                }                
            }
        }
        return target;
    }

    genBullet(target:BoxBase){
        BulletMgr.getInstance().create(this,this.target,MapUtils.getViewPosByTilePos(this.pos),this.bulletCfg);
    }
    checkTargetIntoRange(target:BoxBase){
        if(target){
            return MapUtils.getUILineDis(target.getUIPos(),this.getUIPos()) < this.range * MapUtils.perDis;
        }
        return false;
    }
    clear(){
        TowerMgr.getInstance().clear(this.id);        
    }    
    update(){
        if(this.target){
            if (this.checkTargetIntoRange(this.target)) {
                this.target = null;
            } 
        }else{
            this.target = this.findTarget();
        }
    }
}