/**
 * 全局唯一的游戏管理器,每个场景都可以持有
 * 挂在启动场景。
 */
cc.Class({
    extends: cc.Component,
    properties: {
        nd_effectPool: cc.Node,
        nd_uiPool: cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        //设置为常驻借点。
        cc.game.addPersistRootNode(this.node);
        //关闭帧数显示。
        cc.debug.setDisplayStats(false);
        //适配相关的
        cc.view.setResizeCallback(this.onViewResize.bind(this));

        this.appInit();
        this.onMsg();
    },


    appInit: function () {
        this.scheduleTask = {};
        var app = this;

        //定义全局变量。
        window.app = app;
        window.game = {};

        App.config = App.config || require('Config')();
        App.toolKit = App.toolKit || require('ToolKit')();
        App.loadingMgr = App.loadingMgr || require('LoadingMgr')();
        App.dbMgr = App.dbMgr || require('DBMgr')();
        App.httpMgr = App.httpMgr || require('HttpMessageHelp')();
        App.sceneMgr = App.sceneMgr || require('SceneMgr')();
        App.windowMgr = App.windowMgr || require('WindowManager')();
        App.buttonCtrl = App.buttonCtrl || require('ButtonCtrl')();
        App.audioMgr = App.audioMgr || require('AudioMgr')();
        App.asyncTaskMgr = App.asyncTaskMgr || require('AsyncTaskMgr')();
        App.poolMgr = App.poolMgr || require('PoolMgr')();
        App.moduleMgr = App.moduleMgr || require('ModuleMgr')();

        App.timeMgr = App.timeMgr || require('TimeMgr')();
        App.dataMgr = App.dataMgr || require('DataMgr')();
        App.loginMgr = App.loginMgr || require('LoginMgr')();
        App.extension = App.extension || require('Extension')();
        App.effectMgr = App.effectMgr || require('EffectMgr')();


        App.userData = require('UserData')();
        App.rechargeDm = App.rechargeDm || require('RechargeDm')();

        game.soundMgr = game.soundMgr || require('SoundMgr')();

        //event
        App.eventEnum = {};
    },


    onMsg: function () {

        //action管理器的问题。
        cc.game.off(cc.game.EVENT_SHOW);
        cc.game.off(cc.game.EVENT_HIDE);

        cc.game.on(cc.game.EVENT_SHOW, this.onEventShow.bind(this));

        cc.game.on(cc.game.EVENT_HIDE, this.onEventHide.bind(this));
    },

    onEventHide: function () {
        this.emitter.emit(App.eventEnum.EVENT_HIDE);
    },

    onEventShow: function () {
        this.emitter.emit(App.eventEnum.EVENT_SHOW);
        if (cc.director.getScheduler().isTargetPaused(cc.director.getAnimationManager())) {
            cc.director.getScheduler().resumeTarget(cc.director.getAnimationManager());
        }
    },

    offMsg: function () {
    },

    start: function () {

    },

    restart: function () {
        cc.game.removePersistRootNode(this.node);
        //有BUG先屏蔽。
        cc.game.restart();
    },

    exit: function () {
        cc.game.removePersistRootNode(this.node);
        cc.game.end();
    },

    //简单重写就好了。
    schedule: function (cb, interval, key, isRepeatDo) {
        if (isRepeatDo == undefined) isRepeatDo = false;

        if (this.scheduleTask[key]) {
            if (!isRepeatDo) {
                cc.warn("scheduleTask has exist.", key);
            }
            this.unschedule(key);
        }
        this.scheduleTask[key] = cb;
        this._super(cb, interval);
    },

    scheduleOnce: function (cb, interval, key, isRepeatDo) {
        this.schedule(function () {
            this.unschedule(key)
            if (!!cb) cb();
        }, interval, key, isRepeatDo)
    },

    unschedule: function (key) {
        var func = this.scheduleTask[key];
        if (!!func) {
            this._super(func);
            delete this.scheduleTask[key];
        }
    },

    onViewResize: function () {
        //遍历所有的节点。
        //App.toolKit.showTip("onViewResize");
        var root = cc.find('Canvas');
        var scene_comp = root.getComponent(cc.SceneBase);
        if (scene_comp && scene_comp.fitWinSize) {
            scene_comp.fitWinSize();
        }
        this.updateNodeWidget(root);
    },


    updateNodeWidget: function (node) {
        if (!!node && node instanceof cc.Node) {
            var widget = node.getComponent(cc.Widget);
            if (!!widget) {
                widget.updateAlignment();
            }
            var children = node.getChildren();
            if (!!children) {
                children.forEach(function (child) {
                    this.updateNodeWidget(child);
                }.bind(this))
            }
        }
    },

});
