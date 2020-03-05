import SceneBase from "../zero/SceneBase";

var global = window;
const {ccclass, property} = cc._decorator;
@ccclass
export default class App extends SceneBase{

    @property(cc.Node)
    nd_login: cc.Node = null;
    @property(cc.Label)
    lb_version: cc.Label = null;
    @property(cc.Node)
    nd_tip: cc.Node = null;

    loadEvents:{[key:string]:any} = {}


    // use this for initialization
    onLoad () {
        this.nd_login.active = false;
        this.nd_tip.active = false;
    };

    onEnable () {
        super.onEnable();
        this.nd_login.active = false;
        this.setVersion();
        this.hotUpdateCheck();
    };

    hotUpdateCheck () {
        this.loadEvents = {'loadtxt': false};
        //先不加进度条，就一个文本。
        global.app.dataMgr.tryLoadAllTable(function () {
            this.loadEvents.loadtxt = true;
            this.loadGame();
        }.bind(this));
    };

    start () {
        this.preLoad();
    };

    preLoad () {
        let res_enum = global.res_enum;
        var res = [
        ];
        global.app.loadingMgr.preLoadRes(res);
        var prefabs = [
            res_enum.WINDOW.rankInfo  
        ];
        global.app.loadingMgr.preLoadPrefab(prefabs);
        cc.director.preloadScene('game');
    };

    setVersion () {
        if (global.app.config.version) {
            this.lb_version.string = global.app.config.version;
        } else {
            this.lb_version.string = '1.0.0';
        }
    };

    loadGame () {
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
    };

    onClickStart () {
        var version = global.app.dbMgr._getItem(global.app.dbMgr.Enum.LAST_VERSION);
        if (version != global.app.config.version) {
            global.app.dbMgr._setItem(global.app.dbMgr.Enum.LAST_VERSION, global.app.config.version);
            this.nd_tip.active = true;
        }

        global.app.sceneMgr.loadScene('game');
    };

    onClickRankInfo () {
        global.app.extension.openFaceBookRankInfo();
    };
};
