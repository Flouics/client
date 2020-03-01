/*
 * 用户数据
 */


var UserData = function () {
    this.aid = 0;
    this.uid = "";
    this.gender = 0;    //性别
    this.gold = 0;      //金币
    this.diamond = 0;   //钻石
    this.name = "";     //名字
    this.handUrl = "";  //头像
    this.level = 1;     //等级
    this.exp = 0;       //经验
    this.score = "";
    this.battle_counts = 0;       // 总场次 //todo ddz 结算时需要刷新场次和概率。
    this.battle_win = 0;       // 胜利场次
    this.continue_win = 0;       // 连胜
    this.continue_login = 0;    // 连续登陆奖励 格式YYYYMMDDX01  后两位表示连续的天数，X表示是否已经领取。
    this.record_check_in = 0;    // 签到领奖记录，二进制
    this.last_check_day = "";   //上次签到日期 YYYYMMDD
    this.leiji_gift_record = 0; //累计签到领奖记录，二进制
    this.gift_per_day_date = 0;    // 每天赠送啪啪豆的日期和次数 格式YYYYMMDD01 后两位表示多少次
    this.item_list = [];    //身上背包物品
    this.status = 0;        //2进制枚举  1超级加倍  2记牌器
    this.game_status = 0;        //2进制枚举  1超级加倍  2记牌器 //用于解决单场记牌器的问题
    this.reward_flag = 0;        //2进制枚举  1是否充值过  2是否已领取首充奖励  4是否已收藏 8 是否领取收藏奖励。
    this.client_sign = 0;       //客户端自己定义，建议二进制枚举

    this.ip = "";
    this.location = "";
    this.serverLocation = "";
    this.currentGameId = 0;

    // 重连数据
    this.isReconnect = false;
    //socket信息
    this.roomId = "";
    this.gameServerIp = "";
    this.gameServerPort = 0;
    this.current_table_level = 0;//目前当前所在的场次。没办法只能在自己临时保存下。

    this.parentId = ""; //代理，现在用不到。
    this.bindCode = "";

    this.inviteUid = "";  //提供分享链接的玩家uid
    this.skip_ad_times = 0; //跳过广告的次数。

    //残局模式星星获取情况
    this.LocalGameStarInfo = [];


    /*
     * 设备ID
     * 微信登录用
     */
    this.deviceId = "aa.bb.cc.ddc"
};


UserData.prototype.getUserId = function () {
    return this.uid;
};

UserData.prototype.getMoney = function () {
    return this.gold;
};
UserData.prototype.setReconnectData = function (state, roomid, ip, port) {
    this.isReconnect = state;
    //todo ddz
    this.setSocketData(roomid, ip, port);
};

UserData.prototype.setSocketData = function (roomid, ip, port) {
    this.roomId = roomid;
    this.gameServerIp = ip;
    this.gameServerPort = port;
};

UserData.prototype.getSocketData = function () {
    return [this.roomId, this.gameServerIp, this.gameServerPort];
};

UserData.prototype.setServerLocation = function (data) {
    this.serverLocation = data;
};

UserData.prototype.addMoney = function (money) {
    this.gold += money;
};

UserData.prototype.setBalance = function (info) {
    for (var key in info) {
        this[key] = info[key];
    }
};

UserData.prototype.isBindParent = function () {
    return (this.parentId) ? true : false;
};

UserData.prototype.setInviteUid = function (data) {
    this.inviteUid = data;
};

UserData.prototype.setParentId = function (data) {
    this.parentId = data;
};

UserData.prototype.setContinueLogin = function (data) {
    this.continue_login = data;
};

UserData.prototype.setRecordCheckIn = function (data) {
    this.record_check_in = data;
};


UserData.prototype.setLastCheckin = function (data) {
    this.last_check_day = data;
};

UserData.prototype.setLeijiGiftRecord = function (data) {
    this.leiji_gift_record = data;
};

UserData.prototype.getHostInfoStr = function () {
    var info = {};
    info.name = encodeURI(this.name);
    info.id = this.aid;
    info.handUrl = this.handUrl;

    return info;
};

UserData.prototype.getUserInfo = function () {
    var info = {};
    info.aid = this.aid;
    info.uid = this.uid;
    info.gender = this.gender;
    info.gold = this.gold;
    info.diamond = this.diamond;
    info.score = this.score;
    info.name = this.name;
    info.handUrl = this.handUrl;
    info.ip = this.ip;
    info.location = this.location;
    info.level = this.level;
    info.exp = this.exp;

    return info;
};


