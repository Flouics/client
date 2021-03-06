/**
 * Created by Administrator on 2017/8/1.
 * 时间的处理函数。
 */

var timeNumFormatString = function (num) {
    if (num < 10) {
        return '0' + num;
    } else {
        return '' + num;
    }
};

var TimeMgr = function () {
    this._server_time_diff = 0;
    this.lunar = this.lunar || require('Lunar')();
    this.DAY_DESC = ['日', '一', '二', '三', '四', '五', '六'];
};

//服务端和客户端时间差
TimeMgr.prototype.updateServerTimeDiff = function (server_timestamp) {
    if (!server_timestamp) return;
    var now_time = new Date().getTime();
    this._server_time_diff = now_time - server_timestamp;
};

//服务端时间转为客户端时间
TimeMgr.prototype.getClientTimeFromServerTime = function (server_timestamp) {
    if (!server_timestamp) return 0;
    return server_timestamp + this._server_time_diff;
};

//客户端时间转为服务端时间
TimeMgr.prototype.getServerTimeFromClientTime = function (client_timestamp) {
    if (client_timestamp == undefined) client_timestamp = new Date().getTime();
    return client_timestamp - this._server_time_diff;
};

//格式化时间。
TimeMgr.prototype.formatTimeHHMMSS = function (timestamp) {
    var date = new Date(timestamp);
    var retArray = [];
    retArray.push(timeNumFormatString(date.getHours()));
    retArray.push(timeNumFormatString(date.getMinutes()));
    retArray.push(timeNumFormatString(date.getSeconds()));
    return retArray.join(':')
};

TimeMgr.prototype.formatTimeHHMM = function (timestamp) {
    var date = new Date(timestamp);
    var retArray = [];
    retArray.push(timeNumFormatString(date.getHours()));
    retArray.push(timeNumFormatString(date.getMinutes()));
    return retArray.join(':')
};

//格式化时间。
TimeMgr.prototype.timeNumFormatString = function (num) {
    return timeNumFormatString(num)
};

TimeMgr.prototype.getYearMonthDay = function () {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var today = year * 10000 + month * 100 + day;
    return today;
};

TimeMgr.prototype.getYearMonthDayBySplit = function (split_str, time_stamp) {
    var date = time_stamp == undefined ? new Date() : new Date(time_stamp);
    var year = date.getFullYear();
    var month = timeNumFormatString(date.getMonth() + 1);
    var day = timeNumFormatString(date.getDate());
    return [year, month, day].join(split_str);
};

/**
 *
 * @param time_stamp
 * @reutn {object}         {
            tg: tgString.charAt((cYear - 4) % 10),      //年干
            dz: dzString.charAt((cYear - 4) % 12),      //年支
            sx: sx.charAt((cYear - 4) % 12),            //生肖
            month: monString.charAt(cMonth - 1),        //月
            sx_index: (cYear - 4) % 12,                 //生肖索引
            is_leap: cMonth < 1,                    //是否闰月
            month:''                //月
            hour:''                 //时辰
        };
 */
TimeMgr.prototype.getLunar = function (time_stamp) {
    return this.lunar.getLunar(time_stamp);
};

// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
TimeMgr.prototype.format = function (fmt, time_stamp) {
//author: meizz
    var d = time_stamp == undefined ? new Date() : new Date(time_stamp);
    var o = {
        "M+": d.getMonth() + 1,                 //月份
        "d+": d.getDate(),                    //日
        "h+": d.getHours(),                   //小时
        "m+": d.getMinutes(),                 //分
        "s+": d.getSeconds(),                 //秒
        "q+": Math.floor((d.getMonth() + 3) / 3), //季度
        "S": d.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

//获取每月份的日期数
TimeMgr.prototype.getMonthDay = function (year, month) {
    var month_index = (month + 11) % 12;
    var month_day_enum = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ((year % 100 != 0 && year % 4 == 0) || year % 400 == 0) {
        month_day_enum[1] = 29;
    }
    return month_day_enum[month_index];
},

module.exports = function () {
    return new TimeMgr();
};