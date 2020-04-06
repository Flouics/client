import MapMainView from "../../modules/map/MapMainView";
import Building from "../Building";

export default class Tower extends Building {
    static _idIndex = 1;
    constructor(mapMainView: MapMainView) {
        super(mapMainView)
        this.init()
    } 
    init(){
        this.atk = 1;
        //准备写子弹的逻辑
    }

    genBullet(){

    }
}