import Emitter from "./zero/Emitter";
import Config from "./Config";
import ToolKit from "./utils/ToolKit";
import LoadingMgr from "./manager/LoadingMgr";
import DBMgr from "./manager/DBMgr";
import HttpMgr from "./manager/HttpMgr";
import SceneMgr from "./manager/SceneMgr";
import WindowMgr from "./manager/WindowMgr";
import AudioMgr from "./manager/AudioMgr";
import AsyncTaskMgr from "./manager/AsyncTaskMgr";
import PoolMgr from "./manager/PoolMgr";
import ModuleMgr from "./manager/ModuleMgr";
import TimeMgr from "./manager/TimeMgr";
import DataMgr from "./manager/DataMgr";
import LoginMgr from "./manager/LoginMgr";
import SoundMgr from "./manager/SoundMgr";
import BaseClass from "./zero/BaseClass";
import AppView from "./AppView";
import TouchUtils from "./utils/TouchUtils";
import Proxy from "./modules/base/Proxy";

/**
 * 全局唯一的游戏管理器,每个场景都可以持有
 * 挂在启动场景。
 */
enum EventEnum {
    EVENT_HIDE = 1
    ,EVENT_SHOW = 2
};

//global
let empty = function(value:any){
    if(!!value){
        return false
    }
    if(typeof(value) == "string"){
        return value.length == 0;
    }else{
        return !value
    }

}
let deepCopy = function <T>(obj: T): T {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    const newObj: any = Array.isArray(obj) ? [] : {};
    
    for (let key in obj) {
        newObj[key] = deepCopy(obj[key]);
    }
    
    return newObj;
}
let getProxy = function (moduleName:string): Proxy {
    return  App.moduleMgr.getProxy(moduleName);
}

let nullfun = function () {}


window.empty = empty;
window.deepCopy = deepCopy;
window.clone  = deepCopy;
window.getProxy = getProxy;
window.nullfun = nullfun;

//全局太麻烦了，老是有红线，直接静态处理吧。App只会有一个。
export default class App extends BaseClass{
    
    static scheduleTask:any = null;
    static eventEnum:any = EventEnum
    static emitter:Emitter = new Emitter()

    //mamager
    static config:Config = null;
    static toolKit:ToolKit = null;
    static loadingMgr:LoadingMgr = null;
    static dbMgr:DBMgr = null;

    static httpMgr:HttpMgr = null;
    static sceneMgr:SceneMgr = null; 
    static windowMgr:WindowMgr = null;
    static audioMgr:AudioMgr = null;
    static asyncTaskMgr:AsyncTaskMgr = null;
    static poolMgr:PoolMgr = null;
    static moduleMgr:ModuleMgr = null;

    static timeMgr:TimeMgr = null;
    static dataMgr:DataMgr = null;
    static loginMgr:LoginMgr = null;
    static soundMgr:SoundMgr = null;

    static RES_WINDOW:{[key:string]:any} = {}
    static RES_ITEM:{[key:string]:any} = {};
    static RES_EFFECT:{[key:string]:any} = {};
    static game:{[key:string]:any} = {};

    static ui:AppView = null; 

    // use App for initialization
    static onLoad () {
        App.onMsg();

        // 通用接口
        App.RES_WINDOW = {
            loadingAm: "prefab/dialog/loadingAm",
            msgBox: "prefab/dialog/msgBox",
            tips: "prefab/dialog/tips",
            setting:"prefab/dialog/setting"
        }
    }

    static appInit (ui?:AppView) {
        if (ui) {
            App.ui = ui;
        }
        App.scheduleTask = {};
        //定义全局变量。        
        window["App"] = App;    
                
        App.config = new Config();
        App.toolKit = App.getInstance(ToolKit);        
        
        App.loadingMgr = App.getInstance(LoadingMgr);

        App.dbMgr = App.getInstance(DBMgr);
        App.httpMgr = App.getInstance(HttpMgr);
        App.sceneMgr = App.getInstance(SceneMgr);
        App.windowMgr = App.getInstance(WindowMgr);

        App.audioMgr = App.getInstance(AudioMgr);
        App.asyncTaskMgr = App.getInstance(AsyncTaskMgr);
        App.poolMgr = App.getInstance(PoolMgr);
        App.moduleMgr = App.getInstance(ModuleMgr);

        App.timeMgr = App.getInstance(TimeMgr);
        App.dataMgr = App.getInstance(DataMgr);
        App.loginMgr = App.getInstance(LoginMgr);
        App.soundMgr = App.getInstance(SoundMgr);      
        
        App.RES_WINDOW= {};
        App.RES_ITEM = {};
        App.RES_EFFECT = {};
        App.game = {};

        //需要初始化的模块
        App.moduleMgr.init();  
        
        //重新加载数据
        App.reloadFromDb();
    }

