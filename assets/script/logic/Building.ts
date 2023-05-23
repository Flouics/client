import MapMainView from "../modules/map/MapMainView";
import MapUtils from "./MapUtils";
import UIBuilding from "../modules/map/UIBuilding";
import BoxBase from "./BoxBase";
import { serialize } from "./../utils/Decorator";

var BUILDING_VALUE_ENUM = {
    EMPTY:0,
    COMMON:1,
    TOWER:2,
}

export default class Building extends BoxBase {
    @serialize()
    _id:number = null;   // 瓦片上属性 二进制存储数据        
    get id(){
        return this._id;
    }
    set id(value){
        this._id = value;           
    }
    @serialize()
    area:cc.Vec2[] = [cc.v2(0,0)];
    @serialize()
    realArea:cc.Vec2[] = [cc.v2(0,0)];   // 实际坐标系
    node: cc.Node = null; // 
    mapMainView: MapMainView = null;    //地图
    ui:UIBuilding = null
    @serialize()
    static _idIndex = 1;
    @serialize()
    _pb_url:string = "";    //不预先加载的原因是因为种类比较多，而且基本上不会复用。
    constructor(mapMainView: MapMainView) {
        super(Building);
        this.mapMainView = mapMainView;
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
                self.bindUI(node.getComponent(UIBuilding));
            }
        })
    }
    setIdx(){
        this.idx = Building._idIndex;
        Building._idIndex += 1;
    }
    initSchedule(){
        this.mapMainView.unschedule(this.update.bind(this));
        this.mapMainView.schedule(this.update.bind(this),0.05);
    }
    createBuilding(toPos:cc.Vec2){
        this.setIdx();       
        this.x = toPos.x;
        this.y = toPos.y;        
        this.initUI(this.mapMainView.nd_buildingRoot)       
        this.realArea = this.area.map((pos)=>{
            return pos.add(toPos)
        })
    }    

    getArea(){
        return this.area;
    }

    getRealArea(){
        return this.realArea;
    }
    clear(){

    }
    destory(){
        super.destory();
        if(this.node){
            this.node.removeFromParent();
        }        
    }
    update(){

    }
}