import MapMainView from "../modules/map/MapMainView";
import MapUtils from "./MapUtils";
import UIBuilding from "../modules/map/UIBuilding";
import BoxBase from "./BoxBase";
import { serialize } from "./../utils/Decorator";
import { assetManager, instantiate, loader, Node, Prefab, resources, v2, Vec2 } from "cc";
import Debug from "../utils/Debug";

var BUILDING_VALUE_ENUM = {
    EMPTY:0,
    COMMON:1,
    TOWER:2,
}

export default class Building extends BoxBase {

    @serialize()
    area:Vec2[] = [v2(0,0)];
    @serialize()
    realArea:Vec2[] = [v2(0,0)];   // 实际坐标系
    node: Node = null; // 
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

    initUI(parent:Node,cb?:Function) {
        let self = this;
        if(this._pb_url == "") {
            return;
        }
        resources.load(this._pb_url, Prefab, function (err: any, prefab: any) {
            if (err) {
                Debug.error(self._pb_url, err);
            }else{
                let node = instantiate(prefab);
                let viewPos = MapUtils.getViewPosByTilePos(self.pos);
                parent.addChild(node);
                node.setPosition(viewPos.x, viewPos.y);
                self.bindUI(node.getComponent(UIBuilding));
            }
        })
    }

    initSchedule(){
        this.mapMainView.unschedule(this.update.bind(this));
        this.mapMainView.schedule(this.update.bind(this),0.05);
    }
    createBuilding(toPos:Vec2){
        Debug.log("createBuilding",toPos)
        this.setIdx(Building);       
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