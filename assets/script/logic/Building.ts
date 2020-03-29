import MapMainView from "../modules/map/MapMainView";
import MapUtils from "./MapUtils";
import UIBuilding from "../modules/map/UIBuilding";
import BoxBase from "./BoxBase";

export default class Building extends BoxBase {
    type:number  = 0;
    area:cc.Vec2[] = [cc.v2(0,0)];
    realArea:cc.Vec2[] = [cc.v2(0,0)];   // 实际坐标系
    node: cc.Node = null; // 
    mapMainView: MapMainView = null;    //地图
    ui:UIBuilding = null
    static _idIndex = 1;
    _pb_url:string = "";
    constructor(mapMainView: MapMainView) {
        super();
        this.mapMainView = mapMainView;
    }

    initUI(parent:cc.Node,cb?:Function) {
        let self = this;
        cc.loader.loadRes(this._pb_url, cc.Prefab, function (err: any, prefab: any) {
            if (err) {
                cc.error(this._pb_url, err);
            }else{
                let node = cc.instantiate(prefab);
                let viewPos = MapUtils.getViewPosByTilePos(self.pos);
                node.parent = parent;
                node.position = viewPos;
                self.node = node;
                self.ui = self.node.getComponent(UIBuilding);
            }
        })
    }
    setId(){
        this.id = Building._idIndex;
        Building._idIndex += 1;
    }
    createBuilding(toPos:cc.Vec2){
        var self = this;
        this.setId();       
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
}