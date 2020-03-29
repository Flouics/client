import BaseView from "../../zero/BaseView";
import Building from "../../logic/Building";
import Tower_1 from "../../logic/tower/Tower_1";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MenuView extends BaseView {
    _clickBuilding:Building
    onClickBuild(){
        this._clickBuilding = new Tower_1(null);
    }

    touchMove(){

    }
}
