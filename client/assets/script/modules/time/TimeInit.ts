import Proxy from "./TimeProxy";
import Command from "./TimeCommand";
import Init from "../base/Init";
var global = window;
export default class TimeInit extends Init {
    proxy:Proxy;
    cmd:Command;
    init(){
        this.proxy = new Proxy(Proxy);
        this.cmd = new Command();
        //监听服务端消息
        
    }
}

