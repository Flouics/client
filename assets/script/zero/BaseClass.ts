import { objToJson, jsonToObj } from "../utils/Decorator";

export default class BaseClass {
    _classDbKey:string;
    _class = null;
    static _instance = null;        //单例
    constructor(_class:any){
        if (_class == null) {
            cc.error("constructor need class")
            return;
        }
        this._classDbKey = this.getClassName();
        this._class = _class;
        _class._instance = this;
    }
    public get className() : string {
        return this.getClassName();
    }

    //单例
    static getInstance(_class:any){
        if( _class._instance){
            return _class._instance
        }else{
            let instance = new _class(_class);
            return instance
        }
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