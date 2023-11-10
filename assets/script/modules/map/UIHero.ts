import Hero from "../../logic/Hero";
import UILive from "./UILive";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIHero extends UILive {    
    _baseUrl = "texture/hero/";
    _logicObj:Hero = null;
    updateUI(){
        var self = this;
        var logicObj = this._logicObj
        var loadSpt = function(){
            let spt = self.spt_role;
            if(logicObj.id > 0){
                self.loadSpt(spt, "hero/" + logicObj.id)
            }else{
                spt.spriteFrame = null;
            }       
        }
        this.updateDataToUI("hero.type",logicObj.id,()=>{
            //loadSpt()           
        })
    }
}