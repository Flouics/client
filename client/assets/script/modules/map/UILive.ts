import BaseUI from "../../zero/BaseUI";

import { _decorator, Color, Node, Sprite, tween, Tween, v2, Vec2, Vec3} from 'cc';
const {ccclass, property} = _decorator;

@ccclass("UILive")
export default class UILive extends BaseUI {
    @property(Sprite)
    spt_role:Sprite = null;    
    _baseUrl = "texture/hero/";
    _moveAction:Tween<Node>;
    _beAtkedAction:Tween<Node>;
    _directAction:Tween<Node>;
    reuse(data:any){

    }
    moveStep(duration:number,toPos:Vec2,cb?:Function) {
        this._moveAction = tween(this.node)
            .to(duration,
                { position: new Vec3(toPos.x,toPos.y)})
            .call(() => {                
                if (!!cb) cb()
            })
        this._moveAction.start();
    }
    removeTweenAction(actionTween:Tween<Node>){
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
        var scaleV3 = new Vec3(1,1,1);
        this.node.getScale(scaleV3);
        scaleV3.x = Math.abs(scaleV3.x) * (direction > 0 ? -1 : 1)
        this.node.setScale(scaleV3);
    }

    onBeAtked(damage:number){
        if(this._beAtkedAction) return;
        var duration = 0.5;
        var self = this;
        this._beAtkedAction = tween(this.spt_role.node)
        .to(duration,
            { },{
                onUpdate(tar:Node){
                    tar.getComponent(Sprite).color = Color.RED;
                }
            })
        .to(duration,
            { },{
                onUpdate(tar:Node){
                    tar.getComponent(Sprite).color = Color.WHITE;
                }
            })
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
        this._directAction = tween(this.node)
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