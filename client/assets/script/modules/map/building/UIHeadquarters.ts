import App from "../../../App";
import { toolKit } from "../../../utils/ToolKit";
import UIBuilding from "../UIBuilding";

import { _decorator, Color, Node, ProgressBar, Sprite, tween, Tween} from 'cc';
const {ccclass, property} = _decorator;

@ccclass("UIHeadquarters")
export default class UIHeadquarters extends UIBuilding {
    _baseUrl = "texture/map/";
    _beAtkedAction:Tween<Node>;
    @property(ProgressBar)
    lifeBar:ProgressBar = null;
    onBeAtked(damage:number){
        if(this._beAtkedAction) return;
        var duration = 0.5;
        var self = this;
        this._beAtkedAction = tween(this.node)
        .to(duration,
            { },{
                onUpdate(){
                    self.node.getComponent(Sprite).color = Color.RED;
                }
            })
        .to(duration,
            { },{
                onUpdate(){
                    self.node.getComponent(Sprite).color = Color.WHITE;
                }
            })
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
    removeTweenAction(actionTween:Tween<Node>){
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
            percent = toolKit.limitNum(percent,0,100);
            this.lifeBar.progress = percent/100;
        });
    }
}