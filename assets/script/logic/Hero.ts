import MapMainView from "../modules/map/MapMainView";
import MapUtils from "./MapUtils";
import Live from "./Live";
import HeroMgr from "../manager/HeroMgr";
import TaskBase from "./TaskBase";
import ToolKit from "../utils/ToolKit";
import DigTask from "./task/DigTask";
import PoolMgr from "../manager/PoolMgr";
import StateMachine from "./stateMachine/StateMachine";
import App from "../App";
import BuildTask from "./task/BuildTask";

export default class Hero extends Live {
    moveSpeed: number = 180;    //1秒
    task:TaskBase = null;
    heroMgr:HeroMgr = null;
    static _idIndex = 1000;
    _pb_tag:string = PoolMgr.POOL_TAG_ENUM.HERO;
    constructor(mapMainView: MapMainView, x: number = 0, y: number = 0) {
        super(mapMainView,x,y)
        this.idx = Hero._idIndex;
        Hero._idIndex += 1;
        this.init();
    }
    init(){
        this.heroMgr = this.mapMainView.heroMgr;
    }

    onEnterState(params:any){
        var stateId = this.stateMachine.state.id;
        switch (stateId) {
            case StateMachine.STATE_ENUM.IDLE:
                this.clearTask();               
                break;
            case StateMachine.STATE_ENUM.DIG:   
                this.digBlock(this.task);                  
                break;
            case StateMachine.STATE_ENUM.BUILD:
                this.buildTower(this.task);                     
                break;
            case StateMachine.STATE_ENUM.MOVING:                     
                //break;
            default:
                super.onEnterState(params)
                break;
        }
    }

    onState(params:any){
        var stateId = this.stateMachine.state.id;
        switch (stateId) {
            case StateMachine.STATE_ENUM.IDLE:
                this.fetchTask();
                break;
            default:
                super.onState(params)
                break;
        }
    }
    
    //每一秒的检测
    update(){
        this.stateMachine.checkState()
    }

    fetchTask(){
        if(this.task){
            this.checkAction();
        }else{
            var task = this.mapProxy.shiftTask();
            if(task){
                if(this.moveToPos(task.pos)){
                    this.task = task;                
                    return true;
                }else{
                    this.mapProxy.pushTask(task);   //无法完成的任务，重新塞回队列。
                    return false;
                }           
            }
            return false;
        }        
    }

    clearTask(){
        this.task = null;
        this.stateMachine.switchState(StateMachine.STATE_ENUM.IDLE);
    }

    fetchDigTask(){

    }
    digBlock(task:TaskBase){
        ToolKit.getInstance(ToolKit).showTip("执行挖掘的动作。");
        var pos = task.pos
        App.moduleMgr.command("map","digBlock",{pos : pos})
        this.stateMachine.switchState(StateMachine.STATE_ENUM.IDLE);
    }

    buildTower(task:TaskBase){
        ToolKit.getInstance(ToolKit).showTip("执行建设炮台的动作。");
        var pos = task.pos
        App.moduleMgr.command("map","buildTower",{pos : pos})
        this.stateMachine.switchState(StateMachine.STATE_ENUM.IDLE);
    }
    
    checkAction():boolean{
        // 检查目标行为，如果有可执行目标就执行。
        // 子类就是需要处理具体行为。        
        if(this.task){       
            if(this.task instanceof DigTask){
                var digPos = this.task.pos
                var block = this.mapProxy.getBlock(digPos.x,digPos.y);
                if(!block){
                    this.clearTask();
                    return false;
                }
                if(this.routeList.length < 1 || MapUtils.isNearBy(this.pos,this.task.pos)){                    
                    this.stateMachine.switchState(StateMachine.STATE_ENUM.DIG);
                    return true;
                }      
            }

            if(this.task instanceof BuildTask){
                var digPos = this.task.pos
                var block = this.mapProxy.getBlock(digPos.x,digPos.y);
                if(!block){
                    this.clearTask();
                    return false;
                }
                if(this.routeList.length < 1 || MapUtils.isNearBy(this.pos,this.task.pos)){                    
                    this.stateMachine.switchState(StateMachine.STATE_ENUM.BUILD);
                    return true;
                }      
            }             
        }else{
            this.fetchTask();
        }
        return false;
    }
    clear(){
        this.heroMgr.clear(this.idx)
    }
}