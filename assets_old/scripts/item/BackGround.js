/**
 * Created by Administrator on 2017/7/31.
 */

cc.Class({
    extends: cc.BaseView,
    properties: {
        is_click_close: true
    },
    onLoad: function () {
        if (this.is_click_close) {
            this.node.on(cc.Node.EventType.TOUCH_END, function () {
                this.node.dispatchEvent(new cc.Event.EventCustom('bgClick', true));
            }.bind(this))
        }
    },


});
