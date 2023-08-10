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
    bulletMgr:BulletMgr = null;

    static _idIndex = 1;
    static _atkRange = 32;//子弹的命中距离。真实尺寸
    _pb_tag:string = PoolMgr.POOL_TAG_ENUM.BULLET;
    constructor(mapMainView: MapMainView,shooter:BoxBase,target:BoxBase, viewPos:cc.Vec2,bulletData:any) {
        super(Bullet)
        this.shooter = shooter;
        this.target = target;
        this.viewPos = viewPos;
        this.data = bulletData;
        this.mapMainView = mapMainView;    
        this.idx = Bullet._idIndex;
        Bullet._idIndex += 1;
    }

    initUI(parent:cc.Node,cb?:Function) {
        //不能直接引用TowerMgr，会导致交叉引用的问题。
        this.bulletMgr = this.mapMainView.bulletMgr;  
        //实现基本的子弹逻辑
        let pool = PoolMgr.getInstance(PoolMgr).getPool(this._pb_tag);
        let node = pool.getItem(this);
        node.parent = parent;
        node.position = this.viewPos;
        this.node = node;
        this.ui = this.node.getComponent(UIBullet);
        if(!!cb) cb(this);        
    }

    clear(){
        this.bulletMgr.clear(this.idx);       
    }

    checkTargetIntoRange(target:BoxBase){
        if(target && target.isDestroy == false){
            var distance = MapUtils.getUILineDis(target.getUIPos(),this.getUIPos())
            return  distance < Bullet._atkRange;
        }else{
            this.clear()
        }
        return false;
    }

    destory(){
        //--todo表现
        super.destory();
        if(this.node){
            this.node.removeFromParent();
        }        
    }

    getDamage(){
        var damage = baseDamage;
        var baseDamage = this.data.power;
        var shooterAct = this.shooter.atk;
        damage = baseDamage + shooterAct;   
        return damage;
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
            this.target.onBeAtked(this.getDamage(),this.shooter);
            this.clear()
        }
    }

}