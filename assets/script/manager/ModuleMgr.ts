import Init from "../modules/base/Init";
import MapInit from "../modules/map/MapInit";
import PlayerInit from "../modules/player/PlayerInit";
import BaseClass from "../zero/BaseClass";

export default class ModuleMgr extends BaseClass{
    static _modules = {}  

    getProxy(moduleName:string):any{
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

    loadModule(moduleName:string,moduleInit:Init){
        ModuleMgr._modules[moduleName] = moduleInit;
    };
    command(moduleName:string,funcName:string,params:any){
        let mod = ModuleMgr._modules[moduleName];
        if(!mod){
            cc.error("this module has not exist by " + moduleName);
            return;
        }

        if(!mod.cmd[funcName]){
            cc.error("this func has not exist by " + funcName + " in module " + moduleName);
            return;
        }
        mod.cmd[funcName](params)
    };

    dumpToDb(){
        for (const key in ModuleMgr._modules) {
            if (Object.prototype.hasOwnProperty.call(ModuleMgr._modules, key)) {
                var mod = ModuleMgr._modules[key];
                mod.proxy.dumpToDb();
            }
        }
    }

    reloadFromDb(){
        for (const key in ModuleMgr._modules) {
            if (Object.prototype.hasOwnProperty.call(ModuleMgr._modules, key)) {
                var mod = ModuleMgr._modules[key];
                mod.proxy.reloadFromDb();
            }
        }
    }
};


