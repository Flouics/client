import MapMainView from "../../modules/map/MapMainView";
import UITower_1 from "../../modules/map/tower/UITower_1";
import Building from "../Building";

export default class Tower_1 extends Tower {
    ui:UITower_1 = null
    static _idIndex = 1;
    _pb_url:string = "prefab/map/tower/tower_1";
    constructor(mapMainView: MapMainView) {
        super(mapMainView)
        this.init()
    } 
    init(){
        this.atk = 1;
    }
}