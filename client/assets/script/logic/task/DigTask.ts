import TaskBase from "../TaskBase";

export default class DigTask extends TaskBase {
    constructor(x:number,y:number){
        super(DigTask);
        this.pos = cc.v2(x,y);
        this.id = DigTask._idIndex;
        DigTask._idIndex += 1;
        this.type = TaskBase.TASK_VALUE_ENUM.DIG;
    }
}