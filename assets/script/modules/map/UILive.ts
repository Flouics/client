import BaseUI from "../../zero/BaseUI";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UILive extends BaseUI {
    @property(cc.Sprite)
    spt_role:cc.Sprite = null;    
    _baseUrl = "texture/hero/";
    _moveAction:cc.Tween;
    _beAtkedAction:cc.Tween;
    _directAction:cc.Tween;
    reuse(data:any){

    }
    moveStep(duration:number,toPos:cc.Vec2,cb?:Function) {
        this._moveAction = cc.tween(this.node)
            .to(duration,
                { position: toPos})
            .call(() => {                
                if (!!cb) cb()
            })
        this._moveAction.start();
    }
    removeTweenAction(actionTween:cc.Tween){
        if(actionTween){
            actionTween.stop()
            actionTween.removeSelf()
        }       
    }
    stopMoveAction(){
        this.removeTweenAction(this._moveAction);
        this._moveAction = null;
    }

    updateDirection(direction:number){
        if(direction == 0){
            return
        }
        var scaleV2 = cc.v2()
        this.node.getScale(scaleV2);
        scaleV2.y = Math.abs(scaleV2.y) * (direction > 0 ? 1 : -1)
        this.node.setScale(scaleV2);
    }

    onBeAtked(damage:number){
        if(this._beAtkedAction) return;
        var duration = 0.5;
        var self = this;
        this._beAtkedAction = cc.tween(this.spt_role.node)
        .to(duration,
            { color: cc.Color.RED})
        .to(duration,
            { color: cc.Color.WHITE})
        .call(() => {                
            //todo
            self.stopBeAtkedAction();
        })
        this._beAtkedAction.start();
    }

    stopBeAtkedAction(){
        this.removeTweenAction(this._beAtkedAction);
        this._beAtkedAction = null;
    }
     
    playDirectAction(angle:number):void {
        if(!!this._directAction) return;
        var duration = 0.3;
        var self = this;
        this._directAction = cc.tween(this.node)
        .to(duration,
            { angle: angle})
        .call(() => {                
            //todo
            self.stopDirectAction();
        })
        this._directAction.start();
    }
    
    stopDirectAction(): void {
        this._directAction = null;
        //this.node.angle = 0;
    }

    updateUI(){
    }
    update(dt:number){
        this.updateUI()
    }
}