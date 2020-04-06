import TaskBase from "../TaskBase";

export default class DigTask extends TaskBase {
    digPos:cc.Vec2 = null;
    constructor(x:number,y:number){
        super();
        this.digPos = cc.v2(x,y);
        this.id = DigTask._idIndex;
        DigTask._idIndex += 1;
    }
}