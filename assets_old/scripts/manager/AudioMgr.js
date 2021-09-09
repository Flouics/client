var basePath = '/resources/music/';
var AUDIO_TYPE = '.mp3';

var AudioMgr = function () {
    this._curMusic = null;
    this._urls = [];
    this._audioClip = [];
    this.init();
};

AudioMgr.prototype.getSettingData = function () {
    var ret = {
        isMusicOpen: 1,
        isEffectOpen: 1,
        musicVolume: 1,
        effectVolume: 1,
    }
    var localData = App.dbMgr._getJsonItem(App.dbMgr.Enum.AUDIO_SETTING);
    if (localData) {
        for (var key in localData) {
            if (ret.hasOwnProperty(key)) {
                ret[key] = localData[key];
            }
        }
    }
    return ret;
};

AudioMgr.prototype.saveSettingData = function () {
    App.dbMgr._setJsonItem(App.dbMgr.Enum.AUDIO_SETTING, this.settingData);
};

AudioMgr.prototype.init = function () {
    this.settingData = this.getSettingData();
    if (this.settingData) {
        this.setMusicOpen(this.settingData.isMusicOpen == 1);
        this.setEffectOpen(this.settingData.isEffectOpen == 1);
    } else {
        this.setMusicOpen(true);
        this.setEffectOpen(true);
    }

    return this;
};

AudioMgr.prototype.getUrl = function (_name) {
    var name = _name.toString() + AUDIO_TYPE;
    if (this._urls[name]) {
        return this._urls[name];
    } else {
        var url = cc.url.raw(basePath + name);
        this._urls[name] = url;
        return url;
    }
};

AudioMgr.prototype.getAudioClip = function (url, cb) {
    if (this._audioClip[url]) {
        if (!!cb) cb(this._audioClip[url]);
    } else {
        var self = this;
        cc.loader.load(url, function (error, audioClip) {
            if (!!error) {
                cc.warn('load audio failed:', error);
                if (!!cb) cb(null);
                return;
            }
            self._audioClip[url] = audioClip;
            if (!!cb) cb(audioClip);
        });
    }
};

//背景音乐。单轨
AudioMgr.prototype.playMusicUrl = function (url, loop) {
    if (this._curMusic) {
        cc.log('there has been a music to play when it try to play', url, ";\tcurMusic is " + this._curMusic)
    }
    //todo 检查音乐是否正在播放。
    this._curMusic = url;

    if (this.settingData.isMusicOpen == 0) {
        return;
    }
    this.getAudioClip(url, function (audioClip) {
        cc.audioEngine.playMusic(audioClip, loop);
    });
    return true
};

//背景音乐。单轨
AudioMgr.prototype.playMusic = function (name, loop) {
    var url = this.getUrl(name);
    return this.playMusicUrl(url, loop);
};

AudioMgr.prototype.stopMusic = function (isReleaseData) {
    this._curMusic = null;
    return cc.audioEngine.stopMusic(isReleaseData);
};

//开、关音乐
AudioMgr.prototype.setMusicOpen = function (isOpen) {
    var self = this;
    this.settingData.isMusicOpen = isOpen ? 1 : 0;
    if (this.settingData.isMusicOpen == 0) {
        setTimeout(function () {
            self.pauseMusic();
        }, 500);
    } else {
        self.rewindMusic();
    }
};

//设置音乐的音量
AudioMgr.prototype.setMusicVolume = function (volume) {
    return cc.audioEngine.setMusicVolume(volume);
};

AudioMgr.prototype.pauseMusic = function () {
    return cc.audioEngine.pauseMusic();
};

AudioMgr.prototype.resumeMusic = function () {
    return cc.audioEngine.resumeMusic();
};

AudioMgr.prototype.rewindMusic = function (loop) {
    if (loop == undefined) loop = true;
    //rewindMusic有BUG，不能循环。
    if (this._curMusic) {
        return this.playMusicUrl(this._curMusic, loop);
    }
};

//音效。多轨
AudioMgr.prototype.playEffectUrl = function (url, loop, volume,cb) {
    if (this.settingData.isEffectOpen == 0) {
        return;
    }
    if (loop == undefined) loop = false;
    if (volume == undefined) volume = this.settingData.effectVolume;

    this.getAudioClip(url, function (audioClip) {
        var audioId = cc.audioEngine.playEffect(audioClip, loop, volume);
        if(!!cb) cb(audioId);
    });
    return true;
};

AudioMgr.prototype.playEffect = function (name, loop, volume,cb) {
    var url = this.getUrl(name);
    return this.playEffectUrl(url, loop, volume,cb);
};

AudioMgr.prototype.stopEffect = function (audioId) {
    if (audioId == undefined) {
        return;
    }
    return cc.audioEngine.stopEffect(audioId);
};

AudioMgr.prototype.stopAllEffects = function () {
    if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.isBrowser) {
        cc.audioEngine.stopAll();
        this.rewindMusic();
    } else {
        if (cc.sys.os == cc.sys.OS_IOS) {
            cc.audioEngine.stopAllEffects();
            this.rewindMusic();
        }
    }
};

//开、关音效
AudioMgr.prototype.setEffectOpen = function (isOpen) {
    var self = this;
    this.settingData.isEffectOpen = isOpen ? 1 : 0;
    if (this.settingData.isEffectOpen == 0) {
        self.stopAllEffects();
    }
};

//设置音效的音量
AudioMgr.prototype.setEffectsVolume = function (volume) {
    return cc.audioEngine.setEffectsVolume(volume);
};

AudioMgr.prototype.preload = function (name, cb) {
    if (!cc.audioEngine.preload) {
        if (!!cb) {
            cb(false)
        }
        return;
    }
    var url = this.getUrl(name);
    this.getAudioClip(url, cb);
    /*   return cc.audioEngine.preload(url, function (data) {
     //todo 回调再确认。
     if (!!cb) {
     cb(data)
     }
     });*/
};

module.exports = function () {
    return new AudioMgr();
}