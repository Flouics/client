import Proxy from "./TimeProxy";
import Command from "./TimeCommand";
import Init from "../base/Init";
var global = window;
export default class TimeInit extends Init {
    proxy:Proxy;
    cmd:Command;
    init(){
        this.moduleName = "time";
        this.proxy = Proxy.getInstance(Proxy);
        this.cmd = new Command();
    }

    onMsg(){
        //监听服务端消息   
    }
}

