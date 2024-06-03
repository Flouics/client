
cc.RichText.prototype._onTouchEnded = function (event) {
    let components = this.node.getComponents(cc.Component);
    for (let i = 0; i < this._labelSegments.length; ++i) {
        let labelSegment = this._labelSegments[i];
        if (labelSegment._clickHandler) {
            let params = labelSegment._clickHandler.toString().split('|');
            let clickHandler = params.shift();
            if (clickHandler && this._containsTouchLocation(labelSegment, event.touch.getLocation())) {
                components.forEach(function (component) {
                    if (component.enabledInHierarchy && component[clickHandler]) {
                        component[clickHandler](event, params);
                    }
                });
                event.stopPropagation();
            }
        }
    }
};

const CacheMode = cc.Enum({
    NONE: 0,
    BITMAP: 1,
    CHAR: 2,
});
cc.Label.prototype.onLoad = function () {
    if (cc.sys.isNative) {
        //增加的修改
        if (typeof app != 'undefined' && this.font == null) {
            var self = this;
            App.loadFont(function (font) {
                self.font = font;
            });
        }
    }
    if (this._batchAsBitmap && this.cacheMode === CacheMode.NONE) {
        this.cacheMode = CacheMode.BITMAP;
        this._batchAsBitmap = false;
    }
};


cc.Button.prototype.onLoad = function () {
    this.node.on('click', function () {
        var audioSource = this.node.getComponent('ButtonUtils');
        if (audioSource) {
            audioSource.playSound();
        }
    }, this);
};



