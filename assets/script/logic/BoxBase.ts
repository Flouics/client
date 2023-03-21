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

    @serialize()
    _data_1:number = 0;   //额外存储的数据字段1
    @serialize()
    _data_2:number = 0;   //额外存储的数据字段2
    @serialize()
    _data_3:number = 0;   //额外存储的数据字段3

    get data_1(){
        return this._data_1;
    }
    set data_1(value){
        this._data_1 = value;       
    }

    get data_2(){
        return this._data_2;
    }
    set data_2(value){
        this._data_2 = value;       
    }
    get data_3(){
        return this._data_3;
    }
    set data_3(value){
        this._data_3 = value;       
    }

    target:BoxBase = null;
    targetExtraList:BoxBase[] = null;   //副目标列表    
    node:cc.Node = null;
    ui:BaseUI = null;

    bindUI(ui:BaseUI){
        if (ui == null) {
            return
        }
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