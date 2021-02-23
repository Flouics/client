import { serialize } from "../../utils/Decorator";

export default class State {
    @serialize()
    id:number = 0;      //执行的动作行为
    enterStateHandler:Function;             //进入状态执行函数
    onStateHandler:Function;                //处于状态执行函数
    exitStateHandler:Function;               //结束状态执行函数

    constructor(stateId:number,enterHandler?:Function,exitHandler?:Function,onHandler?:Function) {
        this.id = stateId
        this.regeditHandler(enterHandler,exitHandler,onHandler)
    }

    enter(params:any){
        var handler = this.enterStateHandler;
        if(handler){
            handler(params)
        }
    }

    exit(params:any){
        var handler = this.exitStateHandler
        if(handler){
            handler(params)
        }
    }

    isState(stateId:number){
        return this.id == stateId
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