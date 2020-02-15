var SceneMgr = function () {
    this.isLoading = false;
};
SceneMgr.prototype.EVENT = {
    BEFORE_SCENE_PRELOADING: 'BEFORE_SCENE_PRELOADING',
    AFTER_SCENE_PRELOADING: 'BEFORE_SCENE_PRELOADING',
    BEFORE_SCENE_LOADING: 'BEFORE_SCENE_LOADING',
    AFTER_SCENE_LOADING: 'AFTER_SCENE_LOADING',
    //launch不需要再发射事件，进入加载。
};

SceneMgr.prototype.loadScene = function (sceneName, cb) {

    // 正在加载了，请排队，或先拒绝
    if (this.isLoading) {
        cc.error('already loading scene');
        return;
    }

    this.isLoading = true;
    cc.log('[Scene] preScene ', cc.director.getScene().name, ' -> nextScene ', sceneName);

    var self = this;
    var sceneAction = function () {
        cc.log('endAction, start loadScene', new Date().getTime());
        var uiRoot = app.windowMgr.getUIRoot();
        uiRoot.removeAllChildren();
        // 停止当前音乐
        self.isLoading = cc.director.loadScene(sceneName, function () {
            self.isLoading = false;
            app.loadingMgr.stopAnimation();
            cc.log('end loadScene', sceneName, new Date().getTime());
            if (cb) {
                cb();
            }
        });
    }
    app.loadingMgr.playAnimation(0.2);
    cc.director.preloadScene(sceneName, function (error) {
        if (error) {
            self.isLoading = false;
            return;
        } else {
            sceneAction();
        }
    });
};

module.exports = function () {
    return new SceneMgr();
};

