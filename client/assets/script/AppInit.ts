import { Enum } from "cc";
import App from "./App";
import PackageInit from "./modules/package/PackageInit";
import PlayerInit from "./modules/player/PlayerInit";
import TimeInit from "./modules/time/TimeInit";
import MapInit from "./modules/map/MapInit";

//全局太麻烦了，老是有红线，直接静态处理吧。App只会有一个。
export function AppInit(){
    
    App.initFont();

    //配表记载
    App.dataMgr.loadTexts = [
        'config'
        , 'base'
        , 'building'
    ]

    //需要初始化的模块
    var moduleMgr = App.moduleMgr
    moduleMgr.init();
    moduleMgr.load("player",new PlayerInit());
    moduleMgr.load("package",new PackageInit());
    moduleMgr.load("time",new TimeInit());
    moduleMgr.load("map",new MapInit());
   
    App.httpMgr.init();

    App.audioMgr.init();
}

