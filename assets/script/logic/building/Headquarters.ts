import MapMainView from "../../modules/map/MapMainView";
import Building from "../Building";
import UIBuilding from "../../modules/map/UIBuilding";
import { serialize } from "../../utils/Decorator";
export default class Headquarters extends Building {
    ui:UIBuilding = null;
    @serialize()
    area:cc.Vec2[] = [cc.v2(0,0),cc.v2(1,0),cc.v2(0,1),cc.v2(-1,0)]
    @serialize()
    static _idIndex = 1;
    _pb_url:string = "prefab/map/building/headquarters";
    constructor(mapMainView: MapMainView) {
        super(mapMainView)
    }
}