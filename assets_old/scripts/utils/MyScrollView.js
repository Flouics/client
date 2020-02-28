cc.Class({
    extends: cc.ScrollView,
    properties: {},

    _onTouchEnded: function (event, captureListeners) {
        this._super(event, captureListeners);
        var touch = event.touch;
        this.node.emit('my-touch-up', {touch: touch});
    },

    _onTouchCancelled: function(event, captureListeners) {
        this._super(event, captureListeners);
        var touch = event.touch;
        this.node.emit('my-touch-cancel', {touch: touch});
    },
});
