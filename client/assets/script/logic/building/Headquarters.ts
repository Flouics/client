import MapMainView from "../../modules/map/MapMainView";
import Building from "../Building";
import UIBuilding from "../../modules/map/UIBuilding";
import { serialize } from "../../utils/Decorator";
import { v2, Vec2, Node, Tween} from "cc";
export default class Headquarters extends Building {
    ui:UIBuilding = null;
    @serialize()
    area:Vec2[] = [v2(0,0),v2(1,0),v2(0,1),v2(-1,0)]
    @serialize()
    static _idIndex = 1;
    @serialize()
    life:number = 10000;
    lifeMax: number = 10000;
    _pb_url:string = "prefab/map/building/headquarters";
    _beAtkedAction:Tween<Node> = null;
    constructor(mapMainView: MapMainView) {
        super(mapMainView);
    }
}