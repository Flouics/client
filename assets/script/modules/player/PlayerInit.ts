import Proxy from "./PlayerProxy";
import Command from "./PlayerCommand";
import Init from "../base/Init";
var global = window;
export default class PlayerInit extends Init {
    proxy:Proxy;
    cmd:Command;
    init(){
        this.proxy = new Proxy();
        this.cmd = new Command();
        //监听服务端消息
        
    }
}

