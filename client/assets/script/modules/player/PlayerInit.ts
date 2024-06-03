import Proxy from "./PlayerProxy";
import Command from "./PlayerCommand";
import Init from "../base/Init";
import App from "../../App";
import TouchUtils from "../../utils/TouchUtils";

export default class PlayerInit extends Init{
    proxy:Proxy;
    cmd:Command;
    moduleName:string = "player";

    init(){
        this.moduleName = "player";
        this.proxy = Proxy.getInstance(Proxy);
        this.proxy.init();
        this.cmd = new Command();        
    }

    onMsg(){
        //监听服务端消息   

    }
}

