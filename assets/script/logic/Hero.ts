import MapMainView from "../modules/map/MapMainView";
import MapUtils from "./MapUtils";
import UIHero from "../modules/map/UIHero";
import Live from "./Live";
import HeroMgr from "../manager/HeroMgr";
import MapProxy from "../modules/map/MapProxy";
import TaskBase from "./TaskBase";
import ToolKit from "../utils/ToolKit";
import DigTask from "./task/DigTask";
import PoolMgr from "../manager/PoolMgr";
import StateMachine from "./stateMachine/StateMachine";

export default class Hero extends Live {
    moveSpeed: number = 180;    //1秒
    task:TaskBase = null;
    heroMgr:HeroMgr = null;
    static _idIndex = 1000;
    _pb_tag:string = PoolMgr.POOL_TAG_ENUM.HERO;
    constructor(mapMainView: MapMainView, x: number = 0, y: number = 0) {
        super(mapMainView,x,y)
        this.id = Hero._idIndex;
        Hero._idIndex += 1;
        this.init();
    }
    init(){
        this.heroMgr = this.mapMainView.heroMgr;
    }

    enterState(params:any){
        var stateId = this.stateMachine.state.id;
        switch (stateId) {
            case StateMachine.STATE_ENUM.IDLE:               
                break;
            case StateMachine.STATE_ENUM.MOVING:                     
                break
            default:
                super.enterState(params)
                break;
        }
    }

    onState(params:any){
        var stateId = this.stateMachine.state.id;
        switch (stateId) {
            case StateMachine.STATE_ENUM.IDLE:
                this.fetchTask();
                break;
            case StateMachine.STATE_ENUM.MOVING:               
                //this.checkAction();
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
        return this.fetchDigTask();
    }
    fetchDigTask(){
        var task = this.mapProxy.shiftDigTask();
        if(task){
            var moveRouteList = this.getMoveRoute(task.digPos);
            var nearByPos = moveRouteList[0];
            if(nearByPos && MapUtils.isNearBy(task.digPos,nearByPos)){
                this.routeList = moveRouteList;
                this.task = task;
                this.moveNext();
                return true;
            }else{
                this.mapProxy.pushTask(task);   //无法完成的任务，重新塞回队列。
                return false;
            }           
        }
        return false;
    }
    digBlock(task:TaskBase){
        ToolKit.getInstance(ToolKit).showTip("执行挖掘的动作。");
        var pos = (task as DigTask).digPos
        this.mapMainView.digBlock(pos)
    }
    checkAction():boolean{
        // 检查目标行为，如果有可执行目标就执行。
        // 子类就是需要处理具体行为。
        
        if(this.task){       
            if(this.task instanceof DigTask){
                if(this.routeList.length < 1 || MapUtils.isNearBy(this.pos,this.task.digPos)){
                    this.digBlock(this.task);
                    return true;
                }                
            }         
        }
        return false;
    }
    clear(){
        this.heroMgr.clear(this.id)
    }
}