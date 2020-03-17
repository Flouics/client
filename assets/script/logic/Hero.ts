import MapMainView from "../modules/map/MapMainView";
import MapUtils from "./MapUtils";
import UIHero from "../modules/map/UIHero";

export default class Hero {
    id: number = 0;
    x: number = 0;  //瓦片地图坐标
    y: number = 0;  //瓦片地图坐标
    moveSpeed: number = 180;    //1秒
    routeList:cc.Vec2[] = [];    // 移动路径图
    node: cc.Node = null; // ui
    mapMainView: MapMainView = null;    //地图
    ui:UIHero = null;
    static _idIndex = 1000;
    constructor(mapMainView: MapMainView, x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
        this.mapMainView = mapMainView;
        this.id = Hero._idIndex;
        Hero._idIndex += 1;
    }

    initUI() {
        let node = cc.instantiate(this.mapMainView.pb_hero);
        node.parent = this.mapMainView.nd_heroRoot;
        this.node = node;
        this.ui = this.node.getComponent(UIHero);
    }

    moveToPos(toPos: cc.Vec2) {
        this.fixPosition();
        //test
        var moveRouteList = MapUtils.getRouteList(cc.v2(this.x,this.y),toPos,this.checkBlock.bind(this))
        this.mapMainView.printBlocks(moveRouteList);
    }
    //检查是否可以通过
    checkBlock(pos:cc.Vec2){
        return this.mapMainView.checkBlock(pos);
    }

    moveNext(){
        // 执行队列行进路径
    }
    //只能移动到相邻的格子
    moveStep(toPos: cc.Vec2) {
        var abs_delta_x = Math.abs(this.x - toPos.x);
        var abs_delta_y = Math.abs(this.y - toPos.y);
        if (abs_delta_x + abs_delta_y > 1) {
            return;
        }
        let duration = this.mapMainView._blockSize.width * 1 / this.moveSpeed;
        let self = this, x = toPos.x, y = toPos.y;
        this.ui.moveStep(duration,toPos.scale(this.mapMainView._blockSizeVec2),() => {
            self.x = x, this.y = y;
            this.moveNext();
        })
    }
    fixPosition(){
        var tilePos = MapUtils.getTilePosByViewPos(this.node.position);
        this.x = tilePos.x;
        this.y = tilePos.y;
    }

    getMoveRoute(toPos:cc.Vec2){        
        
    }
}