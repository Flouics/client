import Init from "../modules/base/Init";
import MapInit from "../modules/map/MapInit";
import PlayerInit from "../modules/player/PlayerInit";

export default class ModuleMgr{
    static _modules = {}

    // 单例处理
    static _instance:ModuleMgr = null;
    constructor(){
        ModuleMgr._instance = this;
        this.init()
    }
    static getInstance():ModuleMgr{
        if(ModuleMgr._instance){
            return ModuleMgr._instance
        }else{
            let instance = new ModuleMgr();
            return instance
        }
    }
    static get obj(){
        return ModuleMgr.getInstance();
    } 

    static getProxy(moduleName:string){
        let mod = ModuleMgr._modules[moduleName];
        if(!mod){
            cc.error("this module has not exist by " + moduleName);
            return;
        }
        return mod.proxy;
    }

    init () {
        ModuleMgr._modules = {}
        this.loadModule("player",new PlayerInit())
        this.loadModule("map",new MapInit())        
    };
    load(moduleName:string){
        let resUrl = "../modules/" + moduleName + "/" + moduleName + "Init";        
    };
    loadModule(moduleName:string,moduleInit:Init){
        ModuleMgr._modules[moduleName] = moduleInit;
    };
    command(moduleName:string,funcName:string,params:any){
        let mod = ModuleMgr._modules[moduleName];
        if(!mod){
            cc.error("this module has not exist by " + moduleName);
            return;
        }

        if(!mod.command[funcName]){
            cc.error("this func has not exist by " + funcName + " in module " + moduleName);
            return;
        }
        mod.command[funcName](params)
    };
};


