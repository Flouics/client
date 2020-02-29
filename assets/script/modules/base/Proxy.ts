
export default class Proxy {
    uiMap:{[key:string]:any}
    attrs:{[key:string]:any}
    // 构造函数 
    constructor() { 
        this.init()            
    }
    init(){

    }
    onHttpMsg(cmd:string,data:any){
        cc.log(cmd,data);
    }

    onSocketMsg(cmd:string,data:any){
        cc.log(cmd,data);
    }
}

