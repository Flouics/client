var LoadingMgr = function () {
    this.play_id = 0;
    this.is_play = false;
};
//todo ddz
LoadingMgr.prototype.playAnimation = function (delay) {
    if (delay == undefined) delay = 1;
    this.is_play = true;
    this.play_id++;
    var play_id = this.play_id;
    var self = this;

    setTimeout(function () {
        if (play_id == self.play_id) {
            App.windowMgr.open(RES_WINDOW.loadingAm, function () {
                if (self.is_play == false) {
                    self.stopAnimation();
                }
            });
        }
    }, delay * 1000)
};

LoadingMgr.prototype.stopAnimation = function () {
    this.is_play = false;
    App.windowMgr.close(RES_WINDOW.loadingAm);
};

//todo
LoadingMgr.prototype.playAnimationRes = function () {
    this.is_play = true;
    this.play_id++;
    var self = this;
    App.windowMgr.open(RES_WINDOW.loadingAm, function () {
        if (self.is_play == false) {
            self.stopAnimation();
        }
    });
};

LoadingMgr.prototype.preLoadRes = function (atlas_name_list) {
    if (!atlas_name_list) {
        return;
    }
    for (var i in atlas_name_list) {
        let atlas_url = atlas_name_list[i];
        App.asyncTaskMgr.newAsyncTask(function () {
            cc.loader.loadRes(atlas_url, function (err, res) {
                if (!err) {
                    cc.log('preLoadRes atlas:', atlas_url);
                }
            });
        });
    }
};

LoadingMgr.prototype.preLoadPrefab = function (ui_name_list, cb, async_num) {
    if (!ui_name_list) {
        return;
    }
    if (async_num == undefined) async_num = 1;
    if (async_num == 1) {
        for (var i in ui_name_list) {
            let ui_name = ui_name_list[i];
            App.asyncTaskMgr.newAsyncTask(function () {
                App.windowMgr.preload(ui_name, cb);
            });
        }
    } else {
        var ui_name_list_copy = ui_name_list.slice(0);
        while (ui_name_list_copy.length > 0) {
            let ui_name_list_temp = ui_name_list_copy.splice(0, async_num);
            App.asyncTaskMgr.newAsyncTask(function () {
                for (var i in ui_name_list_temp) {
                    let ui_name = ui_name_list_temp[i];
                    App.windowMgr.preload(ui_name, cb);
                }
            });
        }
    }
};

module.exports = function () {
    return new LoadingMgr();
};
