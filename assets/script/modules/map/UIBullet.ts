import BaseView from "../../zero/BaseView";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIBullet extends BaseView {
    @property(cc.Sprite)
    spt_bullet:cc.Sprite = null;    
    _baseUrl = "texture/Bullet/";
    
    reuse(data:any){

    }
    update(dt:number){

    }
}