import MapMainView from "../modules/map/MapMainView";
import MapUtils from "./MapUtils";
import UIHero from "../modules/map/UIHero";
import Live from "./Live";
import HeroMgr from "../manager/HeroMgr";
export default class Hero extends Live {
    moveSpeed: number = 180;    //1秒
    static _idIndex = 1000;
    _pb_url:string = "prefab/map/hero";
    constructor(mapMainView: MapMainView, x: number = 0, y: number = 0) {
        super(mapMainView,x,y)
        this.id = Hero._idIndex;
        Hero._idIndex += 1;
    }
    clear(){
        HeroMgr.getInstance().clear(this.id)
    }
}