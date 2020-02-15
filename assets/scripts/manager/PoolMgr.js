/**
 * Created by Administrator on 2017/7/30.
 * 所有需要用cc.NodePool缓存处理的管理池
 */

var Pool = function (pb_item, scriptName, buffMinCount, buffMaxCount) {
    if (!pb_item) {
        return;
    }
    this._scriptName = scriptName;
    this._pb_item = pb_item;
    this.buffMinCount = buffMinCount || 5;
    this.buffMaxCount = buffMaxCount || 10;
    this._pool = new cc.NodePool(scriptName);
};

Pool.prototype.initialize = function () {
    for (var i = 0; i < this.buffMinCount; i++) {
        this._pool.put(cc.instantiate(this._pb_item));
    }
};

Pool.prototype.getItem = function (data) {
    //有奇怪的BUG。
    if (this._pool.size() < this.buffMinCount) {
        this._pool.put(cc.instantiate(this._pb_item));
    }
    var item = this._pool.get(data);
    item.rootPool = this;
    return item;
};

Pool.prototype.recycleItem = function (item) {
    if (!item) {
        return;
    }
    if (this._scriptName != '' && !item.getComponent(this._scriptName)) {
        cc.warn('item is not pool member', item.name);
        item.destroy();
        return;
    }

    if (this._pool.size() < this.buffMaxCount) {
        this._pool.put(item);
    } else {
        item.destroy();
    }
    return true;
};

Pool.prototype.getItemScriptComp = function (data) {
    var item = this.getItem(data);
    return item.getComponent(this._scriptName);
};

Pool.prototype.recycleItemScriptComp = function (itemScriptComp) {
    if (!itemScriptComp) {
        return;
    }
    return this.recycleItem(itemScriptComp.node);
};

var PoolMgr = function () {
    this.poolList = {};
};
//生成一个缓冲池
PoolMgr.prototype.genPool = function (tag, pb_item, scriptName, buffMinCount, buffMaxCount) {
    var pool = this.poolList[tag];
    if (!pool) {
        var pool = new Pool(pb_item, scriptName, buffMinCount, buffMaxCount);
        this.poolList[tag] = pool;
    }
    return pool;
};

module.exports = function () {
    return new PoolMgr();
};