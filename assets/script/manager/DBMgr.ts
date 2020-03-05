var localStorageEnum = {
    AUDIO_SETTING: 'audio_setting',
    ACCOUNT_INFO: 'ACCOUNT_INFO',
};
var global = window;
export default class DBMgr {
    ls: any = cc.sys.localStorage;
    Enum: any = localStorageEnum;

    // 单例处理
    static _instance: DBMgr = null;
    constructor() {
        DBMgr._instance = this;
    }
    static getInstance():DBMgr {
        if (DBMgr._instance) {
            return DBMgr._instance
        } else {
            let instance = new DBMgr();
            return instance
        }
    }
    static get obj() {
        return DBMgr.getInstance()
    }

    getItem(_key: string) {
        var key = this.getKey(_key);
        return this._getItem(key);
    };

    setItem(_key: string, value: any) {
        var key = this.getKey(_key);
        return this._setItem(key, value);
    };

    removeItem(_key: string) {
        var key = this.getKey(_key);
        return this._removeItem(key);
    };

    getJsonItem(_key: string) {
        var key = this.getKey(_key);

        return this._getJsonItem(key);
    };

    setJsonItem(_key: string, obj: any) {
        var key = this.getKey(_key);
        return this._setJsonItem(key, obj);
    };

    removeJsonItem(_key: string) {
        var key = this.getKey(_key);
        return this._removeJsonItem(key);
    };


    _getItem(key: string) {
        var ret = this.ls.getItem(key);
        return ret;
    };

    _setItem(key: string, value: any) {
        this.ls.setItem(key, value);
    };

    _removeItem(key: string) {
        this.ls.removeItem(key);
    };

    _getJsonItem(key: string) {
        var ret = this._getItem(key);
        try {
            ret = JSON.parse(ret);
        } catch (e) {
            cc.error("could not parse data");
            ret = null;
        }

        return ret;
    };

    _setJsonItem(key: string, obj: any) {
        if (obj) {
            try {
                var ret = JSON.stringify(obj);
                this._setItem(key, ret);
                return true;
            } catch (e) {
                cc.error("could not stringify data", obj);
                return false;
            }
        }
        return false;
    };

    _removeJsonItem(key: string) {
        try {
            this._removeItem(key);
            return true;
        } catch (e) {
            cc.error("could not remove data", key);
            return false;
        }
    };

    clear() {
        this.ls.clear();
    };

    //防止不同用户之间用户数据冲突
    getKey(key: string) {
        var uid = global.app.userData.uid || 'someone';
        var key_prefix = uid.slice(0, 7);
        return key_prefix + key;
    };
};
