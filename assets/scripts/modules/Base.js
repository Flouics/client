var Base = function () {
    this.proxy = require("Proxy")()
    this.cmd = require("Command")()
}
var Proxy = function (){
    this.uiMap = {}
    this.attrs = {}
    if(this.init){
        this.init()
    }
}

Proxy.prototype.updateView = function(funcName){
    this.uiMap.forEach(ui => {
        var view = view.getComponent(cc.BaseView)
        if(view && view[funcName]){
            view[funcName]()
        }
    });
}
module.exports = function () {
    return new Base();
};
