import PoolMgr from "../../manager/PoolMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MapPrefab extends cc.Component {
    @property(cc.Prefab)
    pb_monster:cc.Prefab = null;
    @property(cc.Prefab)
    pb_hero:cc.Prefab = null;
    @property(cc.Prefab)
    pb_bullet:cc.Prefab = null;
    @property(cc.Prefab)
    pb_item:cc.Prefab = null;

    onLoad(){
        PoolMgr.getInstance(PoolMgr).genPool(PoolMgr.POOL_TAG_ENUM.HERO,this.pb_hero,"UIHero");
        PoolMgr.getInstance(PoolMgr).genPool(PoolMgr.POOL_TAG_ENUM.MONSTER,this.pb_monster,"UIMonster");
        PoolMgr.getInstance(PoolMgr).genPool(PoolMgr.POOL_TAG_ENUM.BULLET,this.pb_bullet,"UIBullet");
        PoolMgr.getInstance(PoolMgr).genPool(PoolMgr.POOL_TAG_ENUM.ITEM,this.pb_item,"UIItem");
    }
}
