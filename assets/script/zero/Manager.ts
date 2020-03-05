export default class Manager{
    _modules = {}
    static _instance:Manager = null;
    constructor(){        
        this.init()
    }
    init(){
        Manager._instance = this;
    }
    static getInstance():Manager{
        if(Manager._instance){
            return Manager._instance
        }else{
            let instance = new Manager();
            return instance
        }
    }
}