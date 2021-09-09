var localStorageEnum = {
    AUDIO_SETTING: 'audio_setting',
    ACCOUNT_INFO: 'ACCOUNT_INFO',
};

var DBMgr = function () {
    this.ls = cc.sys.localStorage;
    this.Enum = localStorageEnum;
};

DBMgr.prototype.getItem = function (_key) {
    var key = this.getKey(_key);
    return this._getItem(key);
};

DBMgr.prototype.setItem = function (_key, value) {
    var key = this.getKey(_key);
    return this._setItem(key, value);
};

DBMgr.prototype.removeItem = function (_key) {
    var key = this.getKey(_key);
    return this._removeItem(key);
};

DBMgr.prototype.getJsonItem = function (_key) {
    var key = this.getKey(_key);

    return this._getJsonItem(key);
};

DBMgr.prototype.setJsonItem = function (_key, obj) {
    var key = this.getKey(_key);
    return this._setJsonItem(key, obj);
};

DBMgr.prototype.removeJsonItem = function (_key) {
    var key = this.getKey(_key);
    return this._removeJsonItem(key);
};


DBMgr.prototype._getItem = function (key) {
    var ret = this.ls.getItem(key);
    return ret;
};

DBMgr.prototype._setItem = function (key, value) {
    this.ls.setItem(key, value);
};

DBMgr.prototype._removeItem = function (key) {
    this.ls.removeItem(key);
};

DBMgr.prototype._getJsonItem = function (key) {
    var ret = this._getItem(key);
    try {
        ret = JSON.parse(ret);
    } catch (e) {
        cc.error("could not parse data");
        ret = null;
    }

    return ret;
};

DBMgr.prototype._setJsonItem = function (key, obj) {
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

DBMgr.prototype._removeJsonItem = function (key) {
    try {
        this._removeItem(key);
        return true;
    } catch (e) {
        cc.error("could not remove data", key);
        return false;
    }
};

DBMgr.prototype.clear = function () {
    this.ls.clear();
};

//防止不同用户之间用户数据冲突
DBMgr.prototype.getKey = function (key) {
    var uid = App.userData.uid || 'someone';
    var key_prefix = uid.slice(0, 7);
    return key_prefix + key;
};

module.exports = function () {
    return new DBMgr();
};
