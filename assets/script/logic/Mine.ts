import MapMainView from "../modules/map/MapMainView";
import MapUtils from "./MapUtils";
import BoxBase from "./BoxBase";
import { serialize } from "../utils/Decorator";
import UIMine from "../modules/map/UIMine";
import DataMgr from "../manager/DataMgr";
import Item from "./Item";

export default class Mine extends BoxBase {
    @serialize()
    _id:number = null;   // 矿山属性 二进制存储数据  
    data:any = null;

    @serialize()
    itemMap:{[key:number]:Item} = null;

    @serialize()
    produceTimeLast:number = null;    

    set id(value:any){
        this._id = value;
        this.initData();     
    }
    node: cc.Node = null; // 
    mapMainView: MapMainView = null;    //地图
    ui:UIMine = null
    @serialize()
    static _idIndex = 1;
    @serialize()
    _pb_url:string = "";    //不预先加载的原因是因为种类比较多，而且基本上不会复用。
    constructor(mapMainView: MapMainView,id:number = 1001,x:number = 0,y:number = 0) {
        super(Mine);
        this.mapMainView = mapMainView;
        this.setIdx(Mine);
        this.id = id;
        this.x = x;
        this.y = y;
    }

    initData(){
        this.data = DataMgr.findById("mine",this.id);
        if(this.data){
            
        }
    }

    initUI(parent:cc.Node,cb?:Function) {
        let self = this;
        if(this._pb_url == "") {
            return;
        }
        cc.loader.loadRes(this._pb_url, cc.Prefab, function (err: any, prefab: any) {
            if (err) {
                cc.error(this._pb_url, err);
            }else{
                let node = cc.instantiate(prefab);
                let viewPos = MapUtils.getViewPosByTilePos(self.pos);
                node.parent = parent;
                node.position = viewPos;
                self.bindUI(node.getComponent(UIMine));
            }
        })
    }
    
    initSchedule(){
        this.mapMainView.unschedule(this.update.bind(this));
        this.mapMainView.schedule(this.update.bind(this),0.05);
    }

    clear(){

    }

    destory(){
        super.destory();
        if(this.node){
            this.node.removeFromParent();
        }        
    }

    calcProduct(deltaTime:number){
        if(empty(this.data)){
            return
        }

        this.data.product.forEach(product => {
            let item = new Item(product.id,product.count * deltaTime);
        });
    }

    calcProductTime(){
        if(empty(this.data)){
            return
        }
        let timeProxy = getProxy("time");
        let nowTime = timeProxy.getTime();
        if(this.produceTimeLast == null){
            this.produceTimeLast = nowTime;
            return;
        }
        let deltaTime = nowTime - this.produceTimeLast;
        if(deltaTime > 1){
            this.calcProduct(deltaTime);
            this.produceTimeLast = nowTime;
        }
    }

    addItem(item:Item){
        if (this.itemMap[item.id] == null){
            this.itemMap[item.id] = new Item(item.id);
        }
        this.itemMap[item.id].addItem(item);
    }

    update(){

    }
}