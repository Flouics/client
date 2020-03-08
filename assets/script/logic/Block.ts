
export default class Block {
    x: number = 0;
    y: number = 0;
    node: cc.Node = null;
    floor_1: number = 0     //第一层，基础层
    constructor(x: number = 0, y: number = 0) {
        this.x = 0;
        this.y = 0;
    }
}