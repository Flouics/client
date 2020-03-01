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
var app = window.app
export default class SoundMgr{
    CommonSoundKeys = CommonSoundKeys;
    /**
     * 播放通用音效
     */
    playSound(name:string, isLoop:boolean = false) {
        if (Array.isArray(name)) {
            name = global.app.toolKit.getRandFromArray(name);
        }
    
        if (name) {
            return global.app.audioMgr.playEffect(name, isLoop);
        } else {
            return null;
        }
    };
};
