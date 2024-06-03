import Proxy from "./MapProxy";
import Command from "./MapCommand";
import Init from "../base/Init";
var global = window;
export default class MapInit extends Init {
    proxy:Proxy;
    cmd:Command;
    
    init(){
        this.moduleName = "map";
        this.proxy = new Proxy(Proxy);
        this.cmd = new Command();        
    }

    onMsg(): void {
        //监听服务端消息        
    }
}

