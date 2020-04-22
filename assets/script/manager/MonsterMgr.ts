
import Monster from "../logic/Monster";
import MapMainView from "../modules/map/MapMainView";
import AsyncTaskMgr from "./AsyncTaskMgr";
import BaseClass from "../zero/BaseClass";
import { serialize } from "../utils/Decorator";

// 怪物管理器
export default class MonsterMgr extends BaseClass {
    @serialize()
    monsterMap:{[key:number]:Monster} = {};
    _mapMainView:MapMainView = null;
    _nodeRoot:cc.Node = null;
    
    // 单例处理
    static _instance: MonsterMgr = null;
    constructor() {
        super();
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
    
    initSchedule(){
        this._mapMainView.unschedule(this.update.bind(this));
        this._mapMainView.schedule(this.update.bind(this),0.1);
    }

    reset(){
        for (const key in this.monsterMap) {
            if (this.monsterMap.hasOwnProperty(key)) {
                this.monsterMap[key].destory()                
            }
        }
        this.monsterMap = {}
        this.initSchedule();
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

    refresh(){
        for (const key in this.monsterMap) {
            if (this.monsterMap.hasOwnProperty(key)) {
                this.monsterMap[key].initUI(this._nodeRoot);                
            }
        }
    }
    
    clear(id:number){
        let obj = this.monsterMap[id];
        if(obj){
            obj.destory();
        }
        delete this.monsterMap[id]
    }

    update(){
        for (const key in this.monsterMap) {
            if (this.monsterMap.hasOwnProperty(key)) {
                this.monsterMap[key].update()                
            }
        }
    }
}