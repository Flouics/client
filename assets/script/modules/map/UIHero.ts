import BaseView from "../../zero/BaseView";
import Hero from "../../logic/Hero";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIBlock extends BaseView {
    @property(cc.Sprite)
    spt_role:cc.Sprite = null;    
    _baseUrl = "texture/hero/";
    updateUI(hero:Hero){
    }
    moveStep(duration:number,toPos:cc.Vec2,cb?:Function) {
        cc.tween(this.node)
            .to(duration,
                { position: toPos})
            .call(() => {
                if (!!cb) cb()
            }).start();
    }
}