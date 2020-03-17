import MapMain from "../modules/map/MapMainView";

var global = window;
const { ccclass, property } = cc._decorator;

@ccclass
export default class TouchUtils extends cc.Component {
    _touchStartPos: cc.Vec2 = null;
    _touchId:any = null;    //用于处理多点触摸的
    _deltaPos: cc.Vec2 = cc.Vec2.ZERO;
    _speed: cc.Vec2 = new cc.Vec2(1, 1);
    _lastTouchEventTime: number = 0;
    _touchSize:cc.Size = cc.Size.ZERO;
    _viewSize:cc.Size = cc.Size.ZERO;
    onLoad() {
        //this.init();
    }
    init(touchSize?: cc.Size) {
        if (!touchSize) {
            touchSize = this.node.getContentSize();
        }else{
            this.node.width = touchSize.width
            this.node.height = touchSize.height
        }
        this._touchSize.width = touchSize.width;
        this._touchSize.height = touchSize.height;
        this._viewSize = cc.winSize;
        this.addListener();
    }
    addListener() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }

    onTouchStart(event: cc.Event.EventTouch) {
        if(this._touchId){
            return;
        }
        this._touchStartPos = event.getLocation();        
        this._touchId = event.getID();
        this._lastTouchEventTime = new Date().getTime();
    }

    onTouchMove(event: cc.Event.EventTouch) {
        if(this._touchId != event.getID()){
            return
        }
        var nowTimeStamp = new Date().getTime();
        var dt = (nowTimeStamp - this._lastTouchEventTime)/1000;        
        this.calcSpeed(event, dt)
        this._lastTouchEventTime = nowTimeStamp;
    }
    onTouchEnd(event: cc.Event.EventTouch) {
        if(this._touchId != event.getID()){
            return
        }
        var nowTimeStamp = new Date().getTime();
        var touchEndPos = event.getLocation();
        var deltaPos = touchEndPos.add(this._touchStartPos.neg());
        if(deltaPos.mag() < 20 ){
            this.node.emit("map_click",event);
        }else{
            var dt = (nowTimeStamp - this._lastTouchEventTime)/1000;
            this.calcSpeed(event, dt);
        }
        this._lastTouchEventTime = nowTimeStamp;
    }
    calcSpeed(event: cc.Event.EventTouch, dt: number) {
        var deltaPos = event.getDelta();
        var lastDeltaPos = this._deltaPos;
        this._deltaPos = this._deltaPos.add(deltaPos);
        // x坐标速度变化
        var x = this._deltaPos.x / ((this._speed.x == 0 ? 0 : lastDeltaPos.x / this._speed.x) + dt);
        var y = this._deltaPos.y / ((this._speed.y == 0 ? 0 : lastDeltaPos.y / this._speed.y) + dt);
        this._speed = new cc.Vec2(x, y);
    }

    update(dt: number) {
        if (this._deltaPos.mag() < 20) {
            return
        }
        var deltaPos = this._speed.mul(dt)
        this._deltaPos = this._deltaPos.add(deltaPos.neg())
        if (this._speed.x * this._deltaPos.x < 0) {
            this._speed.x = 0;
            this._deltaPos.x = 0;
        }
        if (this._speed.y * this._deltaPos.y < 0) {
            this._speed.y = 0;
            this._deltaPos.y = 0;
        }
        this.updateNodePosition(deltaPos)
    }

    updateNodePosition(deltaPos:cc.Vec2 = cc.Vec2.ZERO){
        this.node.x = this.node.x + deltaPos.x;
        this.node.y = this.node.y + deltaPos.y;
        if (this.node.x < (-this._touchSize.width/2 + this._viewSize.width/2)){
            this.node.x =  -this._touchSize.width/2 + this._viewSize.width/2;
        }
        if (this.node.x > (this._touchSize.width/2 - this._viewSize.width/2)){
            this.node.x =  this._touchSize.width/2 - this._viewSize.width/2;
        }
        if (this.node.y < (-this._touchSize.height/2 + this._viewSize.height/2)){
            this.node.y =  -this._touchSize.height/2 + this._viewSize.height/2;
        }
        if (this.node.y > (this._touchSize.height/2 - this._viewSize.height/2)){
            this.node.y =  this._touchSize.height/2 - this._viewSize.height/2;
        }

    }

};