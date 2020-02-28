import Proxy from "./Proxy";
import Command from "./Command";
export default class Init {
    proxy:Proxy;
    cmd:Command;
    constructor(){
        this.proxy = new Proxy()
        this.cmd = new Command()
    }
}

