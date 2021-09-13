import BaseUI from "../../zero/BaseUI";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIBullet extends BaseUI {
    @property(cc.Sprite)
    spt_bullet:cc.Sprite = null;    
    _baseUrl = "texture/Bullet/";
    
    reuse(data:any){

    }
}