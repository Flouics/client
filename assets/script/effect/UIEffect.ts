
import BaseUI from "../zero/BaseUI";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIEffect extends BaseUI {
    
    onLoad () {
        super.onLoad()
    }

    open(param:any){

    }
    
    close() {
        this.node.removeFromParent();
    }
}
