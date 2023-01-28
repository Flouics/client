import MapMainView from "../modules/map/MapMainView";
import MapUtils from "./MapUtils";
import UILive from "../modules/map/UILive";
import BoxBase from "./BoxBase";
import MapProxy from "../modules/map/MapProxy";
import { serialize } from "../utils/Decorator";
import PoolMgr from "../manager/PoolMgr";
import StateMachine from "./stateMachine/StateMachine";
import App from "../App";

export default class Live extends BoxBase {
    @serialize()
    life:number = 0;
    stateMachine:StateMachine = new StateMachine();      //执行的动作行为
    @serialize()
    moveSpeed: number = 180;    //1秒
    routeList:cc.Vec2[] = [];    // 移动路径图
    mapMainView: MapMainView = null;    //地图
    ui:UILive = null;
    mapProxy:MapProxy = null;
    static _idIndex = 1;
    _pb_tag:string = "";
    constructor(mapMainView: MapMainView, x: number = 0, y: number = 0) {
        super(Live)
        this.x = x;
        this.y = y;
        this.mapMainView = mapMainView;
        this.mapProxy = MapProxy.getInstance(MapProxy);
        this.id = Live._idIndex;
        Live._idIndex += 1;
        this.stateMachine.regeditHandler(this.enterState.bind(this),this.exitState.bind(this),this.onState.bind(this))       

    }

    enterState(params:any){
        var stateId = this.stateMachine.state.id;
        switch (stateId) {
            case StateMachine.STATE_ENUM.IDLE:
                break;
            case StateMachine.STATE_ENUM.MOVING:
                if(params && params.toPos){
                    this.moveStep(params.toPos);
                }                
                break;
            case StateMachine.STATE_ENUM.ATTACK:
               break;
            default:
                break;
        }
    }

    onState(params:any){
        var stateId = this.stateMachine.state.id;
        switch (stateId) {
            default:
                break;
        }
    }

    exitState(params:any){
        var stateId = this.stateMachine.state.id;
        switch (stateId) {
            default:
                break;
        }
    }

    initUI(parent:cc.Node,cb?:Function) {
        let pool = PoolMgr.getInstance(PoolMgr).getPool(this._pb_tag);
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
        this.stateMachine.switchState(StateMachine.STATE_ENUM.IDLE)     
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
                this.moveStepCheck(lastRoute)
            }
        }
    }
    checkAction():boolean{
        // 检查目标行为，如果有可执行目标就执行。
        // 子类就是需要处理具体行为。
        return false;
    }
    //只能移动到相邻的格子
    moveStepCheck(toPos: cc.Vec2) {
        if (this.getDistance(toPos) > 1) {
            return;
        }
        this.stateMachine.switchState(StateMachine.STATE_ENUM.MOVING,{toPos:toPos})  
    }
    moveStep(toPos: cc.Vec2) {
        if (this.getDistance(toPos) > 1) {
            return;
        }     
        let duration = this.mapMainView._blockSize.width * 1 / this.moveSpeed;
        let self = this, x = toPos.x, y = toPos.y;
        self.x = x;
        self.y = y;
        this.ui.moveStep(duration,toPos.scale(this.mapMainView._blockSizeVec2),() => {
            this.stateMachine.switchState(StateMachine.STATE_ENUM.IDLE)
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
        this.destory();
    }
    onBeAtked(damage:number,atker:BoxBase){
        this.life += -damage;
        if(this.ui){
            this.ui.onBeAtked(damage);
        }
        cc.log(this.name,this.life);
        if(!this.checkLive()) {
            this.clear();
        }
    }

    destory(){
        //--todo表现
        super.destory();
        this.node.removeFromParent();
    }
    update(){
        
    }
}