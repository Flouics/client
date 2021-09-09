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
                App.toolKit.showTip((dicionCode[code]) ? dicionCode[code] : "请求出错,错误代码:" + code);
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
            App.toolKit.openMsgBox(content, App.restart, App.restart);
            return;
        }
        do {
            // 系统维护
            var isMaintain = data.getIsMaintain();
            if (isMaintain) {
                App.toolKit.openMsgBox('系统维护。', App.exit, App.exit);
                break;
            }

            // 存用户数据
            App.userData.initUserInfo(data);
            // 存热更及登录数据
            //App.serverMgr.initServerData(data);

            //App.userTask.initTaskInfo();
            //App.rank.setRankRewardFlag(data.getRankFlag());


            var isRecon = data.getUserReconnection();//存储玩家信息
            if (isRecon) {
                var roomId = data.getUserRoomId();
                var serverIp = data.getUserServerIp();
                var serverPort = data.getUserServerPort();
                App.userData.currentGameId = data.getGameId();
                App.userData.current_table_level = data.getTableLevel();

                if (App.toolKit.isValidString(serverIp) && parseInt(serverPort, 10)) {
                    cc.log("------[http]重新连接 ", serverIp, ":", serverPort, ":", roomId);
                    App.userData.setReconnectData(true, roomId, serverIp, serverPort);
                    game.socketMgr.connect(serverIp, serverPort);
                } else {
                    App.toolKit.showTip("重连数据获取失败");
                }
                break;
            }
            // 进入大厅
            App.sceneMgr.loadScene("lobbyCache");
        } while (0);
    },
    // 心跳回调
    heartBeatResponse: function (result) {
        var data = proto.login.HeartbeatResponse.deserializeBinary(result);

        if (!data || data.getStatus().length < HEARTBEAT_STATUS_COUNT)
            return;
        //todo 处理    
        App.httpMgr.emit(App.httpMgr.CMD.PHP_CMD_HEARTBEAT, {type: 3, status: status});
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

        App.userData.setBalance(info);
        App.httpMgr.emit(App.httpMgr.CMD.PHP_CMD_USER_BALANCE, info);
    },

    // 支付心跳
    payHearbeatResponse: function (result) {
        var data = proto.recharge.PayHeartbeatResponse.deserializeBinary(result);
        var status = data.getStatus();
        cc.log("------[httpcb]支付心跳返回:", status)

        if (0 != status) {
            App.httpMgr.stopPayHearBeat();
            if (1 != status)
                App.toolKit.showTip("支付返回:", status);
        }
        App.schedule()
        // 0未支付，1成功，
        if (1 == status) {
            App.unschedule("payHeartBeat");
            cc.log("支付成功");
            App.httpMgr.sendMessage(App.httpMgr.CMD.PHP_CMD_USER_BALANCE)
        }
    },
};

module.exports = HttpMessageCallback;
