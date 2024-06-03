import App from "./App";
import Proxy from "./modules/base/Proxy";
import { toolKit } from "./utils/ToolKit";
import Debug from "./utils/Debug";
import { l10n } from 'db://localization-editor/l10n';
import { Enum, js, Size } from "cc";


//global
export let g_event_error_str = "";
export let empty = function(value:any){
    return toolKit.empty(value);
}
export let deepCopy = function <T>(obj: T,map = new WeakMap()): T {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if(map.has(obj)) {
        return map.get(obj);
    }
    
    const copy: any = Array.isArray(obj) ? [] : {};
    map.set(obj, copy);

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key], map);
        }
    }
    
    return copy;
}

export let clone = function <T>(obj: T): T {
    return deepCopy(obj);
}
export let getProxy = function (moduleName:string|object): Proxy {
    return  App.moduleMgr.getProxy(moduleName);    
}

export let nullfun = function () {};

export let lang = function(key:string,...args:any[]):string {
    if(key == "parseNum"){
        return toolKit.parseNum(args[1]);  
    }
    return js.formatStr(l10n.t(key), args);
}
export let i18n = l10n;
export let parseNum = function(num:number):string {
    return toolKit.parseNum(num);
}

export let winSize = new Size(750,1334)

export let RES_WINDOW = Enum( {
    loadingAm: "prefab/dialog/loadingAm",
    msgBox: "prefab/dialog/msgBox",
    tips: "prefab/dialog/tips",
    setting:"prefab/dialog/setting",
    mask:"prefab/dialog/mask",
});
export let RES_ITEM = Enum( {
});
export let RES_EFFECT = Enum( {
});

//初始全局
export function GlobalInit(){
    window["empty"] = empty;
    window["deepCopy"] = deepCopy;
    window["clone"]  = deepCopy;
    window["getProxy"] = getProxy;
    window["nullfun"] = nullfun;
    window["toolKit"] = toolKit;
    window["dump"] = Debug.dump;
    window["g_event_error_str"] = g_event_error_str;
}

function initProxy(){
    window["command"] = App.moduleMgr.command;   
}

//  有依赖的全局
export function GlobalInitDependency(){
    
    initProxy();
}
