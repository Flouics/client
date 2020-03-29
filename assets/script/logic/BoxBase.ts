export default class BoxBase {
    id: number = 0;
    x: number = 0;  //瓦片地图坐标
    y: number = 0;  //瓦片地图坐标
    get pos(){
        return cc.v2(this.x,this.y)
    }
    getDistance(toPos:cc.Vec2){
        var abs_delta_x = Math.abs(this.x - toPos.x);
        var abs_delta_y = Math.abs(this.y - toPos.y);
        return abs_delta_x + abs_delta_y;
    }
}