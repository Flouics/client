
export default class EventEnum {
    static EVENT_TYPE = {}
    add(key:string){
        if(EventEnum.EVENT_TYPE[key]){
            cc.error("EventEnum key has exist by ",key);
        }else{
            EventEnum.EVENT_TYPE[key] = key
        }        
    }
    remove(key:string){
        delete EventEnum.EVENT_TYPE[key]
    }
} 