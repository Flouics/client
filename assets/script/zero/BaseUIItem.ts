
import BoxBase from "../logic/BoxBase";
import BaseUI from "./BaseUI";

const { ccclass, property } = cc._decorator;
@ccclass
export default class BaseUIItem extends BaseUI {

    reuse(data:any){
        this._logicObj = data;
    }

    updateUI() {
        // var self = this;
        // var logicObj = this._logicObj
        // this.updateDataToUI("value", logicObj.id, () => {
        //     //--todo
        // })
    }
}
