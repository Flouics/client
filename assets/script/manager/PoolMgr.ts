/**
 * Created by Administrator on 2017/7/30.
 * 所有需要用cc.NodePool缓存处理的管理池
 */

class Pool {
    _scriptName: string;
    _pb_item: any;
    buffMinCount: number = 5;
    buffMaxCount: number = 10;
    _pool: cc.NodePool;
    constructor(pb_item: any, scriptName: string, buffMinCount: number = 5, buffMaxCount: number = 10) {
        if (!pb_item) {
            return;
        }
        this._scriptName = scriptName;
        this._pb_item = pb_item;
        this.buffMinCount = buffMinCount;
        this.buffMaxCount = buffMaxCount;
        this._pool = new cc.NodePool(scriptName);
    }

    initialize() {
        for (var i = 0; i < this.buffMinCount; i++) {
            this._pool.put(cc.instantiate(this._pb_item));
        }
    };

    getItem(data: any) {
        //有奇怪的BUG。
        if (this._pool.size() < this.buffMinCount) {
            this._pool.put(cc.instantiate(this._pb_item));
        }
        var item = this._pool.get(data);
        (item as any).itemPool = this;
        return item;
    };

    recycleItem(item: cc.Node) {
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

    getItemScriptComp(data: any) {
        var item = this.getItem(data);
        return item.getComponent(this._scriptName);
    };

    recycleItemScriptComp(itemScriptComp: any) {
        if (!itemScriptComp) {
            return;
        }
        return this.recycleItem(itemScriptComp.node);
    };

};

var POOL_TAG_ENUM = {
    MONSTER:"monster",
    HERO:"hero",
    BULLET:"bullet",
}

export default class PoolMgr {
    poolMap:{[key:string]:Pool} = {};
    static POOL_TAG_ENUM = POOL_TAG_ENUM;

    // 单例处理
    static _instance: PoolMgr = null;
    constructor() {
        PoolMgr._instance = this;
    }
    static getInstance():PoolMgr {
        if (PoolMgr._instance) {
            return PoolMgr._instance
        } else {
            let instance = new PoolMgr();
            return instance
        }
    }
    static get obj() {
        return PoolMgr.getInstance()
    }

    //生成一个缓冲池
    genPool(tag: string, pb_item: any, scriptName?: string, buffMinCount?: number, buffMaxCount?: number) {
        var pool = this.poolMap[tag];
        if (!pool) {
            var pool = new Pool(pb_item, scriptName, buffMinCount, buffMaxCount);
            this.poolMap[tag] = pool;
            pool.initialize()
        }
        return pool;
    };

    getPool(tag:string){
        var pool = this.poolMap[tag];
        return pool;
    }

    clearPool(tag:string){
        delete this.poolMap[tag]
    }
};