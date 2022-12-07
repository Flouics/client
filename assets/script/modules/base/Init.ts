import Proxy from "./Proxy";
import Command from "./Command";
var global = window;
export default class Init {
    proxy:Proxy;
    cmd:Command;
    constructor(){
        this.init()
        this.initProxyCmd()
    }
    init(){
        this.proxy = new Proxy(Proxy);
        this.cmd = new Command();
        //监听服务端消息
        
    }
    initProxyCmd(){
        this.proxy.cmd = this.cmd;
        this.cmd.proxy = this.proxy;
    }
}
