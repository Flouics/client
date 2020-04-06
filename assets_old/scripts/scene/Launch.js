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
        global.app.dataMgr.tryLoadAllTable(function () {
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
        global.app.loadingMgr.preLoadRes(res);
        var prefabs = [
            RES_WINDOW.rankInfo  
        ];
        global.app.loadingMgr.preLoadPrefab(prefabs);
        cc.director.preloadScene('game');
    },

    setVersion: function () {
        if (global.app.config.version) {
            this.lb_version.string = global.app.config.version;
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
        var version = global.app.dbMgr._getItem(global.app.dbMgr.Enum.LAST_VERSION);
        if (version != global.app.config.version) {
            global.app.dbMgr._setItem(global.app.dbMgr.Enum.LAST_VERSION, global.app.config.version);
            this.nd_tip.active = true;
        }

        global.app.sceneMgr.loadScene('game');
    },

    onClickRankInfo: function () {
        global.app.extension.openFaceBookRankInfo();
    },
});
