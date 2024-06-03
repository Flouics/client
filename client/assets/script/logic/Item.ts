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
import { empty } from "../Global";

export default class Item extends BoxBase {
    @serialize()
    _id:number = null;   // 道具类型 
    @serialize()
    _count:number = 0;     // 数量

    data:any = {};

    set id(value:any){
        this._id = value;
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
        this.id = id;
        this.count = count;
    }

    async initData(){
        this.data = await App.dataMgr.findById("item",this.id)
    }

    addItem(item:any){
        if(empty(this.id)){
            return;
        }        
        if(empty(this.data)){
            this.id = item.id;
        }else{
            if(this.id != item.id){
                return;
            }
        }
        this.count += item.count || 0;
    }

    initUI(parent:Node,cb?:Function) {
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