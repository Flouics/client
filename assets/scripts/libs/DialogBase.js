cc.DialogBase = cc.Class({
    extends: cc.BaseView,
    properties: {
        index: {
            default: 130,
            tooltip: '窗口的层级；1级窗口0-99 2级100-199 以此类推'
        },
        _hasBaseInit: false,
        _isCanClose: {
            default: true,
            type: Boolean,
            notify: function () {
                var nd_close = cc.find('btn_close', this.node);
                if (nd_close) {
                    nd_close.active = false;
                }
            }
        },
        is_destroy: {
            default: true,
            tooltip: '切换场景的时候是否直接destroy'
        },
    },

    onLoad: function () {
        var nd_close = cc.find('btn_close', this.node);
        if (nd_close) {
            nd_close.on(cc.Node.EventType.TOUCH_END, this.onClose.bind(this));
            //nd_close.on(cc.Node.EventType.MOUSE_UP, this.onClose.bind(this));
            //app.windowMgr.control.closeAllOpen();
        }

        this.node.on('bgClick', this.onBgClick.bind(this));

    },

    _baseInit: function () {
        if (!this._hasBaseInit) {
            cc.log("show js: ", cc.js.getClassName(this));
            this._hasBaseInit = true;
        }
    },

    show: function () {
        this._super();
        //todod ddz 动画待添加。
        this._baseInit();
        this.node.zIndex = this.index;
        this.node.active = true;
    },

    hide: function () {
        this._super();
        //todod ddz 动画待添加。
        this.node.active = false;
    },


    onBgClick: function (event) {
        if (this._isCanClose) {
            this.onClose();
        }

        event.stopPropagation();
    },

    onClose: function () {
        app.windowMgr.closeUI(this);
    }
});
