var ModuleMgr = function () {
    self.modules = {}
};

ModuleMgr.prototype.init = function () {
    self.load("player");
};
ModuleMgr.prototype.load = function (moduleName) {
    local resDir = "modules/" + moduleName
    local initModule = require(resDir + "/Init");
    if(initModule){
        self.modules[moduleName] = initModule()
    }else{
        cc.error("error initModule,",moduleName);        
    }
};
module.exports = function () {
    return new ModuleMgr();
};

