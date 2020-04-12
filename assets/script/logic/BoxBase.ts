import MapUtils from "./MapUtils";

export default class BoxBase {
    id: number = 0;
    x: number = 0;  //瓦片地图坐标
    y: number = 0;  //瓦片地图坐标
    life:number = 1;
    atk:number = 0;
    def:number = 0;
    range:number = 0;
    target:BoxBase = null;
    targetExtraList:BoxBase[] = null;   //副目标列表
    isDestroy:boolean = false;
    node:cc.Node = null;
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
            return this.node.position
        }else{
            return MapUtils.getViewPosByTilePos(this.pos);
        }        
    }

    onBeAtked(atkValue:number,atker:BoxBase){

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