import MapMainView from "../../modules/map/MapMainView";
import MapUtils from "../MapUtils";
import UITower_1 from "../../modules/map/tower/UITower_1";
import Building from "../Building";

export default class Headquarters extends Building {
    ui:UITower_1 = null
    area:cc.Vec2[] = [cc.v2(0,0),cc.v2(1,0),cc.v2(0,1),cc.v2(-1,0)]
    static _idIndex = 1;
    _pb_url:string = "prefab/map/building/headquarters";
    constructor(mapMainView: MapMainView) {
        super(mapMainView)
    }
}