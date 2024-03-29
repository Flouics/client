import UIEffect from "./UIEffect";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIEffectLife extends UIEffect {
    @property(cc.Label)
    lb_content:cc.Label = null;
    
    onLoad () {
        super.onLoad()
    }

    open (param:any) {
        this.lb_content.string = "" + param.value;
        if (param.value > 0){
            this.lb_content.node.color = cc.Color.GREEN;
        }else{
            this.lb_content.node.color = cc.Color.RED;
        }
        var self = this;
        cc.tween(this.node)
        .by(1.0,
            { y: 80})
        .by(0.5,
            { y: 80,opacity:0})
        .call(() => {                
            self.close();
        }).start();
    }

    close() {
        this.node.removeFromParent();
    }
}
