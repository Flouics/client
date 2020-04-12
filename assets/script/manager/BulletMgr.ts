
import Monster from "../logic/Monster";
import MapMainView from "../modules/map/MapMainView";
import AsyncTaskMgr from "./AsyncTaskMgr";
import Bullet from "../logic/Bullet";
import Tower from "../logic/tower/Tower";
import BoxBase from "../logic/BoxBase";

// 怪物管理器
export default class BulletMgr {
    bulletMap:{[key:number]:Bullet} = {};
    _bulletTypeClassMap = {};
    _mapMainView:MapMainView = null;
    _nodeRoot:cc.Node = null;
    lastScheduleTime = null;
    
    // 单例处理
    static _instance: BulletMgr = null;
    constructor() {
        BulletMgr._instance = this;
    }
    static getInstance():BulletMgr {
        if (BulletMgr._instance) {
            return BulletMgr._instance
        } else {
            let instance = new BulletMgr();
            return instance
        }
    }
    static get obj() {
        return BulletMgr.getInstance()
    }
    
    initSchedule(){
        this.lastScheduleTime = new Date().getTime();
        this._mapMainView.unschedule(this.update.bind(this));
        this._mapMainView.schedule(this.update.bind(this),0.05);
    }

    init(mapMainView:MapMainView){
        this._mapMainView = mapMainView;
        this._nodeRoot = mapMainView.nd_masterRoot;
        this.reset()
    }

    initBulletTypeMap(){
        this._bulletTypeClassMap[1001] = Bullet;
    }

    getBulletClass(type:number){
        return this._bulletTypeClassMap[type];
    }

    reset(){
        this.initSchedule()
    }

    create(shooter:BoxBase,target:BoxBase,fromViewPos:cc.Vec2,data:any,cb?:Function){    
        var BulletClass = this.getBulletClass(data.type);
        if (!BulletClass) {
            return null;
        }    
        let bullet = new BulletClass(this._mapMainView,shooter,target,fromViewPos,data);
        bullet.initUI(this._nodeRoot,()=>{
            if(!!cb) cb(bullet);    
        });
        this.bulletMap[bullet.id] = bullet;        
        return bullet;
    }

    clear(id:number){
        let obj = this.bulletMap[id];
        if(obj){
            obj.destory();
        }
        delete this.bulletMap[id]
    }

    update(){
        var nowTime = new Date().getTime();
        var dt = nowTime - this.lastScheduleTime;
        this.lastScheduleTime = nowTime;
        for (const key in this.bulletMap) {
            if (this.bulletMap.hasOwnProperty(key)) {
                this.bulletMap[key].update(dt/1000) //保持和原来格式不变。                
            }
        }
    }
}