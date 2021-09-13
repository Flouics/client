import BaseUI from "../../zero/BaseUI";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UILive extends BaseUI {
    @property(cc.Sprite)
    spt_role:cc.Sprite = null;    
    _baseUrl = "texture/hero/";
    _moveAction:cc.Tween;
    _beAtkedAction:cc.Tween;
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
    updateUI(){
    }
    update(dt:number){
        this.updateUI()
    }
}