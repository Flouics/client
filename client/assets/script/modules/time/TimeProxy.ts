
import App from "../../App";
import BaseProxy from "../base/Proxy";
/*
 * 背包数据
 */
export default class TimeProxy extends BaseProxy {
    _timeZone:number;
    //方法
    init(){
        this.setTimeZone(8);        
    }

    setTimeZone(timeZone:number){
        this._timeZone = timeZone;
        App.timeMgr._timeZone = this._timeZone;
    }
    getTime():number{
        return App.timeMgr.getTime();
    }

    //服务端和客户端时间差
    updateServerTimeDiff(server_timestamp: number) {
        App.timeMgr.updateServerTimeDiff(server_timestamp);
    };
};

export function getTimeProxy(): TimeProxy {
    return TimeProxy._instance;
}

