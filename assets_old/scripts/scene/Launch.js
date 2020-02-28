cc.Class({
    extends: cc.SceneBase,

    properties: {
        nd_login: cc.Node,
        lb_version: cc.Label,
        nd_tip: cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        this.nd_login.active = false;
        this.nd_tip.active = false;
    },

    onEnable: function () {
        this._super();
        this.nd_login.active = false;
        this.setVersion();
        this.hotUpdateCheck();
    },

    hotUpdateCheck: function () {
        this.loadEvents = {'loadtxt': false};
        //先不加进度条，就一个文本。
        app.dataMgr.tryLoadAllTable(function () {
            this.loadEvents.loadtxt = true;
            this.loadGame();
        }.bind(this));
    },

    start: function () {
        this.preLoad();
    },

    preLoad: function () {
        var res = [
        ];
        app.loadingMgr.preLoadRes(res);
        var prefabs = [
            app.RES_WINDOW.rankInfo  
        ];
        app.loadingMgr.preLoadPrefab(prefabs);
        cc.director.preloadScene('game');
    },

    setVersion: function () {
        if (app.config.version) {
            this.lb_version.string = app.config.version;
        } else {
            this.lb_version.string = '1.0.0';
        }
    },

    loadGame: function () {
        var isCmp = true;
        for (var key in this.loadEvents) {
            if (this.loadEvents[key] == false) {
                isCmp = false;
                break;
            }
        }
        if (!!isCmp) {
            this.nd_login.active = true;
        }
    },

    onClickStart: function () {
        var version = app.dbMgr._getItem(app.dbMgr.Enum.LAST_VERSION);
        if (version != app.config.version) {
            app.dbMgr._setItem(app.dbMgr.Enum.LAST_VERSION, app.config.version);
            this.nd_tip.active = true;
        }

        app.sceneMgr.loadScene('game');
    },

    onClickRankInfo: function () {
        app.extension.openFaceBookRankInfo();
    },
});