UserData.prototype.initUserInfo = function (data) {
    this.aid = data.getAid();
    this.gender = data.getGender();
    this.gold = parseInt(data.getGold());
    this.diamond = parseInt(data.getDiamond());
    this.level = parseInt(data.getLevel());
    this.exp = data.getExp();
    this.score = data.getScore();
    this.name = data.getUnick();
    this.handUrl = data.getAvatarUrl();
    this.registered = data.getRegistered();
    this.olKey = data.getOlkey();
    this.uid = data.getUserId();
    this.parentId = data.getParentId();
    this.shareIcon = data.getShareIco();
    this.ip = data.getIp();
};

UserData.prototype.isSelf = function (uid) {
    return this.uid == uid;
};

UserData.prototype.onUserExitRoom = function (info) {
    if (this.isSelf(info.uid) && !info.is_return_dispatch) {
        this.current_table_level = 0;
        this.setSocketData("", "", 0)
    }
};

UserData.prototype.onRoundCost = function (info) {
    //this.gold = info.left_gold;
};

UserData.prototype.onAllUserBalance = function (info) {
    //this.gold = info.left_gold;
    for (var i in info.player_data_list) {
        var data = info.player_data_list[i];
        if (this.isSelf(data.uid)) {
            this.gold = data.gold;
            this.exp = data.exp;
            this.level = data.level;
            this.status = data.status;
            this.item_list = data.item_list;
        }
    }
};

UserData.prototype.onCheckUserBalance = function (info) {
    if (this.uid == info.uid) {
        this.gold = info.gold;
        this.status = info.status;


        /*    this.diamond = info.diamond;
         this.level = info.level;
         this.exp = info.exp;
         this.battle_counts = info.battle_counts;
         this.battle_win = info.battle_win;
         this.continue_win = info.continue_win;
         this.item_list = info.item_list;*/
    }

};

UserData.prototype.onGetGiftPerDay = function (info) {
    if (this.uid == info.uid) {
        this.gold = info.gold;
        this.gift_per_day_date = info.gift_per_day_date;
    }
};

//回合结算刷新数据层：
UserData.prototype.onRoundResult = function (userInfo) {
    if (userInfo && this.isSelf(userInfo.uid)) {
        this.gold = userInfo.gold;
        this.exp = userInfo.exp;
        this.level = userInfo.level;
    }
    this.game_status = 0;
};

UserData.prototype.isMatchGame = function (game_id) {
    if (game_id == undefined)  game_id = this.currentGameId;
    return game_id >= global.app.config.GameId_hlddz_match || game.challengeDm.match_id > 0
};

UserData.prototype.isIntable = function () {
    return this.roomId !== "";
};

UserData.prototype.onUseCardRecord = function (data) {
    if (data.item_type > 0) {
        var item_type = data.item_type;
        var item_count = data.item_count;
        this.updateItemData(item_type, item_count);
    }
    this.game_status = this.game_status | 2;
};

UserData.prototype.updateItemData = function (item_type, item_count) {
    for (var i in this.item_list) {
        var item_data = this.item_list[i];
        if (item_data.type == item_type) {
            item_data.count = item_count;
            break;
        }
    }
};

UserData.prototype.hasItem = function (item_type, count) {
    if (count == undefined)  count = 1;
    //todo map有时间在做
    for (var i in this.item_list) {
        var item_data = this.item_list[i];
        if (item_data.type == item_type) {
            if (item_data.count < count) {
                return false;
            } else {
                return true;
            }
        }
    }
    return false;
};

//是否可以超级加倍
UserData.prototype.hasSuperDoubleStatus = function () {
    return ((this.status | this.game_status) & 1) == 1;
};

//是否可以使用记牌器
UserData.prototype.hasRecordStatus = function () {
    return ((this.status | this.game_status) & 2) == 2;
};

//是否有开启抵押条
UserData.prototype.hasMortgageStatus = function () {
    return (this.status & 64) == 64;
};

/*
 * 设备ID
 * mahjong微信登录用
 */
UserData.prototype.getDeviceId = function () {
    return this.deviceId;
};


module.exports = function () {
    return new UserData();
};
