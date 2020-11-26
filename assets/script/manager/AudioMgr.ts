import BaseClass from "../zero/BaseClass";

var basePath = '/resources/music/';
var AUDIO_TYPE = '.mp3';
var global = window;
export default class AudioMgr extends BaseClass {
    _curMusic: any = null;
    _urls: string[] = [];
    _audioClip: any[] = [];
    settingData: any = null;

    getSettingData() {
        var ret = {
            isMusicOpen: 1,
            isEffectOpen: 1,
            musicVolume: 1,
            effectVolume: 1,
        }
        var localData = global.app.dbMgr._getJsonItem(global.app.dbMgr.Enum.AUDIO_SETTING);
        if (localData) {
            for (var key in localData) {
                if (ret.hasOwnProperty(key)) {
                    ret[key] = localData[key];
                }
            }
        }
        return ret;
    };

    saveSettingData() {
        global.app.dbMgr._setJsonItem(global.app.dbMgr.Enum.AUDIO_SETTING, this.settingData);
    };

    init() {
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

    getUrl(_name: string) {
        var name = _name.toString() + AUDIO_TYPE;
        if (this._urls[name]) {
            return this._urls[name];
        } else {
            var url = cc.url.raw(basePath + name);
            this._urls[name] = url;
            return url;
        }
    };

    getAudioClip(url: string, cb?: Function) {
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
    playMusicUrl(url: string, loop: boolean = true) {
        if (this._curMusic) {
            cc.log('there has been a music to play when it try to play', url, ";\tcurMusic is " + this._curMusic)
        }
        //todo 检查音乐是否正在播放。
        this._curMusic = url;

        if (this.settingData.isMusicOpen == 0) {
            return;
        }
        this.getAudioClip(url, function (audioClip: any) {
            cc.audioEngine.playMusic(audioClip, loop);
        });
        return true
    };

    //背景音乐。单轨
    playMusic(name: string, loop: boolean = true) {
        var url = this.getUrl(name);
        return this.playMusicUrl(url, loop);
    };

    stopMusic() {
        this._curMusic = null;
        return cc.audioEngine.stopMusic();
    };

    //开、关音乐
    setMusicOpen(isOpen: boolean) {
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
    setMusicVolume(volume: number) {
        return cc.audioEngine.setMusicVolume(volume);
    };

    pauseMusic() {
        return cc.audioEngine.pauseMusic();
    };

    resumeMusic() {
        return cc.audioEngine.resumeMusic();
    };

    rewindMusic(loop: boolean = true) {
        //rewindMusic有BUG，不能循环。
        if (this._curMusic) {
            return this.playMusicUrl(this._curMusic, loop);
        }
    };

    //音效。多轨
    playEffectUrl(url: string, loop: boolean = false, cb?: Function) {
        if (this.settingData.isEffectOpen == 0) {
            return;
        }
        if (loop == undefined) loop = false;
        this.getAudioClip(url, function (audioClip) {
            var audioId = cc.audioEngine.playEffect(audioClip, loop);
            if (!!cb) cb(audioId);
        });
        return true;
    };

    playEffect(name: string, loop?: boolean, volume?: number, cb?: Function) {
        var url = this.getUrl(name);
        return this.playEffectUrl(url, loop, cb);
    };

    stopEffect(audioId?: number) {
        if (audioId == undefined) {
            return;
        }
        return cc.audioEngine.stopEffect(audioId);
    };

    stopAllEffects() {
        if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.isBrowser) {
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
    setEffectOpen(isOpen: boolean) {
        var self = this;
        this.settingData.isEffectOpen = isOpen ? 1 : 0;
        if (this.settingData.isEffectOpen == 0) {
            self.stopAllEffects();
        }
    };

    //设置音效的音量
    setEffectsVolume(volume: number) {
        return cc.audioEngine.setEffectsVolume(volume);
    };

    preload(name: string, cb: Function) {
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

};
