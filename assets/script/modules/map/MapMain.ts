import BaseView from "../../zero/BaseView";
import AsyncTaskMgr from "../../manager/AsyncTaskMgr";
import Block from "../../logic/Block";



/**
 * Created by Administrator on 2017/9/12.
 * 独立所有场景之外。
 */

var global = window;
const { ccclass, property } = cc._decorator;

@ccclass
export default class MapMain extends BaseView {

    @property()
    margin_x: number = 10;
    @property()
    margin_y: number = 10;
    @property(cc.Node)
    nd_mapRoot: cc.Node = null;  //基础的地图层
    @property(cc.Prefab)
    pb_block = null;            //每一层的元素。

    _blockList: { [k1: number]: { [k2: number]: Block } } = {};
    _blockSize: cc.Size = null;

    // use this for initialization
    onLoad() {
        window.game = window.game || {}
        window.game.temp = this;
        this.initMap()
    };

    initMap() {
        //方块数据
        let node = cc.instantiate(this.pb_block);
        this._blockSize = new cc.Size(node.width, node.height);
        //touch触摸的尺寸。        
        let touchUtils = this.node.getComponent("TouchUtils");
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
                this._blockList[i][j] = new Block();
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
    };

    createBlock(i: number, j: number) {
        let node = cc.instantiate(this.pb_block);
        node.parent = this.nd_mapRoot;
        node.x = i * this._blockSize.width;
        node.y = j * this._blockSize.height;
        this._blockList[i][j].node = node;
    }

    onEnable() {

    };

};


