import Proxy from "./PackageProxy";
import Command from "./PackageCommand";
import Init from "../base/Init";

export default class PackageInit extends Init {
    proxy:Proxy;
    cmd:Command;
    init(){
        this.moduleName = "package";
        this.proxy = new Proxy(Proxy);
        this.cmd = new Command();        
    }

    onMsg(){
        //监听服务端消息   

    }
}

