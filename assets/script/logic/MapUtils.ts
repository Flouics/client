/* 
    计算地图的辅助工具，所有方法均为静态。
    // viewPos 基于mapView的地图坐标系，默认描点为(0.5,0.5)
 */
export default class MapUtils {
    static size: cc.Size = new cc.Size(1, 1);
    static sizeVec2: cc.Vec2 = new cc.Vec2(1, 1);

    static initBlockSize(size: cc.Size) {
        MapUtils.size = size;
        MapUtils.sizeVec2 = new cc.Vec2(size.width, size.height);
    }

    static getTilePosByViewPos(viewPos: cc.Vec2) {
        var x = Math.floor((viewPos.x + MapUtils.size.width / 2) / MapUtils.size.width);
        var y = Math.floor((viewPos.y + MapUtils.size.height / 2) / MapUtils.size.height);
        return cc.v2(x, y)
    }

    static getViewPosByTilePos(tilePos: cc.Vec2) {
        return tilePos.scale(this.sizeVec2);
    }

    // 获取最近的坐标点
    static getNearByPos(area: cc.Vec2[],toPos:cc.Vec2):cc.Vec2 {
        var shortest:cc.Vec2 = null;
        var tempDis = 0
        area.forEach((fromPos)=>{
            if (shortest == null || MapUtils.getDis(fromPos,toPos) < tempDis){
                shortest = fromPos
                tempDis = MapUtils.getDis(fromPos,toPos)
            }
        })
        return shortest;
    }

    static getDis(fromPos: cc.Vec2,toPos:cc.Vec2){
        return Math.abs(toPos.x - fromPos.x) + Math.abs(toPos.y - fromPos.y)
    }

    static isNearBy(fromPos: cc.Vec2,toPos:cc.Vec2){
        return Math.abs(toPos.x - fromPos.x) <= 1 && Math.abs(toPos.y - fromPos.y) <= 1;
    }
    
    static getKey(pos:cc.Vec2){
        return pos.x + "_" + pos.y;
    }
    // 获取最短路径
    static getRouteList(fromPos: cc.Vec2, toPos: cc.Vec2, checkFun: Function = () => { return true }) {
        // A*寻路
        //四个方向
        var dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        var shortestRoute: Route = null;
        var openList = []
        var closeList = []
        var filterMap = {}
        var getKey = (pos: cc.Vec2) => { return MapUtils.getKey(pos) }
        var getDis = (pos: cc.Vec2) => { return MapUtils.getDis(pos,toPos) }
        class Route {
            key: string;
            dis: number;
            disWeight: number;
            x: number;
            y: number;
            last: Route;
            step: number;
            constructor(pos: cc.Vec2, route?: Route) {
                this.key = getKey(pos);
                this.x = pos.x;
                this.y = pos.y;
                this.last = route;
                this.step = route ? (route.step + 1) : 0;
                this.dis = getDis(pos);
                this.disWeight = getDis(pos) + this.step;
            }
        }
        var isFilter = (pos: cc.Vec2) => { return !!filterMap[getKey(pos)] }
        var getCorners = (route: Route) => {
            var ret = []
            var temp: cc.Vec2;
            var tempRoute: Route;
            dirs.forEach(data => {
                temp = cc.v2(route.x + data[0], route.y + data[1]);
                if (checkFun(temp) && !isFilter(temp)) {
                    filterMap[getKey(temp)] = true;
                    tempRoute = new Route(temp, route)
                    if (shortestRoute == null || tempRoute.dis < shortestRoute.dis) {
                        shortestRoute = tempRoute
                    }
                    ret.push(tempRoute)
                }
            });
            ret.sort((a: any, b: any) => {
                return b.dis - a.dis
            })
            return ret;
        }
        var insertOpenList = (corners: Route[]) => {
            corners.forEach((route: Route) => {
                for (let i = openList.length - 1; i >= 0; i--) {
                    if (route.disWeight < openList[i].dis) {
                        return openList.splice(i - 1, 0, route)
                    }
                }
                return openList.unshift(route)
            })
        }
        var findRoute = (route: Route) => {
            var corners = getCorners(route);
            insertOpenList(corners)
            var curRoute = openList.pop()
            if (!curRoute) {
                //无路可走
                return null;
            }
            if (curRoute.x == toPos.x && curRoute.y == toPos.y) {
                return curRoute
            }

            closeList.push(curRoute);
            return findRoute(curRoute)
        }

        var route = new Route(fromPos, null)
        filterMap[getKey(fromPos)] = true;
        closeList.push(route);
        var result = findRoute(route)
        if (!result) {
            //无路可走,取最短
            result = shortestRoute
        }

        var ret: cc.Vec2[] = []
        while (result) {
            ret.push(cc.v2(result.x, result.y))
            result = result.last
        }
        return ret
    }
}