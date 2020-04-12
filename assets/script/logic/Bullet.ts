import BoxBase from "./BoxBase";
import MapMainView from "../modules/map/MapMainView";
import UIBullet from "../modules/map/UIBullet";
import MapProxy from "../modules/map/MapProxy";
import PoolMgr from "../manager/PoolMgr";
import MapUtils from "./MapUtils";
import BulletMgr from "../manager/BulletMgr";

export default class Bullet extends BoxBase {    
    moveSpeed: number = 720;    //1秒
    mapMainView: MapMainView = null;    //地图组件
    ui:UIBullet = null;
    bulletId:number = 100101;
    data:any = {};
    viewPos:cc.Vec2 = cc.v2(0,0);
    shooter:BoxBase = null;
    target:BoxBase = null;

    static _idIndex = 1;
    _pb_tag:string = PoolMgr.POOL_TAG_ENUM.BULLET;
    constructor(mapMainView: MapMainView,shooter:BoxBase,target:BoxBase, viewPos:cc.Vec2,bulletData:any) {
        super()
        this.shooter = shooter;
        this.target = target;
        this.viewPos = viewPos;
        this.data = bulletData;
        this.mapMainView = mapMainView;    
        this.id = Bullet._idIndex;
        Bullet._idIndex += 1;
    }

    initUI(parent:cc.Node,cb?:Function) {
        //实现基本的子弹逻辑
        let pool = PoolMgr.getInstance().getPool(this._pb_tag);
        let node = pool.getItem(this);
        node.parent = parent;
        node.position = this.viewPos;
        this.node = node;
        this.ui = this.node.getComponent(UIBullet);
        if(!!cb) cb(this);        
    }

    clear(){
        BulletMgr.getInstance().clear(this.id);       
    }

    checkTargetIntoRange(target:BoxBase){
        if(target){
            return MapUtils.getUILineDis(target.getUIPos(),this.getUIPos()) < this.range * MapUtils.perDis;
        }
        return false;
    }

    update(dt:number){
        var moveDis = this.moveSpeed * dt;
        var dirV2 = this.target.getUIPos().sub(this.getUIPos());
        dirV2.normalizeSelf();
        dirV2.scaleSelf(cc.v2(moveDis,moveDis));
        // todo 角度。
        this.node.x += dirV2.x;
        this.node.y += dirV2.y;
        if(this.checkTargetIntoRange(this.target)){
            this.target.onBeAtked(this.atk,this);
            this.clear()
        }
    }

}