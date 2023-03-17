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
    margin_x: number = 10;
    @serialize()
    margin_y: number = 10;
    @serialize()
    blockMap: { [k1: number]: { [k2: number]: Block } } = {};
    @serialize()
    buildingMap: { [key: number]: Building } = {};
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
    getBlock(x: number, y: number) {        
        x = this.fixPosX(x);
        y = this.fixPosY(y); 
        // Debug.tryObject(this.blockMap[x][y], "blockList out")
        if (this.blockMap[x]) {
            return this.blockMap[x][y];
        } else {
            return null
        }
    }

    checkBlock(pos: cc.Vec2) {
        var block = this.getBlock(pos.x,pos.y)
        if (block) {
            return ((block.value | Block.CROSS_VALUE) == 0 && block.buildingId == 0)
        } else {
            return false;
        }
    }

    //避免遍历死循环。
    checkBlockRoute(pos: cc.Vec2) {
        var max_x =  this.margin_x * 2 + 1;
        var max_y =  this.margin_y * 2 + 1;
        var x = pos.x;
        var y = pos.y;
        if (x <= -max_x || x >=  max_x){
            return false
        }

        if (y <= -max_y || y >=  max_y){
            return false
        }

        var block = this.getBlock(pos.x,pos.y)
        if (block) {
            return ((block.value | Block.CROSS_VALUE) == 0 && block.buildingId == 0)
        } else {
            return false;
        }
    }


    getBuilding(x: number, y: number) {        
        x = this.fixPosX(x);
        y = this.fixPosY(y); 
        // Debug.tryObject(this.blockMap[x][y], "blockList out")
        if (this.buildingMap[x]) {
            return this.buildingMap[x][y];
        } else {
            return null
        }
    }

    fixPosX(x: number){
        var num =  this.margin_x * 2 + 1;
        x = x % num;
        if(x >= -this.margin_x && x <= this.margin_x){
            return x;
        }
        if(x < -this.margin_x){
            x = x + num;
        }else if(x > this.margin_x){
            x = x - num;
        }
        return x;
    }

    fixPosY(y: number){
        var num =  this.margin_y * 2 + 1;
        y = y % num;
        if(y >= -this.margin_y && y <= this.margin_y){
            return y;
        }
        if(y < -this.margin_y){
            y = y + num;
        }else if(y > this.margin_y){
            y = y - num;
        }
        return y;
    }
};


