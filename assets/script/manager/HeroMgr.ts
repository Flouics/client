import Hero from "../logic/Hero";
import MapMainView from "../modules/map/MapMainView";
import BaseClass from "../zero/BaseClass";
import { serialize } from "../utils/Decorator";


// 角色管理器
export default class HeroMgr extends BaseClass{
    @serialize()
    heroMap:{[key:number]:Hero} = {};
    _mapMainView:MapMainView = null;
    _nodeRoot:cc.Node = null;
    _scheduleId:number  = null;    
    
    init(mapMainView:MapMainView){
        this._mapMainView = mapMainView;
        this._nodeRoot = mapMainView.nd_heroRoot;
        this.reset()
    }

    reset(){
        for (const key in this.heroMap) {
            if (this.heroMap.hasOwnProperty(key)) {
                this.heroMap[key].destory()                
            }
        }
        this.heroMap = {};
        this.initSchedule();
    }

    initSchedule(){
        this._mapMainView.unschedule(this.update.bind(this));
        this._mapMainView.schedule(this.update.bind(this),0.1);
    }

    create( x: number = 0, y: number = 0){
        let hero = new Hero(this._mapMainView,x,y)
        hero.initUI(this._nodeRoot)
        this.heroMap[hero.idx] = hero;        
        return hero;
    }

    refresh(){
        for (const key in this.heroMap) {
            if (this.heroMap.hasOwnProperty(key)) {
                this.heroMap[key].initUI(this._nodeRoot);                
            }
        }
    }

    clear(idx:number){
        let obj = this.heroMap[idx];
        if(obj){
            obj.destory();
        }
        delete this.heroMap[idx]
    }
    
    update(){
        for (const key in this.heroMap) {
            if (this.heroMap.hasOwnProperty(key)) {
                this.heroMap[key].update()                
            }
        }
    }
}