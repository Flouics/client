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

const {ccclass, property} = cc._decorator;
/**
 * 全局唯一的游戏管理器,每个场景都可以持有
 * 挂在启动场景。
 */
enum EventEnum {
    EVENT_HIDE = 1
    ,EVENT_SHOW = 2
};
var game:{[key:string]:any} = {};
@ccclass
export default class App extends cc.Component{
    @property(cc.Node)
    public nd_effectPool: cc.Node = null;
    @property(cc.Node)
    public nd_uiPool: cc.Node = null;
    
    scheduleTask:any = null;
    eventEnum:any = EventEnum
    emitter:Emitter = new Emitter()

    //mamager
    config:Config = null;
    toolKit:ToolKit = null;
    loadingMgr:LoadingMgr = null;
    dbMgr:DBMgr = null;

    httpMgr:HttpMgr = null;
    sceneMgr:SceneMgr = null; 
    windowMgr:WindowMgr = null;
    audioMgr:AudioMgr = null;
    asyncTaskMgr:AsyncTaskMgr = null;
    poolMgr:PoolMgr = null;
    moduleMgr:ModuleMgr = null;

    timeMgr:TimeMgr = null;
    dataMgr:DataMgr = null;
    loginMgr:LoginMgr = null;

    // use this for initialization
    onLoad () {
        //设置为常驻借点。
        cc.game.addPersistRootNode(this.node);
        //关闭帧数显示。
        cc.debug.setDisplayStats(false);
        //适配相关的
        cc.view.setResizeCallback(this.onViewResize.bind(this));

        this.appInit();
        this.onMsg();
    }

    appInit () {
        this.scheduleTask = {};
        var app = this;

        //定义全局变量。
        window.app = app;      
        window.game = game;
                
        this.config = this.config || new Config();
        this.toolKit = this.toolKit || new ToolKit();        
        
        this.loadingMgr = this.loadingMgr || new LoadingMgr();

        this.dbMgr = this.dbMgr || new DBMgr();
        this.httpMgr = this.httpMgr || new HttpMgr();
        this.sceneMgr = this.sceneMgr || new SceneMgr();
        this.windowMgr = this.windowMgr || new WindowMgr();

        this.audioMgr = this.audioMgr || new AudioMgr();
        this.asyncTaskMgr = this.asyncTaskMgr || new AsyncTaskMgr();
        this.poolMgr = this.poolMgr || new PoolMgr();
        this.moduleMgr = this.moduleMgr || new ModuleMgr();

        this.timeMgr = this.timeMgr || new TimeMgr();
        this.dataMgr = this.dataMgr || new DataMgr();
        this.loginMgr = this.loginMgr || new LoginMgr();
        //this.extension = this.extension || require('Extension')();
        //this.effectMgr = this.effectMgr || require('EffectMgr')();


        //this.userData = require('UserData')();
        //this.rechargeDm = this.rechargeDm || require('RechargeDm')();

        game.soundMgr = game.soundMgr || new SoundMgr();
        
    }

    onMsg () {

        //action管理器的问题。
        cc.game.off(cc.game.EVENT_SHOW);
        cc.game.off(cc.game.EVENT_HIDE);

        cc.game.on(cc.game.EVENT_SHOW, this.onEventShow.bind(this));

        cc.game.on(cc.game.EVENT_HIDE, this.onEventHide.bind(this));
    }

    onEventHide () {
        this.emitter.emit(this.eventEnum.EVENT_HIDE);
    }

    onEventShow () {
        this.emitter.emit(this.eventEnum.EVENT_SHOW);
        if (cc.director.getScheduler().isTargetPaused(cc.director.getAnimationManager())) {
            cc.director.getScheduler().resumeTarget(cc.director.getAnimationManager());
        }
    }

    offMsg () {
    }

    start () {

    }

    restart () {
        cc.game.removePersistRootNode(this.node);
        //有BUG先屏蔽。
        cc.game.restart();
    }

    exit () {
        cc.game.removePersistRootNode(this.node);
        cc.game.end();
    }

    //简单重写就好了。
    task (cb:Function, interval:number, key:string, isRepeatDo:boolean) {
        if (isRepeatDo == undefined) isRepeatDo = false;

        if (this.scheduleTask[key]) {
            if (!isRepeatDo) {
                cc.warn("scheduleTask has exist.", key);
            }
            this.delTask(key);
        }
        this.scheduleTask[key] = cb;
        this.schedule(cb, interval);
    }

    taskOnce (cb:Function, interval:number, key:string, isRepeatDo:boolean) {
        this.task(function () {
            this.unschedule(key)
            if (!!cb) cb();
        }, interval, key, isRepeatDo)
    }

    delTask (key:string) {
        var func = this.scheduleTask[key];
        if (!!func) {
            super.unschedule(func);
            delete this.scheduleTask[key];
        }
    }

    onViewResize () {
        //遍历所有的节点。
        //this.toolKit.showTip("onViewResize");
        var root = cc.find('Canvas');
        var scene_comp = root.getComponent(SceneBase);
        if (scene_comp && scene_comp.fitWinSize) {
            scene_comp.fitWinSize();
        }
        this.updateNodeWidget(root);
    }

    updateNodeWidget (node:cc.Node) {
        if (!!node && node instanceof cc.Node) {
            var widget = node.getComponent(cc.Widget);
            if (!!widget) {
                widget.updateAlignment();
            }
            var children = node.children;
            if (!!children) {
                children.forEach(function (child:cc.Node) {
                    this.updateNodeWidget(child);
                }.bind(this))
            }
        }
    }
}
