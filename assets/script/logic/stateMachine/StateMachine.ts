import { serialize } from "../../utils/Decorator";
import State from "./State";

var STATE_ENUM = {
    NONE:0,
    IDLE:1, 
    MOVING:2,
    ATTACK:3,
    DIG:4,
    BUILD:5,
    PATHFINDING:6,             // 寻路中
    GOTO_MINE:7,             //去挖矿
    MINING:8,                //挖矿ing
    CARRY_RESOURCES:9,     // 搬运资源
}

export default class StateMachine {
    static STATE_ENUM = STATE_ENUM;     //状态属性枚举
    state:State = new State(STATE_ENUM.NONE);      //执行的动作行为
    lastState:State = new State(STATE_ENUM.NONE);   //旧状态
    enterStateHandler:Function = ()=>{};             //进入状态执行函数
    onStateHandler:Function = ()=>{};                //处于状态执行函数
    exitStateHandler:Function = ()=>{};               //结束状态执行函数

    constructor(enterHandler?:Function,exitHandler?:Function,onHandler?:Function) {
        this.regeditHandler(enterHandler,exitHandler,onHandler);
        this.switchState(STATE_ENUM.IDLE)
    }

    switchState(stateId:number,enterParams?:any,exitParams?:any){
        if (this.isState(stateId)) {
            return;     //相同状态不切换
        }
        this.state.exit(exitParams)
        this.lastState = this.state;
        this.state = new State(stateId,this.enterStateHandler,this.exitStateHandler,this.onStateHandler)
        this.state.enter(enterParams)
    }

    checkState(params?:any){
        var handler = this.onStateHandler
        if(handler){
            handler(params)
        }
    }
    isState(stateId:number){
        return this.state.id == stateId
    }

    isLastState(stateId:number){
        return this.lastState.id == stateId
    }
    
    regeditHandler(enterHandler?:Function,exitHandler?:Function,onHandler?:Function){
        if(enterHandler){
            this.enterStateHandler = enterHandler
        }
        if(onHandler){
            this.onStateHandler = onHandler
        }
        if(enterHandler){
            this.exitStateHandler = exitHandler
        }
    }

    
}