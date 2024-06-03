import MapMainView from "../modules/map/MapMainView";
import MapUtils from "./MapUtils";
import UILive from "../modules/map/UILive";
import BoxBase from "./BoxBase";
import MapProxy from "../modules/map/MapProxy";
import { serialize } from "../utils/Decorator";
import PoolMgr from "../manager/PoolMgr";
import StateMachine from "./stateMachine/StateMachine";
import App from "../App";
import { Node, v2, Vec2 } from "cc";
import { toolKit } from "../utils/ToolKit";
import TimeProxy, { getTimeProxy } from "../modules/time/TimeProxy";
import Debug from "../utils/Debug";

export default class Live extends BoxBase {
    @serialize()
    life:number = 0;
    stateMachine:StateMachine = new StateMachine();      //执行的动作行为
    @serialize()
    moveSpeed: number = 180;    //1秒
    routeList:Vec2[] = [];    // 移动路径图
    mapMainView: MapMainView = null;    //地图
    ui:UILive = null;
    mapProxy:MapProxy = null;
    static _idIndex = 1;
    _pb_tag:string = "";
    lastAttackTime:number = 0;
    constructor(mapMainView: MapMainView, x: number = 0, y: number = 0) {
        super(Live)
        this.x = x;
        this.y = y;
        this.mapMainView = mapMainView;
        this.mapProxy = MapProxy.getInstance(MapProxy);
        this.idx = Live._idIndex;
        Live._idIndex += 1;
        this.stateMachine.regeditHandler(this.onEnterState.bind(this),this.onExitState.bind(this),this.onState.bind(this))       

    }

    onEnterState(params:any){
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
            case StateMachine.STATE_ENUM.PATHFINDING:
                this.moveNext()
                break;
            default:
                break;
        }
    }

    onExitState(params:any){
        var stateId = this.stateMachine.state.id;
        switch (stateId) {
            default:
                break;
        }
    }

    initUI(parent:Node,cb?:Function) {
        let pool = PoolMgr.getInstance(PoolMgr).getPool(this._pb_tag);
        let node = pool.getItem(this);
        let viewPos = MapUtils.getViewPosByTilePos(this.pos);
        node.parent = parent; 
        node.setPosition(viewPos.x, viewPos.y);    
        this.bindUI(node.getComponent(UILive))
        if(!!cb) cb(this);
    }

    moveToPos(toPos: Vec2) {
        //this.fixPosition();
        //test
        var moveRouteList = this.getMoveRoute(toPos)
        if (toolKit.empty(moveRouteList)){
            return false;
        }
        this.mapMainView.printBlocks(moveRouteList);
        this.routeList = moveRouteList;
        this.ui.stopMoveAction();
        this.stateMachine.switchState(StateMachine.STATE_ENUM.PATHFINDING)
        this.updateDirection(toPos);     
        return true;
    }
    // 修改朝向
    updateDirection(toPos: Vec2){
        // 只有两个朝向
        var direction = this.x - toPos.x;
        this.ui.updateDirection(direction)
    }

    getNearByPos(area: Vec2[]):Vec2 {
        return MapUtils.getNearByPos(area,this.pos);
    }
    //检查是否可以通过
    checkBlock(pos:Vec2){
        return this.mapProxy.checkBlock(pos);
    }

    //避免遍历死循环。
    checkBlockRoute(pos:Vec2){
        return this.mapProxy.checkBlockRoute(pos);
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
    moveStepCheck(toPos: Vec2) {
        if (this.getDistance(toPos) > 1) {
            return;
        }
        this.stateMachine.switchState(StateMachine.STATE_ENUM.MOVING,{toPos:toPos})  
    }
    moveStep(toPos: Vec2) {
        if (this.getDistance(toPos) > 1) {
            return;
        }     
        let duration = this.mapMainView._blockSize.width * 1 / this.moveSpeed;
        let self = this, x = toPos.x, y = toPos.y;
        self.x = x;
        self.y = y;
        this.ui.moveStep(duration,toPos.multiply(this.mapMainView._blockSizeVec2),() => {
            this.stateMachine.switchState(this.stateMachine.lastState.id)
        })
    }
    fixPosition(){
        var tilePos = MapUtils.getTilePosByViewPos(this.node.position);
        this.x = tilePos.x;
        this.y = tilePos.y;
    }
    getMoveRoute(toPos:Vec2){        
        return MapUtils.getRouteList(v2(this.x,this.y),toPos,this.checkBlockRoute.bind(this))
    }

    clear(){
        this.destory();
    }
    
    atkTarget(){
        if(this.target){
            var nowTimeStamp = getTimeProxy().getTime();
            var deltaAngle = this.setDirection(this.target);
            if (Math.abs(deltaAngle) > 30){
                return
            }
            if(nowTimeStamp > this.lastAttackTime){
                //发起攻击
                var damage = this.getDamage();
                this.target.onBeAtked(damage,this);
                this.lastAttackTime = nowTimeStamp + this.atkColddown * 1000;
                this.onAtk(this.target);
            }            
        }
    }

    setDirection(target:BoxBase){
        if (!this.ui){
            return
        }
        var angle = MapUtils.getAngle(v2(this.x,this.y),v2(target.x,target.y));
        var deltaAngle = angle - this.ui.node.angle;
        if (Math.abs(deltaAngle) > 180){
            if(deltaAngle > 0){
                deltaAngle += -360;
            }else{
                deltaAngle += 360;
            }
        }
        this.ui.playDirectAction(this.ui.node.angle + deltaAngle);
        return deltaAngle;
    }

    getDamage(){
        var baseDamage = this.atk;
        var damage = baseDamage;
        return damage;
    }

    onBeAtked(damage:number,atker:BoxBase){
        this.life += -damage;
        if(this.ui){
            this.ui.onBeAtked(damage);
        }
        Debug.log(this.name,this.life);
        if(!this.checkLive()) {
            this.clear();
        }
        super.onBeAtked(damage,atker);
    }

    destory(){
        //--todo表现
        super.destory();
        this.node.removeFromParent();
    }
    update(){
    }
}