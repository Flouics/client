
import AsyncTaskMgr from "../../manager/AsyncTaskMgr";
import Block from "../../logic/Block";
import Hero from "../../logic/Hero";
import TouchUtils from "../../utils/TouchUtils";
import MapUtils from "../../logic/MapUtils";
import ToolKit from "../../utils/ToolKit";
import Debug from "../../utils/Debug";
import Building from "../../logic/Building";
import Headquarters from "../../logic/building/Headquarters";
import Live from "../../logic/Live";
import Monster from "../../logic/Monster";
import MonsterMgr from "../../manager/MonsterMgr";
import HeroMgr from "../../manager/HeroMgr";
import MapProxy from "./MapProxy";
import DigTask from "../../logic/task/DigTask";
import TowerMgr from "../../manager/TowerMgr";
import BulletMgr from "../../manager/BulletMgr";
import App from "../../App";
import BaseView from "../../zero/BaseView";
import BaseUI from "../../zero/BaseUI";
import BuildTask from "../../logic/task/BuildTask";
import MineMgr from "../../manager/MineMgr";

/**
 * Created by Administrator on 2017/9/12.
 * 独立所有场景之外。
 */


var OPERATION_ENUM = {
    COMMON: 0,
    DIG: 1,
    BUILD: 2,
}

const { ccclass, property } = cc._decorator;

@ccclass
export default class MapMainView extends BaseView {
    @property()
    margin_x: number = 10;
    @property()
    margin_y: number = 10;
    @property(cc.Node)
    nd_mapRoot: cc.Node = null;  //基础的地图层
    @property(cc.Node)
    nd_heroRoot: cc.Node = null;  //人物的地图层
    @property(cc.Node)
    nd_masterRoot: cc.Node = null;  //怪物的地图层
    @property(cc.Node)
    nd_bulletRoot: cc.Node = null;  //怪物的地图层
    @property(cc.Node)
    nd_buildingRoot: cc.Node = null;  //建筑地图层    
    @property(cc.Prefab)
    pb_block = null;            //瓦片资源

    mapProxy: MapProxy = null;
    static OPERATION_ENUM = OPERATION_ENUM;
    operation: number = OPERATION_ENUM.COMMON;
    _blockSize: cc.Size = null;
    _blockSizeVec2: cc.Vec2 = null;         //size 转成矢量，方便转化真实尺寸。
    blockMap: { [k1: number]: { [k2: number]: Block } } = {};
    buildingMap: { [key: number]: Building } = {}

    testHero: Hero = null;
    headquarters: Headquarters = null;
    monsterMgr: MonsterMgr = null;
    heroMgr: HeroMgr = null;
    towerMgr:TowerMgr = null;
    bulletMgr:BulletMgr = null;
    mineMgr:MineMgr = null;
    monsterEntryPos: cc.Vec2 = cc.v2(0, 0);
    moduleName = "map";
    centerPos: cc.Vec2 = cc.v2(0, 0);
    mapSize:cc.Size = new cc.Size(0,0);

    // use this for initialization
    onLoad() {
        super.onLoad();
        App.game = App.game || {}
        App.game.temp = this;
        this.mapProxy = this.proxy as MapProxy;
        this.blockMap = this.mapProxy.blockMap;
        this.buildingMap = this.mapProxy.buildingMap;        
        this.initMap();
    }

    reloadMapView(){
        this.blockMap = this.mapProxy.blockMap;
        this.buildingMap = this.mapProxy.buildingMap;    
        this.monsterMgr.reset();
        this.heroMgr.reset();
        this.bulletMgr.reset();    
        this.mineMgr.reset();    
        this.initMap();
    }

