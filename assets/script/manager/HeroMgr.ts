import Hero from "../logic/Hero";
import MapMainView from "../modules/map/MapMainView";


// 怪物管理器
export default class HeroMgr {
    heroMap:Hero[] = [];
    _mapMainView:MapMainView = null;
    _nodeRoot:cc.Node = null;
    
    // 单例处理
    static _instance: HeroMgr = null;
    constructor() {
        HeroMgr._instance = this;
    }
    static getInstance():HeroMgr {
        if (HeroMgr._instance) {
            return HeroMgr._instance
        } else {
            let instance = new HeroMgr();
            return instance
        }
    }
    static get obj() {
        return HeroMgr.getInstance()
    }
    init(mapMainView:MapMainView){
        this._mapMainView = mapMainView;
        this._nodeRoot = mapMainView.nd_heroRoot;
        this.reset()
    }

    reset(){
        this.heroMap.forEach((monster)=>{
            monster.die()
        })
        this.heroMap = []
    }

    create( x: number = 0, y: number = 0){
        let hero = new Hero(this._mapMainView,x,y)
        hero.initUI(this._nodeRoot)
        this.heroMap[hero.id] = hero;        
        return hero;
    }

    clear(id:number){
        let obj = this.heroMap[id];
        if(obj){
            obj.die();
        }
        delete this.heroMap[id]
    }
}