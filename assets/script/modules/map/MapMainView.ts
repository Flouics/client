import BaseView from "../../zero/BaseView";



/**
 * Created by Administrator on 2017/9/12.
 * 独立所有场景之外。
 */

var global = window;
const {ccclass, property} = cc._decorator;
@ccclass
export default class MapMainView extends BaseView{

    @property()
    margin_width:number = 10;
    margin_height:number = 10;

    


    // use this for initialization
    onLoad() {

    };

    onEnable() {
        
    };

};


