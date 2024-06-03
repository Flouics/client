


import { _decorator, Size, Vec2,Component, UITransform, view, Node, Event, EventTouch} from 'cc';
const {ccclass, property} = _decorator;

@ccclass("TouchUtils")
export default class TouchUtils extends Component {
    _touchStartPos: Vec2 = null;
    _touchId:any = null;    //用于处理多点触摸的
    _deltaPos: Vec2 = Vec2.ZERO.clone();
    _speed: Vec2 = new Vec2(1, 1);
    _lastTouchEventTime: number = 0;
    _touchSize:Size = Size.ZERO.clone();
    _viewSize:Size = Size.ZERO.clone();
    onLoad() {
        //this.init();
    }
    init(touchSize?: Size) {
        if (!touchSize) {
            touchSize = this.node.getComponent(UITransform).contentSize;
        }else{
            this.node.getComponent(UITransform).contentSize = touchSize;
        }
        this._touchSize.width = touchSize.width;
        this._touchSize.height = touchSize.height;
        this._viewSize = view.getVisibleSize();
        this.addListener();
    }
    addListener() {
        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }

    onTouchStart(event: EventTouch) {
        if(this._touchId){
            return;
        }
        this._touchStartPos = event.getLocation();   
        this._touchId = event.getID();
        this._lastTouchEventTime = new Date().getTime();
    }

    onTouchMove(event: EventTouch) {
        if(this._touchId != event.getID()){
            return
        }
        var nowTimeStamp = new Date().getTime();
        var dt = (nowTimeStamp - this._lastTouchEventTime)/1000;        
        this.calcSpeed(event, dt)
        this._lastTouchEventTime = nowTimeStamp;
    }
    onTouchEnd(event: EventTouch) {
        if(this._touchId != event.getID()){
            return
        }
        var nowTimeStamp = new Date().getTime();
        var touchEndPos = event.getLocation();
        var deltaPos = touchEndPos.add(this._touchStartPos.negative());
        if(deltaPos.length() < 20 ){
            this.node.emit("map_click",event);
        }else{
            var dt = (nowTimeStamp - this._lastTouchEventTime)/1000;
            this.calcSpeed(event, dt);
        }
        this._lastTouchEventTime = nowTimeStamp;
    }
    calcSpeed(event: EventTouch, dt: number) {
        var deltaPos = event.getDelta();
        var lastDeltaPos = this._deltaPos;
        this._deltaPos = this._deltaPos.add(deltaPos as Vec2);
        // x坐标速度变化
        var x = this._deltaPos.x / ((this._speed.x == 0 ? 0 : lastDeltaPos.x / this._speed.x) + dt);
        var y = this._deltaPos.y / ((this._speed.y == 0 ? 0 : lastDeltaPos.y / this._speed.y) + dt);
        this._speed = new Vec2(x, y);
    }

    update(dt: number) {
        if (this._deltaPos.length() < 20) {
            return
        }
        var deltaPos = this._speed.multiplyScalar(dt)
        this._deltaPos = this._deltaPos.add(deltaPos.negative())
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

    updateNodePosition(deltaPos:Vec2 = Vec2.ZERO){
        var x = this.node.position.x + deltaPos.x;
        var y = this.node.position.y + deltaPos.y;
        if (this.node.position.x < (-this._touchSize.width/2 + this._viewSize.width/2)){
            x =  -this._touchSize.width/2 + this._viewSize.width/2;
        }
        if (this.node.position.x > (this._touchSize.width/2 - this._viewSize.width/2)){
            x =  this._touchSize.width/2 - this._viewSize.width/2;
        }
        if (this.node.position.y < (-this._touchSize.height/2 + this._viewSize.height/2)){
            y =  -this._touchSize.height/2 + this._viewSize.height/2;
        }
        if (this.node.position.y > (this._touchSize.height/2 - this._viewSize.height/2)){
            y =  this._touchSize.height/2 - this._viewSize.height/2;
        }
        this.node.setPosition(x, y);
    }

};