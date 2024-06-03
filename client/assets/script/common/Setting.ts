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
    
    onClickClear(){    
        App.toolKit.showMsgBox(lang("setting_clear_cache_1"),()=>{
            App.dbMgr.clear();
            App.toolKit.showTip(lang("setting_clear_cache_2"));
        },nullfun);
    }   
    
    onClickExit(){
        this.close();
        //App.exit();
    }
}