    initMap() {
        this.monsterMgr = MonsterMgr.getInstance(MonsterMgr);
        this.heroMgr = HeroMgr.getInstance(HeroMgr);
        this.towerMgr = TowerMgr.getInstance(TowerMgr);
        this.bulletMgr = BulletMgr.getInstance(BulletMgr);
        this.mineMgr = MineMgr.getInstance(MineMgr);
        this.monsterMgr.init(this);
        this.heroMgr.init(this);
        this.towerMgr.init(this);
        this.bulletMgr.init(this);
        this.mineMgr.init(this);
        this.mineMgr.loadJson(this.mapProxy.mineMapJson);
        this.margin_x = this.mapProxy.margin_x;
        this.margin_y = this.mapProxy.margin_y;             
        
        this.initBlocks();
        this.initBuildings();
        this.initHeros();
        this.initMonsters();
        this.initTowers();
        this.node.on("map_click", this.onMapClick.bind(this));
    }
    initMonsterEntryPos() {
        this.monsterEntryPos = cc.v2(-10, 10);
        this.getBlockByPos(this.monsterEntryPos).id = Block.BLOCK_VALUE_ENUM.MONSTER_ENTRY;
    }
    initBlockSize(size: cc.Size) {
        this._blockSize = size;
        this._blockSizeVec2 = new cc.Vec2(size.width, size.height);
    }
    initBlocks() {
        //方块数据
        let node = cc.instantiate(this.pb_block);
        this.initBlockSize(new cc.Size(node.width, node.height));
        MapUtils.initBlockData(new cc.Size(node.width, node.height));
        this.mapSize = new cc.Size(
            (this.margin_x * 2 + 1) * this._blockSize.width
            , (this.margin_y * 2 + 1) * this._blockSize.height
        );
        MapUtils.initMapData(this.mapSize,this.margin_x,this.margin_y)
        //touch触摸的尺寸。        
        let touchUtils = this.node.getComponent(TouchUtils);
        if (touchUtils) {
            touchUtils.init(this.mapSize);
        }

        //先初始化数据
        for (let i = -this.margin_x; i <= this.margin_x; i++) {
            this.blockMap[i] = {};
            for (let j = -this.margin_y; j <= this.margin_y; j++) {
                let block = new Block(this, i, j);
                block.unserialize(this.mapProxy.getBlockJson(i,j))
                this.blockMap[i][j] = block;
            }
        }

        //--UI初始化丢给异步
        for (let i = -this.margin_x; i <= this.margin_x; i++) {
            for (let j = -this.margin_y; j <= this.margin_y; j++) {
                if (Math.abs(i) < 11 && Math.abs(j) < 8) {
                    this.createBlock(i, j);
                } else {
                    AsyncTaskMgr.getInstance(AsyncTaskMgr).newAsyncTask(function () {
                        this.createBlock(i, j);
                    }.bind(this));
                }
            }
        }
    }
    createBlock(i: number, j: number) {
        let block = this.getBlock(i, j)
        if (block) {
            block.initUI()
        }
    }
    getBlockByPos(tilePos: cc.Vec2) {
        return this.getBlock(tilePos.x, tilePos.y);
    }
    getBlock(x: number, y: number) {
        return this.mapProxy.getBlock(x,y);
    }
    initHeros() {
        let hero = this.heroMgr.create(2, 0);
        this.testHero = hero;
    }
    initMonsters() {
        this.initMonsterEntryPos();
        var self = this;
        var createMonster = function(){
            var monsterType = App.toolKit.getRand(10001,10005);
            self.monsterMgr.createMultiple(monsterType,1, self.monsterEntryPos, (monster: Monster) => {
                monster.attackHeadquarters();
            });
        }
        this.monsterMgr.addScheduleTask(200,10 * 1000,{},createMonster,"createMonster");
        //createMonster();
    }
    initTowers(){
        this.towerMgr.create(-2,0,1001);
    }
    clearHero(heroId: number) {
        this.heroMgr.clear(heroId);
    }
    clearMonster(monsterId: number) {
        this.monsterMgr.clear(monsterId);
    }
    initBuildings() {
        let headquarters = new Headquarters(this);
        this.createBuilding(headquarters, cc.v2(0, 0));
        this.buildingMap[headquarters.idx] = headquarters;
        this.headquarters = headquarters;
    }
    checkBlock(pos: cc.Vec2) {
        return this.mapProxy.checkBlock(pos);
    }
    digBlock(params:any){
        //todo
    }

    buildTower(params:any){
        //todo
        cc.log("随机建造炮台")
    }

