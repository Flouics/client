
import MapMainView from "../modules/map/MapMainView";
import Tower from "../logic/tower/Tower";
import Tower_1001 from "../logic/tower/Tower_1001";

// 怪物管理器
export default class TowerMgr {
    towerMap:{[key:number]:Tower} = {};
    _mapMainView:MapMainView = null;
    _nodeRoot:cc.Node = null;
    _towerTypeClassMap = {};
    
    // 单例处理
    static _instance: TowerMgr = null;
    constructor() {
        TowerMgr._instance = this;
    }
    static getInstance():TowerMgr {
        if (TowerMgr._instance) {
            return TowerMgr._instance
        } else {
            let instance = new TowerMgr();
            return instance
        }
    }
    static get obj() {
        return TowerMgr.getInstance()
    }

    init(mapMainView:MapMainView){
        this._mapMainView = mapMainView;
        this._nodeRoot = mapMainView.nd_buildingRoot;
        this.reset()
    }
    
    initSchedule(){
        this._mapMainView.unschedule(this.update.bind(this));
        this._mapMainView.schedule(this.update.bind(this),0.1);
    }

    reset(){
        for (const key in this.towerMap) {
            if (this.towerMap.hasOwnProperty(key)) {
                this.towerMap[key].clear()                
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
        let tower = new TowerClass(this._mapMainView);
        tower.initUI(this._nodeRoot,()=>{
            if(!!task) task(tower);    
        });
        tower.createBuilding(cc.v2(x,y));
        this.towerMap[tower.id] = tower;        
        return tower;
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