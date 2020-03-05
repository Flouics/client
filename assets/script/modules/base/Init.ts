import Proxy from "./Proxy";
import Command from "./Command";
var global = window;
export default class Init {
    proxy:Proxy;
    cmd:Command;
    constructor(){
        this.init()
    }
    init(){
        this.proxy = new Proxy();
        this.cmd = new Command();
        //监听服务端消息
        
    }
}
