import MapMainView from "../../modules/map/MapMainView";
import Building from "../Building";
import BoxBase from "../BoxBase";
import MapUtils from "../MapUtils";
import DataMgr from "../../manager/DataMgr";
import BulletMgr from "../../manager/BulletMgr";
import Monster from "../Monster";
import MonsterMgr from "../../manager/MonsterMgr";
import TowerMgr from "../../manager/TowerMgr";
import TimeMgr from "../../manager/TimeMgr";

export default class Tower extends Building {
    static _idIndex = 1;
    bulletId = 100101;
    bulletCfg:any = {};
    towerMgr:TowerMgr = null;
    lastShootTime:number = 0;
    constructor(mapMainView: MapMainView) {
        super(mapMainView)
        this.init()
    } 
    init(){
        //不能直接引用TowerMgr，会导致交叉引用的问题。
        this.towerMgr = this.mapMainView.towerMgr;  
        this.atk = 1;
        this.range = 100;
        this.setBullet(this.bulletId);
        this.initSchedule();
    }

    setBullet(bulletId:number){
        this.bulletId = bulletId;
        this.bulletCfg = DataMgr.getInstance().getTable("bullet_type").findById(this.bulletId);
    }

    atkTarget(){
        if(this.target){
            var nowTimeStamp = TimeMgr.obj.getTime();
            if(nowTimeStamp > this.lastShootTime){
                this.genBullet()
                this.lastShootTime = nowTimeStamp + this.bulletCfg.coldown * 1000
            }            
        }
    }

    addExtraTarget(target:BoxBase){
        if(this.targetExtraList.indexOf(target) == -1){
            this.targetExtraList.push(target)
        }
    }
    //寻找主目标
    findTarget(){
        var monsterMap = MonsterMgr.getInstance().monsterMap;
        var target:Monster = null;
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
    genBullet(){
        BulletMgr.getInstance().create(this,this.target,MapUtils.getViewPosByTilePos(this.pos),this.bulletCfg);
    }
    checkTargetIntoRange(target:BoxBase){
        if(target && target.isDestroy == false){            
            var distance  = MapUtils.getUILineDis(target.getUIPos(),this.getUIPos())
            return  distance < this.range * MapUtils.perDis;
        }
        return false;
    }
    clear(){
        this.towerMgr.clear(this.id);        
    }    
    update(){
        if(this.target){
            if (!this.checkTargetIntoRange(this.target)) {
                this.target = null;
            } else{
                this.atkTarget();
            }
        }else{
            this.target = this.findTarget();
            this.atkTarget();
        }
    }
}