import MapUtils from "./MapUtils";
import { serialize } from "../utils/Decorator";
import BaseUI from "../zero/BaseUI";
import BaseClass from "../zero/BaseClass";

export default class BoxBase extends BaseClass {
    @serialize()
    id: number = 0;
    @serialize()
    x: number = 0;  //瓦片地图坐标
    @serialize()
    y: number = 0;  //瓦片地图坐标
    
    @serialize()
    name:string = "";
    @serialize()
    life:number = 1;
    @serialize()
    atk:number = 0;
    @serialize()
    def:number = 0;
    @serialize()
    range:number = 0;
    @serialize()
    isDestroy:boolean = false;

    target:BoxBase = null;
    targetExtraList:BoxBase[] = null;   //副目标列表    
    node:cc.Node = null;
    ui:BaseUI = null;

    bindUI(ui:BaseUI){
        this.ui = ui;
        this.node = ui.node;
        this.ui.bindBox(this);
    }
    updateUI() {
        if(this.ui){
            this.ui.updateUI()
        }
    }

    
    onLoad(ui?:BaseUI) {

    }

    show() {

    }
    hide() {

    }
    onEnable(ui?:BaseUI) {
    }

    onClose(ui?:BaseUI) {

    }

    onDisable(ui?:BaseUI) {
    }

    onDestroy(ui?:BaseUI) {
        this.ui = null
    }


    get pos(){
        return cc.v2(this.x,this.y)
    }
    getDistance(toPos:cc.Vec2){
        var abs_delta_x = Math.abs(this.x - toPos.x);
        var abs_delta_y = Math.abs(this.y - toPos.y);
        return abs_delta_x + abs_delta_y;
    }
    getUIPos(){
        if(this.node){
            return this.node.position;
        }else{
            return MapUtils.getViewPosByTilePos(this.pos);
        }        
    }

    onBeAtked(damage:number,atker:BoxBase){

    }

    checkLive(){
        if(this.life > 0){
            return true;
        }else{
            return false
        }
    }
    
    destory(){
        this.isDestroy = true;
    }
}