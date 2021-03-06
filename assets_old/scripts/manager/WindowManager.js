var RES_ENUM = {
    WINDOW: {
        loadingAm: "prefab/dialog/loadingAm",
        msgBox: "prefab/dialog/msgBox",
        tips: "prefab/dialog/tips",   
        rankInfo: "prefab/dialog/rankInfo",
    },

    ITEM: {},
    EFFECT: {},
};

var WindowManager = function () {
    this.creatingCB = {};
    this.ui = {};
    RES_WINDOW = RES_WINDOW;
    RES_ITEM = RES_ITEM;
    RES_EFFECT = RES_EFFECT;
};

// 创建，默认已经有根
WindowManager.prototype.create = function (uiName, cb, parent, b_noAddchild) {
    var self = this;

    var ret = this.ui[uiName];
    if (ret && ret.isValid) {
        ret.active = true;
        if (parent == undefined) parent = cc.find('Canvas');
        if (parent && ret.parent != parent) {
            ret.parent = parent;
        }

        cb(null, ret);
        return;
    }

    // 已经在加载，加入回调队列
    if (this.creatingCB.hasOwnProperty(uiName)) {
        this.creatingCB[uiName].push(cb);
        return;
    }

    // 初始化回调队列
    this.creatingCB[uiName] = [cb];

    var self = this;
    cc.loader.loadRes(uiName, cc.Prefab, function (err, prefab) {
        cc.log('[ui] end create: ', uiName, new Date());
        var cbs = self.creatingCB[uiName] || [];
        delete self.creatingCB[uiName];

        if (err) {
            cc.error(uiName, err);
            cbs.forEach(function (cb) {
                cb(err, null);
            })
        }
        else {
            var ui = cc.instantiate(prefab);
            ui.active = false;
            if (parent == undefined) parent = self.getUIRoot();        //解决异步场景多次进入的问题
            if (parent && parent.isValid) {
                if (!b_noAddchild) {
                    ui.parent = parent;
                }

            }
            self.ui[uiName] = ui;
            ui.uiName = uiName;
            cbs.forEach(function (cb) {
                cb(null, ui);
            })
        }
    });
};
WindowManager.prototype.addUi = function (uiName, ui) {
    // console.log("addUi " + uiName + "  -  " + ui);
    this.ui[uiName] = ui;
    ui.uiName = uiName;
};
// 打开
WindowManager.prototype.open = function (uiName, cb, parent, errorCb, b_noAddchild) {
    // cc.log('open ui: ', uiName);
    var time1 = new Date().getTime();
    this.create(uiName, function (err, ui) {
        if (err) {
            cc.error('open ui failed ', uiName, err);
            if (!!errorCb) {
                errorCb()
            }
            return;
        }
        var time2 = new Date().getTime();
        cc.log('open ui cost:', uiName, time2 - time1);
        if (!!ui) {
            var baseUI = ui.getComponent(cc.DialogBase);
            if (!!baseUI) {
                baseUI.show();
            } else {
                ui.active = true;
            }
        }

        if (!!cb)
            cb(ui);
    }, parent, b_noAddchild);
};

// 预加载
WindowManager.prototype.preload = function (uiName, cb) {
    var parent = global.app.nd_uiPool;
    this.create(uiName, function (err, ui) {
        if (err) {
            cc.error('preload ui failed ', uiName, err);
            return;
        } else {
            var baseUI = ui.getComponent(cc.DialogBase);
            if (!!baseUI && baseUI.init) {
                baseUI.init();
            }
            if (!!cb) cb(ui);
        }
    }, parent);
};


// 关闭
WindowManager.prototype.close = function (uiName) {
    // cc.log('close ui: ', uiName);
    var self = this;
    var ui = this.ui[uiName];
    if (!!ui) {
        console.log("关闭界面 " + uiName);
        self._close(ui, uiName);
    } else {
        console.log("没找到 " + uiName);
    }
};

WindowManager.prototype.closeUI = function (ui) {
    ui = ui.node;
    this._close(ui, ui.uiName);
};

WindowManager.prototype._close = function (ui, uiName) {
    if (!(ui instanceof cc.Node)) {
        cc.error('close ui must use node.');
        return;
    }

    if (ui.isValid) {
        var baseUI = ui.getComponent(cc.DialogBase);
        if (!!baseUI) {
            baseUI.hide();
        } else {
            var baseView = ui.getComponent(cc.BaseView);
            if (!!baseView) {
                baseView.hide();
            } else {
                ui.active = false;
            }
        }
    }
};


WindowManager.prototype.closeAll = function () {
    //todo
};

//按照窗口等级关闭窗口 1级窗口level =1
//level =2 会关闭2级以上所有窗口。
WindowManager.prototype.closeWindowByLevel = function (level) {
    var self = this;
    var ui_list = [];
    for (var name in this.ui) {
        var uiNode = this.ui[name];
        var baseUI = uiNode.getComponent(cc.DialogBase);
        if (baseUI && baseUI.index >= level * 100) {
            ui_list.push(baseUI);
        }
    }
    ui_list.forEach(function (ui) {
        self.closeUI(ui);
    })
};

//关闭特定层级的窗口,除了特定窗口。
WindowManager.prototype.closeWindowByZIndex = function (zIndex, exceptUI) {
    var ui_list = this.getWindowByZIndex(zIndex, exceptUI);
    ui_list.forEach(function (ui) {
        self.closeUI(ui);
    })
};

// 获取冲突的窗口
WindowManager.prototype.getWindowByZIndex = function (zIndex, exceptUI) {
    var self = this;
    var ui_list = [];
    for (var name in this.ui) {
        var uiNode = this.ui[name];
        var baseUI = uiNode.getComponent(cc.DialogBase);
        if (baseUI && baseUI.node.active && baseUI.index == zIndex && baseUI != exceptUI) {
            ui_list.push(baseUI);
        }
    }
    return ui_list;
};

WindowManager.prototype.getUIRoot = function () {
    var canvas = cc.find('Canvas');
    var uiRoot = cc.find('uiRoot', canvas);
    return uiRoot || canvas;
};

WindowManager.prototype.getUIMask = function () {
    var canvas = cc.find('Canvas');
    var mask = cc.find('mask', canvas);
    return mask;
};

WindowManager.prototype.setUIBlock = function (minisec) {
    var mask = this.getUIMask();
    if (!mask) return;
    mask.active = true;
    mask.getComponent('UIMask').setUIMaskBlockTime();
};

module.exports = function () {
    return new WindowManager();
};