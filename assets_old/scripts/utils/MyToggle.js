cc.Class({
    extends: cc.Toggle,
    properties: {
        isChecked: {
            override: true,
            default: true,
            tooltip: CC_DEV && 'i18n:COMPONENT.toggle.isChecked',
            notify: function () {
                this._updateCheckMark();
                if (this.isChecked) {
                    this._emitToggleEvents();
                }
            }
        },
    },

    onEnable: function () {
        this._super();
        if (this.isChecked) {
            this._emitToggleEvents();
        }
    },

});
