import App from "../../../App";
import ToolKit from "../../../utils/ToolKit";
import UIBuilding from "../UIBuilding";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIHeadquarters extends UIBuilding {
    _baseUrl = "texture/map/";
    _beAtkedAction:cc.Tween;
    @property(cc.ProgressBar)
    lifeBar:cc.ProgressBar = null;
    onBeAtked(damage:number){
        if(this._beAtkedAction) return;
        var duration = 0.5;
        var self = this;
        this._beAtkedAction = cc.tween(this.node)
        .to(duration,
            { color: cc.Color.RED})
        .to(duration,
            { color: cc.Color.WHITE})
        .call(() => {                
            //todo
            self.stopBeAtkedAction();
        })
        this._beAtkedAction.start();
        App.effectMgr.playEffect("life",{root:this.node,value:-damage})
    }

    stopBeAtkedAction(){
        this.removeTweenAction(this._beAtkedAction);
        this._beAtkedAction = null;
    }
    removeTweenAction(actionTween:cc.Tween){
        if(actionTween){
            actionTween.stop()
            actionTween.removeSelf()
        }       
    }

    updateUI(){
        var self = this;
        var logicObj = this._logicObj
        var data = {life : logicObj.life,lifeMax : logicObj.lifeMax}
        this.updateDataToUI("headquarters.life",data,()=>{
            var percent = data.life * 100 / data.lifeMax;
            percent = App.toolKit.limitNum(percent,0,100);
            this.lifeBar.progress = percent/100;
        });
    }
}