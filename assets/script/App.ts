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
import SceneBase from "./zero/SceneBase";
import BaseClass from "./zero/BaseClass";
import AppUI from "./AppUI";

/**
 * 全局唯一的游戏管理器,每个场景都可以持有
 * 挂在启动场景。
 */
enum EventEnum {
    EVENT_HIDE = 1
    ,EVENT_SHOW = 2
};

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

    static ui:AppUI = null;

    // use App for initialization
    static onLoad () {
        App.appInit();
        App.onMsg();
    }

    static appInit (ui?:AppUI) {
        if (ui) {
            App.ui = ui;
        }
        App.scheduleTask = {};
        //定义全局变量。        
        window["app"] = App;    
        App.RES_WINDOW = {};
 
                
        App.config = App.config || new Config();
        App.toolKit = App.toolKit || new ToolKit(ToolKit);        
        
        App.loadingMgr = App.loadingMgr || new LoadingMgr(LoadingMgr);

        App.dbMgr = App.dbMgr || new DBMgr(DBMgr);
        App.httpMgr = App.httpMgr || new HttpMgr(HttpMgr);
        App.sceneMgr = App.sceneMgr || new SceneMgr(SceneMgr);
        App.windowMgr = App.windowMgr || new WindowMgr(WindowMgr);

        App.audioMgr = App.audioMgr || new AudioMgr(AudioMgr);
        App.asyncTaskMgr = App.asyncTaskMgr || new AsyncTaskMgr(AsyncTaskMgr);
        App.poolMgr = App.poolMgr || new PoolMgr(PoolMgr);
        App.moduleMgr = App.moduleMgr || new ModuleMgr(ModuleMgr);

        App.timeMgr = App.timeMgr || new TimeMgr(TimeMgr);
        App.dataMgr = App.dataMgr || new DataMgr(DataMgr);
        App.loginMgr = App.loginMgr || new LoginMgr(LoginMgr);

        App.soundMgr = App.soundMgr || new SoundMgr(SoundMgr);
        
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
}
