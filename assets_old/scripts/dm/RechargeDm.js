/**
 * Created by Administrator on 2017/12/12.
 */
// 充值相关的数据。
var RechargeDm = function () {
    this.reset();
};

/*item.id = shop_data.getGoodsId();
 item.price = shop_data.getCost();
 item.num = shop_data.getDiamond();
 item.new = shop_data.getIsNew();
 item.pic = shop_data.getIcon();
 item.plistPath = 'atlas/shopPic';
 item.discount = shop_data.getDiscount();
 item.sendNum = shop_data.getSendNum();
 item.desc = shop_data.getDesc();*/
RechargeDm.prototype.reset = function () {
    this.rechargeMap = null;
    this.rechargeList = null;
};

RechargeDm.prototype.getDataByItemId = function (item_id) {
    if (this.rechargeMap) {
        return this.rechargeMap[item_id];
    } else {
        return null;
    }

};

RechargeDm.prototype.getRechargeList = function (cb) {
    if (this.rechargeList) {
        if (!!cb) cb(this.rechargeList);
        return;
    }
    global.app.httpMgr.sendMessage(global.app.httpMgr.CMD.PHP_CMD_SHOPPING_LIST, {}, function (shopList) {
        if (!!cb) cb(shopList);
    });
};

RechargeDm.prototype.updateRechargeInfo = function (shopList) {
    this.rechargeList = shopList;
    this.rechargeMap = {}
    for (var i in shopList) {
        var item_data = shopList[i];
        this.rechargeMap[item_data.id] = item_data;
    }
};


module.exports = function () {
    return new RechargeDm();
};