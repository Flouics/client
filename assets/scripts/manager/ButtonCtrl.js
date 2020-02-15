/***
 * button controller
 ***/

var ButtonCtr = function () {
    this.objList = [];
    this.objTimeList = [];
};

ButtonCtr.prototype.setCurObj = function (obj, time) {
    this.objList.push(obj);
    this.objTimeList.push(time);
    return true;
};

ButtonCtr.prototype.changeObjTime = function (index, time) {
    this.objTimeList[index] = time;
    return true;
};

ButtonCtr.prototype.stopAction = function () {
    cc.log("has stoped");
    return false;
};

ButtonCtr.prototype.isClickToFast = function (obj, time) {
    var list1 = this.objList;
    var hasObj = false;
    var hasIndex = null;
    time = (typeof time === "undefined") ? 1000 : time;
    for (var i = 0; i < list1.length; i++) {
        if (list1[i] == obj) {
            hasObj = true;
            hasIndex = i;
        }

    }

    var result = false;
    var timestamp = new Date().getTime();
    if (hasObj) {
        var timeDiff = timestamp - this.objTimeList[hasIndex];
        if (timeDiff >= time) {
            result = this.changeObjTime(hasIndex, timestamp);
        } else {
            result = this.stopAction();
        }

    } else {
        result = this.setCurObj(obj, timestamp);
    }


    return result;
};

module.exports = function () {
    return new ButtonCtr();
};