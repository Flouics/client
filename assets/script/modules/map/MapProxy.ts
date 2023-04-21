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
import BuildTask from "../../logic/task/BuildTask";
export default class MapProxy extends Proxy {
    attrs:{[key:string]:any} = {} 
    @serialize()
    margin_x: number = 10;
    @serialize()
    margin_y: number = 10;
    blockMap: { [k1: number]: { [k2: number]: Block } } = {};
    @serialize()
    blockMapJson = {};
    buildingMap: { [key: number]: Building } = {};
    @serialize()
    buildingMapJson = {};    
    @serialize()
    headquarters: Headquarters = null;

    get monsterMgr (){
        return MonsterMgr.getInstance(MonsterMgr);
    }
    get heroMgr (){
        return HeroMgr.getInstance(HeroMgr);
    }
    get towerMgr (){
        return TowerMgr.getInstance(TowerMgr);
    }
    get bulletMgr (){
        return BulletMgr.getInstance(BulletMgr);
    }

    task:TaskBase[] = [];
    taskMap = {}

    //方法
    init(){

    }

    load(){

    }

    dumpPrepare(){
        this.blockMapJson = {}
        for (var i in this.blockMap) {
            this.blockMapJson[i] = {}
            for (var j in this.blockMap[i]) {
                this.blockMapJson[i][j] = this.blockMap[i][j].serialize();
            }
        }

        this.buildingMapJson = {}
        for (var i in this.buildingMap) {
            this.buildingMapJson[i] = this.buildingMap[i].serialize();
        }
    }

    getBlockJson(x: number, y: number){
        if(this.blockMapJson[x]){
            return this.blockMapJson[x][y];
        }else{
            return null;
        }        
    }

    getBuildingJson(x: number){
        return this.buildingMapJson[x];
    }

    reloadPrepare(){
        cc.log("reloadPrepare")
    }

    sortTask(){
        var taskList = this.task;
        if(!taskList){
            return;
        }
        taskList.sort((a,b)=>{
            return a.priority - b.priority;
        })
        taskList.forEach((task,index) => {
            task.index = index;
        });
    }
    
    pushTask(task:TaskBase){
        if(this.checkTask(task)){  
            this.task.push(task)
            var key = this.getTaskMapKey(task);
            this.taskMap[key] = task;
            if(task instanceof DigTask){
                var block = this.getBlock(task.pos.x,task.pos.y)
                if(block){
                    block.setFlag(Block.BLOCK_FLAG_ENUM.DIG);
                }
            }
        }
    }

    getTaskMapKey(task:TaskBase){
        var key = ""
        if(task instanceof DigTask || task instanceof BuildTask){
            key = cc.js.formatStr("%s_%s_%s",task.type,task.pos.x,task.pos.y)
        }else{
            key = cc.js.formatStr("%s_%s_%s",task.type,task.id)
        }
        return key;
    }
    checkTask(task:TaskBase){
        var key = this.getTaskMapKey(task);
        return !this.taskMap[key]
    }
    delTask(task:TaskBase){
        var taskList = this.task;
        var ret = false;
        if(taskList){
            for (let index = 0; index < taskList.length; index++) {
                if(taskList[index].id == task.id){
                    taskList.splice(index)
                    ret = true;
                    break;
                }                
            }
        }
        var key = this.getTaskMapKey(task);
        this.taskMap[key] = null;
        return ret;
    }

    shiftTask(){
        var task = this.task.shift()
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
            return ((block.type | Block.CROSS_VALUE) == 0 && block.buildingId == 0)
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
            return ((block.type | Block.CROSS_VALUE) == 0 && block.buildingId == 0)
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


