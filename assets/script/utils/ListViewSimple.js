/*
 //要求父节点不能是layout，因为排布会自己处理。
 */

cc.Class({
    extends: cc.Component,

    properties: {
        itemPrefab: { // item template to instantiate other items
            default: null,
            type: cc.Prefab
        },

        itemNode: { // item template to instantiate other items
            default: null,
            type: cc.Node
        },

        scrollView: {
            default: null,
            type: cc.ScrollView
        },

        nd_itemRoot: cc.Node,
        spawnCount: 0,
        spacing: 0,
        offset: 200,
        isResetTop: true,
    },


    // use this for initializatio
    onLoad: function () {

    },

    init: function (itemFn) {
        this.itemFn = itemFn;
        this.items = [];
        this.updateTimer = 0;
        this.updateInterval = 0.2;
        this.lastContentPosY = 0;
        this.initialize();
    },

    initialize: function () {
        this.itemTemplate = this.itemPrefab || this.itemNode;
        for (let i = 0; i < this.spawnCount; ++i) { // spawn items, we only need to do this once
            let item = (i == 0 && this.itemNode) ? this.itemNode : cc.instantiate(this.itemTemplate);
            item.parent = this.nd_itemRoot;
            item.tag_index = i;
            this.items.push(item);
        }
    },

    updateContent: function (data) {
        if (!data) {
            return;
        }
        var self = this;
        this.data = data;
        this.totalCount = data.length;
        this.nd_itemRoot.height = (this.itemTemplate.height + this.spacing) * this.totalCount;
        if (this.isResetTop) {
            this.scrollView.scrollToTop(0.3);
        }
        this.initItems();
    },

    updateData: function (data) {
        if (!data) {
            return;
        }
        this.data = data;
        this.totalCount = data.length;
        this.nd_itemRoot.height = (this.itemTemplate.height + this.spacing) * this.totalCount;
    },

    initItems: function () {
        for (let i = 0; i < this.spawnCount; ++i) {
            let item = this.items[i];
            this.updateItem(item, i);
        }
    },

    updateItem: function (item, index) {
        var data = this.data[index];
        if (!data) {
            item.active = false;
            return;
        }
        item.tag_index = index;
        item.setPosition(0, -item.height * (0.5 + index) - this.spacing * (index + 1));
        item.active = true;
        if (!!this.itemFn && typeof this.itemFn == 'function') {
            this.itemFn(item, data);
        }
        this.initItemHandle(item, index);
    },

    getPositionInView: function (item) { // get item position in scrollview's node space
        let worldPos = item.parent.convertToWorldSpaceAR(item.position);
        let viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    },

    initItemHandle: function (item, index) {
        if (!item) return;
        var button = item.getComponent(cc.Button);
        if (!button) return;

        var clickEventHandler = button.clickEvents[0];
        if (clickEventHandler) {
            clickEventHandler.customEventData = item.tag_index;
        } else {
            clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
            clickEventHandler.component = "ListViewSimple";//这个是代码文件名
            clickEventHandler.handler = "onItemClickEvent";
            clickEventHandler.customEventData = item.tag_index;
            button.clickEvents.push(clickEventHandler);
        }
    },

    onItemClickEvent: function (event, data) {
        if (this.item_handle) {
            this.item_handle(event.target, data);
        }
    },

    setItemClickHandle: function (cb) {
        this.item_handle = cb;
    },

    update: function (dt) {
        if (!this.data) {
            return;
        }
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) return; // we don't need to do the math every frame
        this.updateTimer = 0;
        let items = this.items;
        let isDown = this.scrollView.content.y < this.lastContentPosY; // scrolling direction
        var buffer_top = this.scrollView.node.height * (1 - this.scrollView.node.anchorY) + this.offset;
        var buffer_bottom = this.scrollView.node.height * this.scrollView.node.anchorY + this.offset;
        var itemsHeight = (this.itemTemplate.height + this.spacing) * items.length;
        for (let i = 0; i < items.length; ++i) {
            let item = items[i];
            item.active = this.data[item.tag_index] != undefined;
            let viewPos = this.getPositionInView(item);
            if (isDown) {
                // if away from buffer zone and not reaching top of content
                if (viewPos.y < -buffer_bottom && item.y + this.scrollView.node.height < 0) {
                    let index = item.tag_index - items.length; // update item id
                    this.updateItem(item, index);
                }
            } else {
                // if away from buffer zone and not reaching bottom of content
                if (viewPos.y > buffer_top) {
                    let index = item.tag_index + items.length; // update item id
                    this.updateItem(item, index);
                }
            }
        }
        // update lastContentPosY
        this.lastContentPosY = this.scrollView.content.y;
    },
});
