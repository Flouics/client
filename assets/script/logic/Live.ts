import MapMainView from "../modules/map/MapMainView";
import MapUtils from "./MapUtils";
import UILive from "../modules/map/UILive";
import BoxBase from "./BoxBase";
import MapProxy from "../modules/map/MapProxy";
import ModuleMgr from "../manager/ModuleMgr";
import PoolMgr from "../manager/PoolMgr";

var ACTION_TYPE_ENUM = {
    IDLE:0,
    MOVING:1,
    ATTACK:2,
}

export default class Live extends BoxBase {
    static ACTION_TYPE_ENUM = ACTION_TYPE_ENUM;     //瓦片地图属性枚举
    life:number = 0;
    actionType:number = ACTION_TYPE_ENUM.IDLE;      //执行的动作行为
    moveSpeed: number = 180;    //1秒
    routeList:cc.Vec2[] = [];    // 移动路径图
    node: cc.Node = null; // ui
    mapMainView: MapMainView = null;    //地图
    ui:UILive = null;
    mapProxy:MapProxy = null;
    static _idIndex = 1;
    _pb_tag:string = "";
    constructor(mapMainView: MapMainView, x: number = 0, y: number = 0) {
        super()
        this.x = x;
        this.y = y;
        this.mapMainView = mapMainView;
        this.mapProxy = MapProxy.getInstance();
        this.id = Live._idIndex;
        Live._idIndex += 1;
    }

    initUI(parent:cc.Node,cb?:Function) {
        let pool = PoolMgr.getInstance().getPool(this._pb_tag);
        let node = pool.getItem(this);
        let viewPos = MapUtils.getViewPosByTilePos(this.pos);
        node.parent = parent;
        node.position = viewPos;
        this.node = node;
        this.ui = this.node.getComponent(UILive);
        if(!!cb) cb(this);
    }

    moveToPos(toPos: cc.Vec2) {
        //this.fixPosition();
        //test
        var moveRouteList = this.getMoveRoute(toPos)
        this.mapMainView.printBlocks(moveRouteList);
        this.routeList = moveRouteList;
        this.ui.stopMoveAction();
        this.actionType = Live.ACTION_TYPE_ENUM.IDLE;
        if(this.actionType == Live.ACTION_TYPE_ENUM.IDLE){
            this.moveNext()
        }        
    }

    getNearByPos(area: cc.Vec2[]):cc.Vec2 {
        return MapUtils.getNearByPos(area,this.pos);
    }
    //检查是否可以通过
    checkBlock(pos:cc.Vec2){
        return this.mapMainView.checkBlock(pos);
    }
    moveNext(){
        if(!this.checkAction()){
            // 执行队列行进路径
            var lastRoute = this.routeList.pop()
            if(!!lastRoute){
                this.moveStep(lastRoute)
            }
        }
    }
    checkAction():boolean{
        // 检查目标行为，如果有可执行目标就执行。
        // 子类就是需要处理具体行为。
        return false;
    }
    //只能移动到相邻的格子
    moveStep(toPos: cc.Vec2) {
        if (this.getDistance(toPos) > 1) {
            return;
        }
        this.actionType = Live.ACTION_TYPE_ENUM.MOVING;
        let duration = this.mapMainView._blockSize.width * 1 / this.moveSpeed;
        let self = this, x = toPos.x, y = toPos.y;
        self.x = x;
        self.y = y;
        this.ui.moveStep(duration,toPos.scale(this.mapMainView._blockSizeVec2),() => {
            self.actionType = Live.ACTION_TYPE_ENUM.IDLE;
            self.moveNext();
        })
    }
    fixPosition(){
        var tilePos = MapUtils.getTilePosByViewPos(this.node.position);
        this.x = tilePos.x;
        this.y = tilePos.y;
    }
    getMoveRoute(toPos:cc.Vec2){        
        return MapUtils.getRouteList(cc.v2(this.x,this.y),toPos,this.checkBlock.bind(this))
    }
    clear(){

    }
    die(){
        //--todo表现
        this.node.removeFromParent()
    }
}