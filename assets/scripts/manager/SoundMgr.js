/**
 * Created by Administrator on 2017/8/5.
 * 游戏声音单独一个类，方便后续游戏扩展。
 */


var CommonSoundKeys = {
    box_destroy: 'box_destroy',
    get_buff: ['buff_0'],
    bullet_0: 'bullet_0',
    button: 'button',
    player_die: 'player_die',
    settle: 'settle',
};
var SoundMgr = function () {
    this.CommonSoundKeys = CommonSoundKeys;
};

/**
 * 播放通用音效
 */
SoundMgr.prototype.playSound = function (name, isLoop) {
    if (Array.isArray(name)) {
        name = app.toolKit.getRandFromArray(name);
    }

    if (name) {
        return app.audioMgr.playEffect(name, isLoop);
    } else {
        return null;
    }
};

module.exports = function () {
    return new SoundMgr();
}

