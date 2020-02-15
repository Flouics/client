/**
 * Created by zuxiong on 2017/4/8.
 */

var PollingCmd = function () {
    this._timeOutInterval = null
    this._hadFinsh = false;
};

PollingCmd.prototype.start = function (cmd, data, serverUrlAry, callBackBind) {
    this._hadFinsh = false;
    this._cmd = cmd;
    this._data = data;
    this._serverUrlAry = serverUrlAry;
    this._callBackBind = callBackBind;
    this._vaildUrl = null;

    this.sendReq();
};

PollingCmd.prototype.sendReq = function () {
    if (this._serverUrlAry.length == 0) {
        this.doCallBack(null, null);
        return;
    }

    this._vaildUrl = this._serverUrlAry[0];
    this._serverUrlAry.shift();

    var url = this._vaildUrl + "/" + this._cmd;
    var req = new XMLHttpRequest();
    req.open("POST", url);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    cc.log("PollingCmd: send url =  ", url);
    var that = this;
    req.onreadystatechange = function () {
        cc.log("PollingCmd: onreadystatechange =  ", req.status);
        if (req.readyState == 4 && req.status == 200) {
            that.stopTimeOut();
            that.doCallBack(req.responseText, that._vaildUrl);
        }
    };

    req.send(this._data);
    this.startReqTimeOut();
};

PollingCmd.prototype.doCallBack = function (text, url) {
    cc.log("PollingCmd: finish :" + url);
    if (this._hadFinsh) {
        return;
    }

    if (this._callBackBind) {
        this._hadFinsh = true;
        this._callBackBind(text, url);
    }
};

PollingCmd.prototype.startReqTimeOut = function () {
    this.stopTimeOut();

    var that = this;
    this._timeOutInterval = setTimeout(function () {
            cc.log("---------------req time out -----------------");
            if (that._timeOutInterval != null) {
                that._timeOutInterval = null;

                that.sendReq();
            }
        },
        5 * 1000
    )
};

PollingCmd.prototype.stopTimeOut = function () {
    if (this._timeOutInterval != null) {
        cc.log("---------------stop time -----------------");
        clearTimeout(this._timeOutInterval);
        this._timeOutInterval = null;
    }
};

module.exports = function(){
    return new PollingCmd();
};


