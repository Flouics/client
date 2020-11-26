import BaseClass from "./assets/script/zero/BaseClass";

declare interface Window {
    app: any;
    game:{[key:string]:any};
    RES_WINDOW: {[key:string]:any}
    RES_ITEM: {[key:string]:any}
    RES_EFFECT: {[key:string]:any}
    g_event_error_str:string = "";
    getInstance:any = function(_class){
        BaseClass.getInstance(_class)
    }
}
