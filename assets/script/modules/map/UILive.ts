import BaseView from "../../zero/BaseView";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UILive extends BaseView {
    @property(cc.Sprite)
    spt_role:cc.Sprite = null;    
    _baseUrl = "texture/hero/";
    _moveAction:cc.Tween;
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
    stopMoveAction(){
        if(this._moveAction){
            this._moveAction.stop()
            this._moveAction.removeSelf()
            this._moveAction = null;
        }        
    }
    updateUI(){
    }
    update(dt:number){
        this.updateUI()
    }
}