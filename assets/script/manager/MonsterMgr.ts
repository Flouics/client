
import Monster from "../logic/Monster";
import MapMainView from "../modules/map/MapMainView";
import AsyncTaskMgr from "./AsyncTaskMgr";
import BaseClass from "../zero/BaseClass";
import { serialize } from "../utils/Decorator";
import App from "../App";

// 怪物管理器
class ScheduleTask  {
    count:number = 0;
    interval:number = 0;
    task:Function = nullfun;
    data:any = null;
    lastUpdateTimeStamp:number = 0;
    constructor(count:number = 1,interval: 0,data = {},task?:Function){
        this.count = count;
        this.interval = interval;
        this.data = data;
        this.task = task;
    }
}
export default class MonsterMgr extends BaseClass {
    @serialize()
    monsterMap:{[key:number]:Monster} = {};
    _mapMainView:MapMainView = null;
    _nodeRoot:cc.Node = null;
    _scheduleTask:ScheduleTask[] = [];

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

    create(monsterType:number = 0,pos:cc.Vec2,task?:Function){
        let monster = new Monster(this._mapMainView,pos.x,pos.y);
        monster.initUI(this._nodeRoot,()=>{
            if(!!task) task(monster);    
        });
        this.monsterMap[monster.idx] = monster;        
        return monster;
    }

    createMultiple(monsterType:number = 0,count:number = 1,pos:cc.Vec2,data = {},task?:Function){
        var self = this;
        for (let i = 0; i < count; i++) {
            App.asyncTaskMgr.newAsyncTask(()=>{
                self.create(monsterType,pos,task);      
            })           
        }
    }

    addScheduleTask(count:number = 1,interval: number,data:any = {},task:Function,key?:string){
        key = key || task.name;
        if (this._scheduleTask[key]){
            cc.warn(this.getClassName(),"hasScheduleTask by key:",key);
        }
        this._scheduleTask[key] = task;
    }

    updateScheduleTask(){
        var timeProxy = App.moduleMgr.getProxy("time");
        var nowTime = timeProxy.getTime();
        
        for (const key in this._scheduleTask) {
            var task = this._scheduleTask[key];
            if (nowTime > task.lastUpdateTimeStamp + task.interval){
                task.lastUpdateTimeStamp = nowTime;
                task.count = task.count - 1;
                task.task();
                if (task.count < 1){
                    this._scheduleTask[key] = null;                
                }              
            }
        };
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
        this.updateScheduleTask()
    }
}