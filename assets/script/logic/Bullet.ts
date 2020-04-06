import BoxBase from "./BoxBase";
import MapMainView from "../modules/map/MapMainView";
import UIBullet from "../modules/map/UIBullet";
import MapProxy from "../modules/map/MapProxy";
import PoolMgr from "../manager/PoolMgr";
import MapUtils from "./MapUtils";

export default class Bullet extends BoxBase {
    
    node: cc.Node = null;
    floor_1: number = 0;   //第一层，基础层
    mapMainView: MapMainView = null;    //地图组件
    ui:UIBullet = null;
    static _idIndex = 1;
    _pb_tag:string = PoolMgr.POOL_TAG_ENUM.BULLET;
    constructor(mapMainView: MapMainView, x: number = 0, y: number = 0) {
        super()
        this.x = x;
        this.y = y;
        this.mapMainView = mapMainView;    
        this.id = Bullet._idIndex;
        Bullet._idIndex += 1;
    }

    initUI(parent:cc.Node,cb?:Function) {
        let pool = PoolMgr.getInstance().getPool(this._pb_tag);
        let node = pool.getItem(this);
        let viewPos = MapUtils.getViewPosByTilePos(this.pos);
        node.parent = parent;
        node.position = viewPos;
        this.node = node;
        this.ui = this.node.getComponent(UIBullet);
        if(!!cb) cb(this);
    }

}