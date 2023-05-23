import MapMainView from "../modules/map/MapMainView";
import MapUtils from "./MapUtils";
import BoxBase from "./BoxBase";
import MapProxy from "../modules/map/MapProxy";
import { serialize } from "../utils/Decorator";
import PoolMgr from "../manager/PoolMgr";
import StateMachine from "./stateMachine/StateMachine";
import App from "../App";
import DataMgr from "../manager/DataMgr";
import UIItem from "../modules/package/UIItem";

export default class Item extends BoxBase {
    @serialize()
    _type:number = null;   // 道具类型 
    @serialize()
    _count:number = 0;     // 数量

    data:any = {};


    get type(){
        return this._type;
    }
    set type(value){
        this._type = value;
        this.initData();            
    }
    
    get count(){
        return this._count;
    }
    set count(value){
        this._count = Math.floor(value);       
    }

    static _idIndex = 1;

    _pb_tag:string = PoolMgr.POOL_TAG_ENUM.ITEM;
    constructor(id:number,count:number = 0) {
        super(Item)
        this.idx = Item._idIndex;
        Item._idIndex += 1;
        this.type = id;
        this.count = count;
    }

    initData(){
        this.data = DataMgr.findById("item",this.type)
    }

    addItem(item:any){
        if(empty(this.type)){
            return;
        }        
        if(empty(this.data)){
            this.type = item.id;
        }else{
            if(this.type != item.id){
                return;
            }
        }
        this.count += item.count || 0;
    }

    initUI(parent:cc.Node,cb?:Function) {
        let pool = PoolMgr.getInstance(PoolMgr).getPool(this._pb_tag);
        let node = pool.getItem(this);
        let viewPos = MapUtils.getViewPosByTilePos(this.pos);
        node.parent = parent;
        node.position = viewPos;
        this.node = node;
        this.ui = this.node.getComponent(UIItem);
        if(!!cb) cb(this);
    }


    clear(){
        this.destory();
    }

    destory(){
        //--todo表现
        super.destory();
        this.node.removeFromParent();
    }
    update(){
        
    }
}