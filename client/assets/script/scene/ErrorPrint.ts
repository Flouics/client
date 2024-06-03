
/**
 * Created by Administrator on 2017/9/12.
 * 独立所有场景之外。
 */

var global = window;
const {ccclass, property} = cc._decorator;
@ccclass
export default class App extends cc.Component{

    @property(cc.Label)
    lb_error: cc.Label = null;


    // use this for initialization
    onLoad() {

    };

    onEnable() {
        this.lb_error.string = global.g_event_error_str;
    };

    onRestart() {
        //todo ddz
        cc.game.restart();
    };
};
