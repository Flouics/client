import BaseView from "../../zero/BaseView";
import AsyncTaskMgr from "../../manager/AsyncTaskMgr";
import Block from "../../logic/Block";
import Hero from "../../logic/Hero";
import TouchUtils from "../../utils/TouchUtils";
import Map from "../../logic/MapUtils";
import ToolKit from "../../utils/ToolKit";
import Debug from "../../utils/Debug";



/**
 * Created by Administrator on 2017/9/12.
 * 独立所有场景之外。
 */

var global = window;
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
    @property(cc.Prefab)
    pb_block = null;            //瓦片资源
    @property(cc.Prefab)
    pb_hero = null;            //人物资源

    _blockSize: cc.Size = null;
    _blockSizeVec2: cc.Vec2 = null;
    _blockList: { [k1: number]: { [k2: number]: Block } } = {};
    _heroList: { [key: number]: Hero } = {}

    _testHero: Hero = null;

    // use this for initialization
    onLoad() {
        window.game = window.game || {}
        window.game.temp = this;
        this.initMap()
    };

    initMap() {
        this.initBlocks();
        this.initHeros();
        this.node.on("map_click", this.onMapClick.bind(this));
    };
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
            this._blockList[i] = {};
            for (let j = -this.margin_y; j <= this.margin_y; j++) {
                this._blockList[i][j] = new Block(this, i, j);
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
        return this.getBlock(tilePos.x,tilePos.y);
    }
    getBlock(x: number, y: number) {
        // Debug.tryObject(this._blockList[x][y], "blockList out")
        if (this._blockList[x]) {
            return this._blockList[x][y];
        } else {
            return null
        }
    }
    initHeros() {
        let hero = new Hero(this)
        this._heroList[hero.id] = hero;
        hero.initUI();
        this._testHero = hero;
    }
    checkBlock(pos:cc.Vec2){
        var block = this.getBlockByPos(pos)
        if(block){
            return (block.value | Block.CROSS_VALUE) == 0
        }else{
            return false;
        }
    }
    onEnable() {

    };
    // 地图触发了点击事件
    onMapClick(event: cc.Event.EventTouch) {
        var touchEndPos = event.getLocation();
        var viewPos = this.node.convertToNodeSpaceAR(touchEndPos);
        var tilePos = Map.getTilePosByViewPos(viewPos);
        //todo 角色的行为
        this._testHero.moveToPos(tilePos)
    }

    dealAllBlocks(dealFunc:Function){
        for (var i in this._blockList) {
            for (var j in this._blockList[i]) {
                dealFunc(this._blockList[i][j])
            }
        }
    }

    //测试区域
    printBlocks(posList:cc.Vec2[]){
        var self = this;
        this.dealAllBlocks((block:Block)=>{
            block.event = 0;
        })
        posList.forEach((pos)=>{
            self.getBlockByPos(pos).event = 1;
        }) 
    }

};


