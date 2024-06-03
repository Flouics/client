import BaseUI from "../../zero/BaseUI";

import { _decorator,Sprite} from 'cc';
const {ccclass, property} = _decorator;

@ccclass("UIBullet")
export default class UIBullet extends BaseUI {
    @property(Sprite)
    spt_bullet:Sprite = null;    
    _baseUrl = "texture/Bullet/";
    
    reuse(data:any){

    }
}