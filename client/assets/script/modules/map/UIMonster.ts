import Monster from "../../logic/Monster";
import UILive from "./UILive";
import { _decorator} from 'cc';
const {ccclass, property} = _decorator;

@ccclass("UIMonster")
export default class UIMonster extends UILive {    
    _baseUrl = "texture/monster/";
    _logicObj:Monster = null;
    updateUI(){
        var self = this;
        var logicObj = this._logicObj
        var loadSpt = function(){
            let spt = self.spt_role;
            if(logicObj.id > 0){
                self.loadSpt(spt, "monster/" + logicObj.id)
            }else{
                spt.spriteFrame = null;
            }       
        }
        this.updateDataToUI("monster.type",logicObj.id,()=>{
            loadSpt()           
        })
    }
}