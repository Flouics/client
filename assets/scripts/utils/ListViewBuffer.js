/*
 //做了对象池
 //没做循环，更好复用。
 //要求父节点是个layout
 //当父节点的底部快达到的边界的时候进行加载。
 */

cc.Class({
    extends: cc.Component,

    properties: {
        itemTemplate: { // item template to instantiate other items
            default: null,
            type: cc.Prefab
        },
        scrollView: {
            default: null,
            type: cc.ScrollView
        },
        nd_itemRoot: cc.Node,       //需要是layout布局
        onceLoadCount: 0,           // 每次加载的item数量
        //totalCount: 0,              // 总共的item数量。
        bottomDistance: 500,        //距离下边距多远开始刷。
        _items: [],
    },

    // use this for initialization
    onLoad: function () {
        this.content = this.scrollView.content;
        this.initCount = 0; //防止数组有空数据一直刷.
        this.hasInit = false;
        this.updateTimer = 0;
        this.updateInterval = 0.1;
        this.bounce_top = false;
        //当资源自我回收时。触发
        this.node.on('onItemRecycledSelf', this.onItemRecycledSelf, this);

    },

    //data为对象数组，对象需要包含id
    //
    init: function (scriptName = 'null') {
        this.scriptName = scriptName;
        this.itemPool = new cc.NodePool(this.scriptName);
        this.initialize();
        this.hasInit = true;
    },

    initialize: function () {
        for (let i = 0; i < this.onceLoadCount; ++i) {
            let item = cc.instantiate(this.itemTemplate);
            this.itemPool.put(item);
        }
    },

    addContent: function () {
        var count = 0;
        if (this.initCount >= this.data.length) {
            return;
        }
        for (var i = 0; i < this.data.length; i++) {
            if (count >= this.onceLoadCount) {
                break;
            }
            var obj = this.data[i];
            var item = this._items[i];
            if (!item) {
                this.createItem(obj, i);
                count++;
            }
        }
    },

    refreshContent: function (data) {
        this.data = data;
        this.initCount = 0;
        var data_len = data.length;
        var items_len = this._items.length;
        for (var index = 0; index < items_len; index++) {
            if (index < data_len) {
                if (this._items[index]) {
                    this._items[index].getComponent(this.scriptName).reuse(data[index], index);
                } else {
                    this.createItem(data[index], index);
                }
            } else {
                var node = this._items[index];
                if (node instanceof cc.Node) {
                    this.itemPool.put(node);
                    this._items[index] = null;
                }
            }
        }
        this.clearNullItems();
    },

    getItems: function () {
        this.clearNullItems();
        return this._items;
    },

    clearNullItems: function () {
        var new_items = [];
        for (var i in this._items) {
            if (this._items[i]) {
                new_items.push(this._items[i]);
            }
        }
        this._items = new_items;
    },

    updateContent: function (data, isUpdate) {
        if (!data) {
            return;
        }
        var self = this;
        this.data = data;
        this.clearContent();
        this.scheduleOnce(this.addContent.bind(this), 0);
        if (isUpdate) {
            this.addContent();
        }
    },
    //只更新data，不重新刷。
    updateData: function (data) {
        if (!data) {
            return;
        }
        this.data = data;
    },

    createItem: function (data, index) {
        var self = this;
        var item = null;
        if (!data) {
            cc.log('ListViewBuffer createItem failed by null');
            return;
        }

        if (this.itemPool.size() > 0) {
            item = this.itemPool.get(data, index);
        } else {
            item = cc.instantiate(this.itemTemplate);
            if (this.scriptName != 'null') {
                item.getComponent(this.scriptName).reuse(data, index);
            }
        }

        item.parent = this.nd_itemRoot;
        this._items[index] = item;
        this.initCount++;
    },

    onItemRecycledSelf: function (event) {
        var node = event.target;
        var item;
        for (var i in this._items) {
            item = this._items[i];
            if (item === node) {
                this.itemPool.put(node)
                this._items.splice(i, 1);
            }
        }
        this.node.emit('onItemRecycledSelf', {node: node});
        //停止事件继续传递
        event.stopPropagation();
    },

    clearContent: function () {
        if (this._items) {
            for (var i = 0; i < this._items.length; i++) {
                var node = this._items[i];
                if (node instanceof cc.Node) {
                    this.itemPool.put(node);
                }
            }
        }
        var layout = this.content.getComponent(cc.Layout);
        if (layout) layout._doLayout();
        this._items = [];
        this.initCount = 0;
    },

    getPositionInView: function (item) {
        let worldPos = item.parent.convertToWorldSpaceAR(item.position);
        let viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    },

    update: function (dt) {
        if (!this.data) {
            return;
        }

        //引擎的BUG，先绕过去
        var conentHeight = this.scrollView.content.height;
        if (conentHeight < this.scrollView.node.height) {
            this.scrollView.content.y = 0;
        }
        ;

        if (!this.data || this.data.length < 1) {
            return;
        }
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) return;
        this.updateTimer = 0;

        this.updateInterval = 0.1;
        //判断下目前节点是否有到scrollView下边界。
        var itemRootPos = this.getPositionInView(this.nd_itemRoot);
        var bottom = -this.scrollView.node.height * this.scrollView.node.anchorY;
        if (itemRootPos.y - this.nd_itemRoot.height > bottom - this.bottomDistance) {
            this.updateInterval = 0.25;//开始加载资源时刷新间隔时间拉长。
            this.addContent();
        }
    },
});