    // 地图触发了点击事件
    onMapClick(event: cc.Event.EventTouch) {
        var touchEndPos = event.getLocation();
        var viewPos = this.nd_mapRoot.convertToNodeSpaceAR(touchEndPos);
        var tilePos = MapUtils.getTilePosByViewPos(viewPos);
        //todo 角色的行为
        if (this.operation == OPERATION_ENUM.COMMON) {
            this.testHero.moveToPos(tilePos)
            return;
        }
        if (this.operation == OPERATION_ENUM.DIG) {
            var block = this.getBlockByPos(tilePos);
            if (block.checkType(Block.BLOCK_VALUE_ENUM.BLOCK)) {
                //this.mapProxy.pushTask(new DigTask(tilePos.x, tilePos.y))
                this.command("pushTask",new DigTask(tilePos.x, tilePos.y));
            }
            return;
        }
        if (this.operation == OPERATION_ENUM.BUILD) {
            var block = this.getBlockByPos(tilePos);
            if (block.checkType(Block.BLOCK_VALUE_ENUM.EMPTY)) {
                this.command("pushTask",new BuildTask(tilePos.x, tilePos.y));
            }
            return
        }
    }
    switchOperation(value: number) {        
        this.operation = value;
    }
    dealAllBlocks(dealFunc: Function) {
        for (var i in this.blockMap) {
            for (var j in this.blockMap[i]) {
                dealFunc(this.blockMap[i][j])
            }
        }
    }
    createBuilding(building: Building, toPos: cc.Vec2) {
        building.createBuilding(toPos);
        var maskArea = building.getRealArea();
        var self = this;
        maskArea.forEach((pos) => {
            let block = self.getBlockByPos(pos); 
            block.createBuilding(building)     
        })
    }
    // 地图移动时，地图重新显示
    onMapMove(){
        var offsetPos = new cc.Vec2(this.node.x - this.centerPos.x,this.node.y - this.centerPos.y);
        var x = Math.ceil(offsetPos.x/this._blockSize.width)
        var y = Math.ceil(offsetPos.y/this._blockSize.height)

        var map = {};
        for (var i in this.blockMap) {
            map[i] = {}
            for (var j in this.blockMap[i]) {
                map[i][j] = this.blockMap[i][j];
            }
        }
        
        if(x > 0){
            for (let i = -this.margin_x; i < this.margin_x + x; i++) {
                var blocks = this.blockMap[i];
                for (const key in blocks) {
                    if (Object.prototype.hasOwnProperty.call(blocks, key)) {
                        const block = blocks[key];
                        block.move(new cc.Vec2(this.mapSize.width,0))
                    }
                }
            }
        }else if(x < 0){
            for (let i = this.margin_x; i > this.margin_x + x; i--) {
                var blocks = this.blockMap[i];
                for (const key in blocks) {
                    if (Object.prototype.hasOwnProperty.call(blocks, key)) {
                        const block = blocks[key];
                        block.move(new cc.Vec2(-this.mapSize.width,0))
                    }
                }
            }
        }

        if(y > 0){
            for (let i = -this.margin_y; i < this.margin_y + y; i++) {
                var blocks = map[i];
                for (const key in blocks) {
                    if (Object.prototype.hasOwnProperty.call(blocks, key)) {
                        const block = blocks[key];
                        block.move(new cc.Vec2(0,this.mapSize.height))
                    }
                }
            }
        }else if(y < 0){
            for (let i = this.margin_y; i > this.margin_y + y; i--) {
                var blocks = map[i];
                for (const key in blocks) {
                    if (Object.prototype.hasOwnProperty.call(blocks, key)) {
                        const block = blocks[key];
                        block.move(new cc.Vec2(0,-this.mapSize.height))
                    }
                }
            }
        }
        
    }

    //测试区域
    printBlocks(posList: cc.Vec2[]) {
        var self = this;
        this.dealAllBlocks((block: Block) => {
            block.event = 0;
        })
        posList.forEach((pos) => {
            self.getBlockByPos(pos).event = 1;
        })
    }

};


