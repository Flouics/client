cc.Class({
    extends: cc.Component,
    properties: {
        soundName: 'open',
    },

    playSound: function () {
        if (this.soundName && this.soundName.length > 0) {
            app.audioMgr.playEffect(this.soundName);
        }
    }
});
