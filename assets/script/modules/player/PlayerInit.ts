import PlayerProxy from "./PlayerProxy";
import PlayerCommand from "./PlayerCommand";
var global = window;
export default class Init {
    proxy:PlayerProxy;
    cmd:PlayerCommand;
    constructor(){
        this.proxy = new PlayerProxy();
        this.cmd = new PlayerCommand();
    }
    init(){
        //监听服务端消息
        
    }
}

