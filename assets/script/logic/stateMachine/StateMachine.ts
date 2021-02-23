import { serialize } from "../../utils/Decorator";
import State from "./State";

var STATE_ENUM = {
    NONE:0,
    IDLE:1,
    MOVING:2,
    ATTACK:3,
}

export default class StateMachine {
    static STATE_ENUM = STATE_ENUM;     //状态属性枚举
    @serialize()
    state:State = new State(STATE_ENUM.NONE);      //执行的动作行为
    enterStateHandler:Function = ()=>{};             //进入状态执行函数
    onStateHandler:Function = ()=>{};                //处于状态执行函数
    exitStateHandler:Function = ()=>{};               //结束状态执行函数

    constructor(enterHandler?:Function,exitHandler?:Function,onHandler?:Function) {
        this.regeditHandler(enterHandler,exitHandler,onHandler);
        this.switchState(STATE_ENUM.IDLE)
    }

    switchState(stateId:number,enterParams?:any,exitParams?:any){
        this.state.exit(exitParams)
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