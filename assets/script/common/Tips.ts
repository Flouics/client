import App from "../App";
import BaseWin from "../zero/BaseWin";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Tips extends BaseWin {
    @property(cc.Label)
    lb_content:cc.Label = null;
    @property({
        type:cc.Integer
    })
    num_tipShowTime = 1500;
    index = 499;

    tipsList = [];
    closeTime = 0;
    
    onLoad () {
        super.onLoad()
        this.tipsList = []; //队列。
        this.closeTime = 0;
    }

    open (msg:string) {
        this.lb_content.string = msg;
        //todo ddz 队列后面在说
        this.closeTime = new Date().getTime() + this.num_tipShowTime;
    }

    update () {
        var nowTimestamp = new Date().getTime();
        if (nowTimestamp > this.closeTime) {
            this.onClose();
            App.windowMgr.closeUI(this);
        }
    }
}
