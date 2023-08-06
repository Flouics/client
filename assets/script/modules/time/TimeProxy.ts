
import App from "../../App";
import BaseProxy from "../base/Proxy";
/*
 * 背包数据
 */
export default class TimeProxy extends BaseProxy {

    //方法
    init(){

    }
    getTime():number{
        return App.timeMgr.getTime();
    }

    //服务端和客户端时间差
    updateServerTimeDiff(server_timestamp: number) {
        App.timeMgr.updateServerTimeDiff(server_timestamp);
    };
};