    static clear(){
        App.config = null;
        App.clearInstance(ToolKit);
        App.clearInstance(LoadingMgr);
        App.clearInstance(DBMgr);
        App.clearInstance(HttpMgr);
        App.clearInstance(SceneMgr);
        App.clearInstance(WindowMgr);
        App.clearInstance(AudioMgr);
        App.clearInstance(AsyncTaskMgr);
        App.clearInstance(ModuleMgr);
        App.clearInstance(TimeMgr);
        App.clearInstance(DataMgr);
        App.clearInstance(LoginMgr);
        App.clearInstance(SoundMgr);
    }

    static onMsg () {
        //action管理器的问题。
        cc.game.off(cc.game.EVENT_SHOW);
        cc.game.off(cc.game.EVENT_HIDE);
        cc.game.on(cc.game.EVENT_SHOW, App.onEventShow.bind(App));
        cc.game.on(cc.game.EVENT_HIDE, App.onEventHide.bind(App));
    }

    static onEventHide () {
        App.emitter.emit(App.eventEnum.EVENT_HIDE);
    }

    static onEventShow () {
        App.emitter.emit(App.eventEnum.EVENT_SHOW);
        if (cc.director.getScheduler().isTargetPaused(cc.director.getActionManager())) {
            cc.director.getScheduler().resumeTarget(cc.director.getActionManager());
        }
    }

    static offMsg () {
    }

    static start () {
        
    }

    static restart () {
        if (App.ui){
            App.ui.restart();
        }
        //有BUG先屏蔽。
        cc.game.restart();
    }

    static exit () {
        if (App.ui){
            App.ui.exit();
        }
        cc.game.end();
    }

    //简单重写就好了。
    static task (cb:Function, interval:number, key:string, isRepeatDo:boolean) {
        if (!App.ui) {
            return false
        }
        if (isRepeatDo == undefined) isRepeatDo = false;

        if (App.scheduleTask[key]) {
            if (!isRepeatDo) {
                cc.warn("scheduleTask has exist.", key);
            }
            App.delTask(key);
        }
        App.scheduleTask[key] = cb;
        App.ui.schedule(cb, interval);
        return true
    }

    static taskOnce (cb:Function, interval:number, key:string, isRepeatDo:boolean) {
        if (!App.ui) {
            return false
        }
        App.task(function () {
            App.delTask(key)
            if (!!cb) cb();
        }, interval, key, isRepeatDo)
    }

    static delTask (key:string) {
        var func = App.scheduleTask[key];
        if (!!func) {
            this.ui.unschedule(func);
            delete App.scheduleTask[key];
        }
    }

    static onViewResize () {
        if (!App.ui) {
            return false
        }
        App.ui.onViewResize();
    }

    static updateNodeWidget (node:cc.Node) {
        if (!App.ui) {
            return false
        }
        App.ui.updateNodeWidget(node)
    }

    static clearInstance(_Class:any){
        _Class.clearInstance()
    }
    
    //单例
    static getInstance(_Class:any){
        if( _Class._instance){
            return _Class._instance
        }else{
            let instance = new _Class(_Class);
            return instance
        }
    }

    static hotUpdateCheck (cb:Function) {        
        //先不加进度条，就一个文本。
        App.dataMgr.tryLoadAllTable(cb);
    };

    static dumpToDb(){       
        App.moduleMgr.dumpToDb()
        cc.log("保存成功")
    }

    static reloadFromDb(){
        App.moduleMgr.reloadFromDb();
        App.moduleMgr.command("map","reloadMapView");
        cc.log("加载成功")
    }
}
