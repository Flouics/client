import TaskBase from "../TaskBase";

export default class CarryTask extends TaskBase {
    constructor(startPos:cc.Vec2,endPos:cc.Vec2,item:Item){
        super(CarryTask);
        this.pos = cc.v2(x,y);
        this.id = CarryTask._idIndex;
        CarryTask._idIndex += 1;
        this.type = TaskBase.TASK_VALUE_ENUM.CARRY;
    }
}