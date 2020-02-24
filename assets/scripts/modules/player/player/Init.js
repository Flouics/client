
var Init = function () {
    this.proxy = require("Proxy")()
    this.cmd = require("Command")()
}

module.exports = function () {
    return new Init();
};

