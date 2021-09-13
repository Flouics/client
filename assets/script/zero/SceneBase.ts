import BaseUI from "./BaseUI";

const {ccclass, property} = cc._decorator;
@ccclass
export default class SceneBase extends BaseUI{
    // use this for initialization
    onLoad () {
        super.onLoad();
        this.fitWinSize();
    }

    fitWinSize () {
        var is_fit = cc.winSize.width / cc.winSize.height >= 1280 / 720;
        var canvas = this.node.getComponent(cc.Canvas);
        if (!is_fit && canvas) {
            canvas.fitWidth = true;
        }
    }
}
