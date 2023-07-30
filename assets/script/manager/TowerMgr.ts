
import MapMainView from "../modules/map/MapMainView";
import Tower from "../logic/tower/Tower";
import Tower_1001 from "../logic/tower/Tower_1001";
import BaseClass from "../zero/BaseClass";
import { serialize } from "../utils/Decorator";

// 怪物管理器
export default class TowerMgr extends BaseClass{
    @serialize()
    towerMap:{[key:number]:Tower} = {};
    _mapMainView:MapMainView = null;
    _nodeRoot:cc.Node = null;
    _towerTypeClassMap = {};
    

    init(mapMainView:MapMainView){
        this._mapMainView = mapMainView;
        this._nodeRoot = mapMainView.nd_buildingRoot;
        this.initTowerTypeMap();
        this.reset()
    }
    
    initSchedule(){
        this._mapMainView.unschedule(this.update.bind(this));
        this._mapMainView.schedule(this.update.bind(this),0.1);
    }

    reset(){
        for (const key in this.towerMap) {
            if (this.towerMap.hasOwnProperty(key)) {
                this.towerMap[key].destory()                
            }
        }
        this.towerMap = {}
        this.initSchedule();
    }

    initTowerTypeMap(){
        this._towerTypeClassMap[1001] = Tower_1001;
    }

    getTowerClass(type:number){
        return this._towerTypeClassMap[type] || Tower;
    }

    create(x: number = 0, y: number = 0,towerType:number,task?:Function){
        let TowerClass = this.getTowerClass(towerType);
        let tower = new TowerClass(this._mapMainView) as Tower;
        tower.initUI(this._nodeRoot,()=>{
            if(!!task) task(tower);    
        });
        tower.createBuilding(cc.v2(x,y));
        this.towerMap[tower.id] = tower;        
        return tower;
    }
    
    refresh(){
        for (const key in this.towerMap) {
            if (this.towerMap.hasOwnProperty(key)) {
                this.towerMap[key].initUI(this._nodeRoot);                
            }
        }
    }

    clear(id:number){
        let obj = this.towerMap[id];
        if(obj){
            obj.destory();
        }
        delete this.towerMap[id]
    }

    update(){
        for (const key in this.towerMap) {
            if (this.towerMap.hasOwnProperty(key)) {
                this.towerMap[key].update()                
            }
        }
    }
}