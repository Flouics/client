/*
 * 用户数据
 */
var Proxy = function () {
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



Proxy.prototype.init = function () {
    this.attrs = {}
};


module.exports = function () {
    return new Proxy();
};
