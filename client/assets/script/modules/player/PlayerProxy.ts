/*
 * 用户数据
 */

import BaseProxy from "../base/Proxy";
export default class PlayerProxy extends BaseProxy {
    attrs:{[key:string]:any} = {} 

    //方法
    init(){
        this.attrs = {
            aid : 0        
           ,uid : "123456"
           ,gender : 0    //性别
           ,gold : 0      //金币
           ,diamond : 0   //钻石
           ,name : ""     //名字
           ,handUrl : ""  //头像
           ,level : 1     //等级
           ,exp : 0       //经验
           ,score : ""
        
           ,ip : ""
           ,location : ""
           ,serverLocation : ""
           ,currentGameId : 0
        
            // 重连数据
           ,isReconnect : false
            //socket信息
           ,roomId : ""
           ,gameServerIp : ""
           ,gameServerPort : 0
        
            
            // 设备ID                  
           ,deviceId : "aa.bb.ddc"
        }
    }
    load(){

    }
};

export function getPlayerProxy(): PlayerProxy {
    return PlayerProxy._instance;
}

