
import MapMainView from "../modules/map/MapMainView";
import BaseClass from "../zero/BaseClass";
import { serialize } from "../utils/Decorator";
import Mine from "../logic/Mine";

// 怪物管理器
export default class MineMgr extends BaseClass{
    @serialize()
    mineMap:{[key:number]:Mine} = {};
    _mapMainView:MapMainView = null;
    _nodeRoot:Node = null;

    init(mapMainView:MapMainView){
        this._mapMainView = mapMainView;
        this._nodeRoot = mapMainView.nd_buildingRoot;
        this.reset()
    }
    
    initSchedule(){
        this._mapMainView.unschedule(this.update.bind(this));
        this._mapMainView.schedule(this.update.bind(this),0.1);
    }

    reset(){
        for (const key in this.mineMap) {
            if (this.mineMap.hasOwnProperty(key)) {
                this.mineMap[key].destory()                
            }
        }
        this.mineMap = {}
        this.initSchedule();
    }

    loadJson(mineMapJson:any){
        for (const key in mineMapJson) {
            let mine = new Mine(this._mapMainView);
            mine.unserialize(mineMapJson[key]);
            this.mineMap[mine.id] = mine;
        }
    }

    create(x: number = 0, y: number = 0,mineId:number,task?:Function){
        let mine = new Mine(this._mapMainView,mineId, x, y);
        mine.initUI(this._nodeRoot,()=>{
            if(!!task) task(mine);    
        });
        mine.initData();
        this.mineMap[mine.id] = mine;        
        return mine;
    }
    
    refresh(){
        for (const key in this.mineMap) {
            if (this.mineMap.hasOwnProperty(key)) {
                this.mineMap[key].initUI(this._nodeRoot);                
            }
        }
    }

    clear(id:number){
        let obj = this.mineMap[id];
        if(obj){
            obj.destory();
        }
        delete this.mineMap[id]
    }

    update(){
        for (const key in this.mineMap) {
            if (this.mineMap.hasOwnProperty(key)) {
                this.mineMap[key].update()                
            }
        }
    }
}