import MapMainView from "../modules/map/MapMainView";
import UIBlock from "../modules/map/UIBlock";
import ToolKit from "../utils/ToolKit";
import Building from "./Building";
import BoxBase from "./BoxBase";
import { serialize } from "../utils/Decorator";
import TouchUtils from "../utils/TouchUtils";
var BLOCK_VALUE_ENUM = {
    EMPTY:0,
    BLOCK:1,
    BUILDING:2,
    MONSTER:4,
    MONSTER_ENTRY:8,
}
var CROSS_VALUE =  BLOCK_VALUE_ENUM.EMPTY;

export default class Block extends BoxBase {
    static BLOCK_VALUE_ENUM = BLOCK_VALUE_ENUM;     //瓦片地图属性枚举
    static CROSS_VALUE = CROSS_VALUE;       //可以通过属性检查
    @serialize()
    buildingId:number = 0;   // 额外属性，value不同，数据不同
    @serialize()
    _type:number = null;   // 瓦片上属性 二进制存储数据        
    get type(){
        return this._type;
    }
    set type(value){
        this._type = value; 
        if (this._type == BLOCK_VALUE_ENUM.BLOCK){
            if(this.data_1 == 0){
                this.data_1 = 1
            }
        }              
    }
    _event:number = 0;     //临时事件等
    get event(){
        return this._event;
    }
    set event(value){
        this._event = value;
    }
    
    node: cc.Node = null;
    floor_1: number = 0;   //第一层，基础层
    mapMainView: MapMainView = null;    //地图组件
    ui:UIBlock = null;
    constructor(mapMainView: MapMainView, x: number = 0, y: number = 0) {
        super(Block)
        this.x = x;
        this.y = y;
        this.mapMainView = mapMainView;
    }
    initUI() {
        let node = cc.instantiate(this.mapMainView.pb_block);
        node.parent = this.mapMainView.nd_mapRoot;
        node.x = this.x * this.mapMainView._blockSize.width;
        node.y = this.y * this.mapMainView._blockSize.height;
        node.scale = 0.95;
        if(this.type == null){
            this.type = ToolKit.getInstance(ToolKit).getRand(1,10) > 8 ? Block.BLOCK_VALUE_ENUM.BLOCK : 0;
        }        
        this.bindUI(node.getComponent(UIBlock));
        this.updateUI();
    }

    move(offsetPos:cc.Vec2){
        this.node.x = this.x * this.mapMainView._blockSize.width + offsetPos.x;
        this.node.y = this.y * this.mapMainView._blockSize.height + offsetPos.y;
    }
    createBuilding(building:Building){
        this.buildingId = building.id; 
        this.type = BLOCK_VALUE_ENUM.BUILDING;
    }
    resetBuilding(building?:Building){
        this.buildingId = building ? building.id : 0;
        this.type = BLOCK_VALUE_ENUM.BUILDING;
    }
    clearBlock(){
        this.type = BLOCK_VALUE_ENUM.EMPTY;
    }
}