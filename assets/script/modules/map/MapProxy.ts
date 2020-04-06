/*
 * 用户数据
 */

import BaseProxy from "../base/Proxy";
import Block from "../../logic/Block";
import Building from "../../logic/Building";
import DigTask from "../../logic/task/DigTask";
import TaskBase from "../../logic/TaskBase";
import MapUtils from "../../logic/MapUtils";
export default class MapProxy extends BaseProxy {
    attrs:{[key:string]:any} = {} 
    blockMap: { [k1: number]: { [k2: number]: Block } } = {};
    buldingMap: { [key: number]: Building } = {}
    digTask:DigTask[] = [];
    digTaskMap = {}

    //方法
    init(){
        MapProxy._instance = this;
    }

    static getInstance(){
        if( MapProxy._instance){
            return MapProxy._instance
        }else{
            let instance = new MapProxy();
            return instance
        }
    }

    static get obj(){
        return MapProxy.getInstance();
    } 
    
    load(){

    }
    pushTask(task:TaskBase){
        if(this.checkTask(task)){
            if(task instanceof DigTask){
                this.digTask.push(task)
            }
        }
    }
    checkTask(task:TaskBase){
        if(task instanceof DigTask){
           return !this.digTaskMap[MapUtils.getKey(task.digPos)]
        }
    }
    delTask(task:TaskBase){
        var taskList = null;
        if(task instanceof DigTask){
            taskList = this.digTask;
        }
        if(taskList){
            for (let index = 0; index < taskList.length; index++) {
                if(taskList[index].id == task.id){
                    taskList.splice(index)
                    return true;
                }                
            }
        }
        return false;
    }
    shiftDigTask(){
        var task = this.digTask.shift()
        return task;
    }
};


