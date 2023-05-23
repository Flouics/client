
import BaseProxy from "../base/Proxy";
/*
 * 背包数据
 */
export default class TimeProxy extends BaseProxy {

    //方法
    init(){

    }
    getTime():number{
        return new Date().getTime();
    }
};


