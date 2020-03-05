
import BaseCommand from "../base/Command"
import WindowMgr from "../../manager/WindowMgr"
import ModuleMgr from "../../manager/ModuleMgr"

export default class MapCommand extends BaseCommand{
    showMapView(params:any){
       let proxy =  ModuleMgr.getProxy("map")
        WindowMgr.getInstance().open("")
    }
}
