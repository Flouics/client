import BaseView from "../../zero/BaseView";
import AsyncTaskMgr from "../../manager/AsyncTaskMgr";
import Block from "../../logic/Block";
import Hero from "../../logic/Hero";
import TouchUtils from "../../utils/TouchUtils";
import Map from "../../logic/MapUtils";
import ToolKit from "../../utils/ToolKit";
import Debug from "../../utils/Debug";
import Building from "../../logic/Building";
import Headquarters from "../../logic/building/Headquarters";
import Live from "../../logic/Live";
import Monster from "../../logic/Monster";
import MonsterMgr from "../../manager/MonsterMgr";
import HeroMgr from "../../manager/HeroMgr";
import ModuleMgr from "../../manager/ModuleMgr";
import MapProxy from "./MapProxy";
import DigTask from "../../logic/task/DigTask";
import TowerMgr from "../../manager/TowerMgr";
import Tower from "../../logic/tower/Tower";


/**
 * Created by Administrator on 2017/9/12.
 * 独立所有场景之外。
 */

var global = window;
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
    buldingMap: { [key: number]: Building } = {}

    testHero: Hero = null;
    headquarters: Headquarters = null;
    monsterMgr: MonsterMgr = null;
    heroMgr: HeroMgr = null;
    towerMgr:TowerMgr = null;
    monsterEntryPos: cc.Vec2 = cc.v2(0, 0)

    // use this for initialization
    onLoad() {
        window.game = window.game || {}
        window.game.temp = this;
        this.mapProxy = ModuleMgr.obj.getProxy("map");
        this.proxys = [this.mapProxy];
        this.blockMap = this.mapProxy.blockMap;
        this.buldingMap = this.mapProxy.buldingMap;
        this.initMap();
        super.onLoad();
    }

    initMap() {
        this.monsterMgr = MonsterMgr.getInstance();
        this.heroMgr = HeroMgr.getInstance();
        this.towerMgr = TowerMgr.getInstance();
        this.monsterMgr.init(this);
        this.heroMgr.init(this);
        this.towerMgr.init(this);
        this.initBlocks();
        this.initBuildings();
        this.initHeros();
        this.initMonsters()
        this.node.on("map_click", this.onMapClick.bind(this));
    }
    initMonsterEntryPos() {
        this.monsterEntryPos = cc.v2(-10, 10);
        this.getBlockByPos(this.monsterEntryPos).value = Block.BLOCK_VALUE_ENUM.EMPTY;
    }
    initBlockSize(size: cc.Size) {
        this._blockSize = size;
        this._blockSizeVec2 = new cc.Vec2(size.width, size.height);
    }
    initBlocks() {
        //方块数据
        let node = cc.instantiate(this.pb_block);
        this.initBlockSize(new cc.Size(node.width, node.height));
        Map.initBlockSize(new cc.Size(node.width, node.height));
        //touch触摸的尺寸。        
        let touchUtils = this.node.getComponent(TouchUtils);
        if (touchUtils) {
            touchUtils.init(new cc.Size(
                (this.margin_x * 2 + 1) * this._blockSize.width
                , (this.margin_y * 2 + 1) * this._blockSize.height)
            );
        }

        //先初始化数据
        for (let i = -this.margin_x; i <= this.margin_x; i++) {
            this.blockMap[i] = {};
            for (let j = -this.margin_y; j <= this.margin_y; j++) {
                this.blockMap[i][j] = new Block(this, i, j);
            }
        }

        //--UI初始化丢给异步
        for (let i = -this.margin_x; i <= this.margin_x; i++) {
            for (let j = -this.margin_y; j <= this.margin_y; j++) {
                if (Math.abs(i) < 11 && Math.abs(j) < 8) {
                    this.createBlock(i, j);
                } else {
                    AsyncTaskMgr.obj.newAsyncTask(function () {
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
        // Debug.tryObject(this.blockMap[x][y], "blockList out")
        if (this.blockMap[x]) {
            return this.blockMap[x][y];
        } else {
            return null
        }
    }
    initHeros() {
        let hero = this.heroMgr.create(2, 0);
        this.testHero = hero;
    }
    initMonsters() {
        this.initMonsterEntryPos();
        this.monsterMgr.createMultiple(2, this.monsterEntryPos.x, this.monsterEntryPos.y, (monster: Monster) => {
            monster.attackHeadquarters();
        });
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
        this.buldingMap[headquarters.id] = headquarters;
        this.headquarters = headquarters;
    }
    checkBlock(pos: cc.Vec2) {
        var block = this.getBlockByPos(pos)
        if (block) {
            return ((block.value | Block.CROSS_VALUE) == 0 && block.buildingId == 0)
        } else {
            return false;
        }
    }
    digBlock(pos:cc.Vec2){
        var block = this.getBlockByPos(pos)
        if(block && block.value == Block.BLOCK_VALUE_ENUM.BLOCK){
            block.value = Block.BLOCK_VALUE_ENUM.EMPTY;
        }
    }

    // 地图触发了点击事件
    onMapClick(event: cc.Event.EventTouch) {
        var touchEndPos = event.getLocation();
        var viewPos = this.node.convertToNodeSpaceAR(touchEndPos);
        var tilePos = Map.getTilePosByViewPos(viewPos);
        //todo 角色的行为
        if (this.operation == OPERATION_ENUM.COMMON) {
            this.testHero.moveToPos(tilePos)
            return
        }
        if (this.operation == OPERATION_ENUM.DIG) {
            var block = this.getBlockByPos(tilePos);
            if (block.value == Block.BLOCK_VALUE_ENUM.BLOCK) {
                this.mapProxy.pushTask(new DigTask(tilePos.x, tilePos.y))
            }
            return;
        }
        if (this.operation == OPERATION_ENUM.COMMON) {
            this.mapProxy.updateView("onMapBuild", { pos: tilePos })
            return
        }
    }
    switchOperation(value: number) {        
        ToolKit.obj.showTip("切换操作-> " + value);
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


