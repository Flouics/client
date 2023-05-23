import Proxy from "./PackageProxy";
import Command from "./PackageCommand";
import Init from "../base/Init";
var global = window;
export default class PackageInit extends Init {
    proxy:Proxy;
    cmd:Command;
    init(){
        this.proxy = new Proxy(Proxy);
        this.cmd = new Command();
        //监听服务端消息
        
    }
}

