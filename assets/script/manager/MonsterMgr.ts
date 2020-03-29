
import Monster from "../logic/Monster";
import MapMainView from "../modules/map/MapMainView";
import AsyncTaskMgr from "./AsyncTaskMgr";

// 怪物管理器
export default class MonsterMgr {
    monsterMap:Monster[] = [];
    _mapMainView:MapMainView = null;
    _nodeRoot:cc.Node = null;
    
    // 单例处理
    static _instance: MonsterMgr = null;
    constructor() {
        MonsterMgr._instance = this;
    }
    static getInstance():MonsterMgr {
        if (MonsterMgr._instance) {
            return MonsterMgr._instance
        } else {
            let instance = new MonsterMgr();
            return instance
        }
    }
    static get obj() {
        return MonsterMgr.getInstance()
    }

    init(mapMainView:MapMainView){
        this._mapMainView = mapMainView;
        this._nodeRoot = mapMainView.nd_masterRoot;
        this.reset()
    }

    reset(){
        this.monsterMap.forEach((monster)=>{
            monster.die()
        })
        this.monsterMap = []
    }

    create(x: number = 0, y: number = 0,task?:Function){
        let monster = new Monster(this._mapMainView,x,y);
        monster.initUI(this._nodeRoot,()=>{
            if(!!task) task(monster);    
        });
        this.monsterMap[monster.id] = monster;        
        return monster;
    }

    createMultiple(count:number = 1,x: number = 0, y: number = 0,task?:Function){
        var self = this;
        for (let i = 0; i < count; i++) {
            AsyncTaskMgr.getInstance().newAsyncTask(()=>{
                self.create(x,y,task);      
            })           
        }
    }

    clear(id:number){
        let obj = this.monsterMap[id];
        if(obj){
            obj.die();
        }
        delete this.monsterMap[id]
    }
}