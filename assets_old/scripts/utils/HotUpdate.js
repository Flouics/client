cc.Class({
    extends: cc.DialogBase,

    properties: {
        nd_panel: cc.Node,
        manifestUrl: {//引擎建议如此定义
            type: cc.Asset,     // use 'type:' to define Asset object directly
            default: null,      // object's default value is null
        },
        lb_progress: cc.Label,
        nd_btnSkip: cc.Node,
        nd_btnUpdate: cc.Node,
        nd_btnRoot: cc.Node,
    },

    checkCb: function (event) {
        cc.log('Code: ' + event.getEventCode());
        if (this.timeout_id != -1 && this.timeout_id != undefined) {
            clearTimeout(this.timeout_id);
            this.timeout_id = -1;
        }
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                cc.log("No local manifest file found, hot update skipped.");
                if (this.cb) this.cb();
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                cc.log("Fail to download manifest file, hot update skipped.");
                if (this.cb) this.cb();
                break;
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                cc.log("Fail to parse manifest file, hot update skipped.");
                if (this.cb) this.cb();
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                cc.log("Already up to date with the latest remote version.");
                if (this.cb) this.cb();
                break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                this._needUpdate = true;
                this.nd_panel.active = true;
                this.lb_progress.string = '00.00%';
                break;
            default:
                cc.log(event.getMessage());
                //this.getComponent('Launch').checkFirstUrl();
                break;
        }
    },

    updateCb: function (event) {
        var needRestart = false;
        var failed = false;
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                cc.log('No local manifest file found, hot update skipped.');
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                var percent = event.getPercent();
                var percentByFile = event.getPercentByFile() * 100;
                var msg = event.getMessage();
                if (msg) {
                    cc.log('hotfix', msg);
                }
                if (!isNaN(percentByFile.toFixed(2))) {
                    this.lb_progress.string = percentByFile.toFixed(2) + '%';
                }
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                cc.log('Fail to download manifest file, hot update skipped.');
                failed = true;
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                cc.log('Already up to date with the latest remote version.');
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                cc.log('Update finished. ' + event.getMessage());
                needRestart = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
                cc.log('Update failed. ' + event.getMessage());
                this._failCount++;
                if (this._failCount < 5) {
                    this._am.downloadFailedAssets();
                }
                else {
                    cc.log('Reach maximum fail count, exit update process');
                    this._failCount = 0;
                    failed = true;
                }
                break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
                cc.log('Asset update error: ' + event.getAssetId() + ', ' + event.getMessage());
                break;
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                cc.log(event.getMessage());
                break;
            default:
                break;
        }

        if (failed) {
            this._am.setEventCallback(null);
            this.nd_panel.active = false;
            if (this.cb) this.cb();
        }

        if (needRestart) {
            this._am.setEventCallback(null);
            // Prepend the manifest's search path
            var searchPaths = jsb.fileUtils.getSearchPaths();
            var newPaths = this._am.getLocalManifest().getSearchPaths();
            Array.prototype.unshift.apply(searchPaths, newPaths);
            // This value will be retrieved and appended to the default search path during game startup,
            // please refer to samples/js-tests/main.js for detailed usage.
            // !!! Re-add the search paths in main.js is very important, otherwise, new scripts won't take effect.
            cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
            jsb.fileUtils.setSearchPaths(searchPaths);
            console.log('hotUpdateSearchPaths hotupdate', JSON.stringify(searchPaths));

            cc.audioEngine.stopAll();
            cc.game.restart();
        }
    },

    onClickBtnUpdate: function () {
        if (this._am && this._needUpdate) {
            this._am.setEventCallback(this.updateCb.bind(this));
            if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
                // Resolve md5 url
                var url = this.manifestUrl.nativeUrl;
                if (cc.loader.md5Pipe) {
                    url = cc.loader.md5Pipe.transformURL(url);
                }
                this._am.loadLocalManifest(url);
            }
            this._failCount = 0;
            this._am.update();
            this.nd_btnRoot.active = false;
        } else {
            if (this.cb) this.cb();
        }
    },

    onClickBtnSkip: function () {
        if (!!this.cb) this.cb();
    },

    init: function (callback, force) {
        var self = this;
        this.nd_panel.active = false;
        this.nd_btnRoot.active = true;
        this.cb = function () {
            self.hasInit = true;
            self.nd_panel.active = false;
            if (callback) callback();
            App.windowMgr.closeUI(self);
        };
        if (!force && this.hasInit) {
            if (this.cb) this.cb();
            return;
        }
        if (!cc.sys.isNative) {
            cc.log('system is not native');
            if (this.cb) this.cb();
            return;
        }
        if (this.timeout_id != -1 && this.timeout_id != undefined) {
            clearTimeout(this.timeout_id);
            this.timeout_id = -1;
        }
        this.timeout_id = setTimeout(function () {
            cc.log('hot fix time out');
            if (this.cb) this.cb();
        }.bind(this), 20 * 1000);

        this.fixHotUpdateUrl(this.initHotUpdate.bind(this));
        //this.initHotUpdate();//不修正热更地址。

    },

    getStoragePath: function () {
        var storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'ccs-remote-asset');
        return storagePath;
    },

    isDebug: function () {
        var storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/');
        var isFileExist = jsb.fileUtils.isFileExist(storagePath + 'debug.conf');
        cc.log('isFileExist', isFileExist);
        return isFileExist;
    },

    initHotUpdate: function () {
        var storagePath = this.getStoragePath();
        this._am = new jsb.AssetsManager(this.manifestUrl, storagePath);
        if (false && cc.sys.os === cc.sys.OS_ANDROID) {
            // Some Android device may slow down the download process when concurrent tasks is too much.
            // The value may not be accurate, please do more test and find what's most suitable for your game.
            this._am.setMaxConcurrentTask(2);
        } else {
            this._am.setMaxConcurrentTask(1);
        }

        if (this._am.setVersionCompareHandle && app) {
            this._am.setVersionCompareHandle(function (v1, v2) {
                return App.compareVersion(v1, v2);
            });
        } else {
            cc.error('hotfix cannot find function setVersionCompareHandle')
        }
        this._needUpdate = false;

        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            // Resolve md5 url
            var url = this.manifestUrl.nativeUrl;
            if (cc.loader.md5Pipe) {
                url = cc.loader.md5Pipe.transformURL(url);
            }
            this._am.loadLocalManifest(url);
        }
        if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
            cc.log('getLocalManifest no loaded.');
            if (this.cb) this.cb();
            return;
        }
        this._am.setEventCallback(this.checkCb.bind(this));
        this._am.checkUpdate();
    },

    fixHotUpdateUrl: function (cb) {
        var storagePath = this.getStoragePath();
        if (!this.isDebug()) {
            if (!!cb) cb();
            return;
        }
        //var dir = this.isDebug() ? '/remote_asset_test/' : '/remote_asset/';
        var dir = '/remote_asset/';
        var callback = function (filestring) {
            try {
                if (!filestring) {
                    if (!!cb) cb();
                }
                var projectObj = JSON.parse(filestring);
                var platform = cc.sys.os == cc.sys.OS_IOS ? 'ios' : 'android';
                projectObj.packageUrl = App.httpMgr.getUpdateServer() + '/download/dsn/' + platform + dir;
                projectObj.remoteManifestUrl = projectObj.packageUrl + 'project.manifest';
                projectObj.remoteVersionUrl = projectObj.packageUrl + 'version.manifest';
                jsb.fileUtils.writeStringToFile(JSON.stringify(projectObj), storagePath + '/project.manifest');
                if (!!cb) cb();
                cc.log('fixHotUpdateUrl success:', projectObj.packageUrl);
            } catch (e) {
                cc.error('fix hot update url error:', JSON.stringify(e));
                if (!!cb) cb();
            }
        };
        this.getUpdateFileString(storagePath, callback);
    },

    getUpdateFileString: function (storagePath, cb) {
        try {
            var filestring = jsb.fileUtils.getStringFromFile(storagePath + '/project.manifest');
            if (filestring || filestring != '') {
                if (!!cb) cb(filestring);
            } else {
                cc.log('getUpdateFileString file not exsit');
                cc.loader.load(this.manifestUrl.nativeUrl, function (error, manifestUrlstring) {
                    if (!error) {
                        if (!!cb) cb(manifestUrlstring);
                    } else {
                        if (!!cb) cb(null);
                    }
                })
            }
        } catch (e) {
            cc.log('getUpdateFileString failed', e);
            cc.loader.load(this.manifestUrl.nativeUrl, function (error, manifestUrlstring) {
                if (!error) {
                    if (!!cb) cb(manifestUrlstring);
                } else {
                    if (!!cb) cb(null);
                }
            })
        }
    },

    onDestroy: function () {
        if (this._updateListener) {
            this._am.setEventCallback(null);
            this._updateListener = null;
        }
    }
});
