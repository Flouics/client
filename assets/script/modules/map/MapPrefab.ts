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
    onLoad(){
        PoolMgr.getInstance().genPool(PoolMgr.POOL_TAG_ENUM.HERO,this.pb_hero,"UIHero");
        PoolMgr.getInstance().genPool(PoolMgr.POOL_TAG_ENUM.MONSTER,this.pb_monster,"UIMonster");
        PoolMgr.getInstance().genPool(PoolMgr.POOL_TAG_ENUM.BULLET,this.pb_bullet,"UIBullet");
    }
}
