import Proxy from "./MapProxy";
import Command from "./MapCommand";
var global = window;
export default class Init {
    proxy:Proxy;
    cmd:Command;
    constructor(){
        this.proxy = new Proxy();
        this.cmd = new Command();
    }
    init(){
        //监听服务端消息
        
    }
}

