import PoolMgr from "../../manager/PoolMgr";

import { _decorator, Component, Prefab} from 'cc';
const {ccclass, property} = _decorator;

@ccclass("MapPrefab")
export default class MapPrefab extends Component {
    @property(Prefab)
    pb_monster:Prefab = null;
    @property(Prefab)
    pb_hero:Prefab = null;
    @property(Prefab)
    pb_bullet:Prefab = null;
    @property(Prefab)
    pb_item:Prefab = null;

    onLoad(){
        PoolMgr.getInstance(PoolMgr).genPool(PoolMgr.POOL_TAG_ENUM.HERO,this.pb_hero,"UIHero");
        PoolMgr.getInstance(PoolMgr).genPool(PoolMgr.POOL_TAG_ENUM.MONSTER,this.pb_monster,"UIMonster");
        PoolMgr.getInstance(PoolMgr).genPool(PoolMgr.POOL_TAG_ENUM.BULLET,this.pb_bullet,"UIBullet");
        PoolMgr.getInstance(PoolMgr).genPool(PoolMgr.POOL_TAG_ENUM.ITEM,this.pb_item,"UIItem");
    }
}
