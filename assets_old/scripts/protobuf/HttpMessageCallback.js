// 服务器心跳返回状态数量
var HEARTBEAT_STATUS_COUNT = 2;

/*
 *   http请求回调
 */
var HttpMessageCallback = {

    // 返回Code
    checkResponseCode: function (data) {
        var code = parseInt(data.getCode());
        var flag = true;
        switch (code) {
            case 0:
            case 1:
                break;

            default:
                global.app.toolKit.showTip((dicionCode[code]) ? dicionCode[code] : "请求出错,错误代码:" + code);
                flag = false;

        }
        return flag;
    },  

    // 登录回调
    onLogin: function (result) {
        console.log("登录回调 ---result:", result);
        var data = proto.login.LoginResponse.deserializeBinary(result);
        var code = data.getCode();
        if (1 != code) {
            var content = dicionCode[code] ? dicionCode[code] : "请求出错,错误代码:" + code
            global.app.toolKit.openMsgBox(content, global.app.restart, global.app.restart);
            return;
        }
        do {
            // 系统维护
            var isMaintain = data.getIsMaintain();
            if (isMaintain) {
                global.app.toolKit.openMsgBox('系统维护。', global.app.exit, global.app.exit);
                break;
            }

            // 存用户数据
            global.app.userData.initUserInfo(data);
            // 存热更及登录数据
            //global.app.serverMgr.initServerData(data);

            //global.app.userTask.initTaskInfo();
            //global.app.rank.setRankRewardFlag(data.getRankFlag());


            var isRecon = data.getUserReconnection();//存储玩家信息
            if (isRecon) {
                var roomId = data.getUserRoomId();
                var serverIp = data.getUserServerIp();
                var serverPort = data.getUserServerPort();
                global.app.userData.currentGameId = data.getGameId();
                global.app.userData.current_table_level = data.getTableLevel();

                if (global.app.toolKit.isValidString(serverIp) && parseInt(serverPort, 10)) {
                    cc.log("------[http]重新连接 ", serverIp, ":", serverPort, ":", roomId);
                    global.app.userData.setReconnectData(true, roomId, serverIp, serverPort);
                    game.socketMgr.connect(serverIp, serverPort);
                } else {
                    global.app.toolKit.showTip("重连数据获取失败");
                }
                break;
            }
            // 进入大厅
            global.app.sceneMgr.loadScene("lobbyCache");
        } while (0);
    },
    // 心跳回调
    heartBeatResponse: function (result) {
        var data = proto.login.HeartbeatResponse.deserializeBinary(result);

        if (!data || data.getStatus().length < HEARTBEAT_STATUS_COUNT)
            return;
        //todo 处理    
        global.app.httpMgr.emit(global.app.httpMgr.CMD.PHP_CMD_HEARTBEAT, {type: 3, status: status});
    },

    // 返回用户金币数据
    UserBalanceResponse: function (result) {
        var data = proto.login.UserBalanceResponse.deserializeBinary(result);
        if (!this.checkResponseCode(data)) {
            return;
        }
        var info = {};

        info.gold = data.getGold();
        info.diamond = data.getDiamond();
        info.level = data.getLevel();
        info.exp = data.getExp();
        info.battle_counts = data.getBattleCounts();
        info.battle_win = data.getBattleWin();
        info.continue_win = data.getContinueWin();
        info.match_battle_counts = data.getMatchBattleCounts();
        info.match_battle_win = data.getMatchBattleWin();
        info.match_continue_win = data.getMatchContinueWin();
        info.item_list = data.getUserItemsList().map(function (item_obj) {
            var item_data = {
                id: item_obj.getItemId(),
                type: item_obj.getType(),
                count: item_obj.getCount(),
                drop_time: item_obj.getDropTime(),
            }
            return item_data;
        });
        info.status = data.getStatus();
        info.reward_flag = data.getRewardFlag();

        global.app.userData.setBalance(info);
        global.app.httpMgr.emit(global.app.httpMgr.CMD.PHP_CMD_USER_BALANCE, info);
    },

    // 支付心跳
    payHearbeatResponse: function (result) {
        var data = proto.recharge.PayHeartbeatResponse.deserializeBinary(result);
        var status = data.getStatus();
        cc.log("------[httpcb]支付心跳返回:", status)

        if (0 != status) {
            global.app.httpMgr.stopPayHearBeat();
            if (1 != status)
                global.app.toolKit.showTip("支付返回:", status);
        }
        global.app.schedule()
        // 0未支付，1成功，
        if (1 == status) {
            global.app.unschedule("payHeartBeat");
            cc.log("支付成功");
            global.app.httpMgr.sendMessage(global.app.httpMgr.CMD.PHP_CMD_USER_BALANCE)
        }
    },
};

module.exports = HttpMessageCallback;
