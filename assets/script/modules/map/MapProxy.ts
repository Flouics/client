/*
 * 用户数据
 */

import Proxy from "../base/Proxy";
import Block from "../../logic/Block";
import Building from "../../logic/Building";
import DigTask from "../../logic/task/DigTask";
import TaskBase from "../../logic/TaskBase";
import MapUtils from "../../logic/MapUtils";
import Headquarters from "../../logic/building/Headquarters";
import MonsterMgr from "../../manager/MonsterMgr";
import HeroMgr from "../../manager/HeroMgr";
import TowerMgr from "../../manager/TowerMgr";
import BulletMgr from "../../manager/BulletMgr";
import { serialize } from "../../utils/Decorator";
import DBMgr from "../../manager/DBMgr";
export default class MapProxy extends Proxy {
    attrs:{[key:string]:any} = {} 
    @serialize()
    blockMap: { [k1: number]: { [k2: number]: Block } } = {};
    @serialize()
    buldingMap: { [key: number]: Building } = {};
    @serialize()
    headquarters: Headquarters = null;
    @serialize()
    monsterMgr: MonsterMgr = null;
    @serialize()
    heroMgr: HeroMgr = null;
    @serialize()
    towerMgr:TowerMgr = null;
    @serialize()
    bulletMgr:BulletMgr = null;

    digTask:DigTask[] = [];
    digTaskMap = {}

    //方法
    init(){
        this.monsterMgr = MonsterMgr.getInstance(MonsterMgr);
        this.heroMgr = HeroMgr.getInstance(MonsterMgr);
        this.towerMgr = TowerMgr.getInstance(MonsterMgr);
        this.bulletMgr = BulletMgr.getInstance(MonsterMgr);
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


