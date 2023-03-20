import App from "../App";
import BaseWin from "../zero/BaseWin";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Setting extends BaseWin {
    
    onLoad () {
        super.onLoad();
    }

    onClickSave(){
        App.dumpToDb();
    }

    onClickLoad(){
        App.reloadFromDb();
    }   
    
    onClickExit(){
        App.exit();
    }
}
