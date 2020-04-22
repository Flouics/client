import { objToJson, jsonToObj } from "../utils/Decorator";

export default class BaseClass {
    _classDbKey:string;
    constructor(){
        this._classDbKey = this.getClassName();
    }
    public get className() : string {
        return this.getClassName();
    }
    getClassName(){
        return this.constructor.name;
    }
    //序列话
    serialize(){
        return objToJson(this)
    }
    //反序列号
    unserialize(json:string){
        jsonToObj(this,json);
    }
}