import UILive from "./UILive";

import { _decorator} from 'cc';
const {ccclass, property} = _decorator;

@ccclass("UIMonster")
export default class UIMonster extends UILive {    
    _baseUrl = "texture/master/";
    reuse(){
        
    }
}