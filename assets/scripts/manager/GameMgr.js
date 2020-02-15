
var Game = function(app_id){
    return this;
};

var GameMgr = function () {
    this._curAppId = null;
    this._curGame = null;
};

GameMgr.prototype.getGameInstance = function (app_id) {
    if(this._curAppId == app_id && this._curGame){
        return this._curGame
    }else{
        this._curGame = new Game(app_id);
        return this._curGame
    }
};

module.exports = function () {
    return new GameMgr();
};