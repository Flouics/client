/*
 //要求父节点不能是layout，因为排布会自己处理。
 */

 const { ccclass, property } = cc._decorator;
 @ccclass
 export default class ListViewSimple extends cc.Component{

    @property(cc.Node) //item template to instantiate other items
    itemTemplate = null;
    @property(cc.ScrollView)
    scrollView = null;
    @property(cc.Node)
    nd_itemRoot = null;

    spawnCount:number =  0;
    spacing:number =  0;
    offset:number =  200;
    isResetTop: boolean = true;
    itemFn:Function = nullfun;
    itemHandle:Function = nullfun;
    items:cc.Node[] = [];
    updateTimer:number = 0;
    updateInterval:number = 0;
    lastContentPosY:number = 0;
    totalCount:number = 0;
    data:any = null;

    // use this for initializatio
    onLoad () {

    };

    init (itemFn:Function) {
        this.itemFn = itemFn;
        this.items = [];
        this.updateTimer = 0;
        this.updateInterval = 0.2;
        this.lastContentPosY = 0;
        this.initialize();
    };

    initialize (){
        for (let i = 0; i < this.spawnCount; ++i) { // spawn items, we only need to do this once
            let item = cc.instantiate(this.itemTemplate);
            item.parent = this.nd_itemRoot;
            item.tag_index = i;
            this.items.push(item);
        }
    };

    updateContent(data) {
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
    };

    updateData(data) {
        if (!data) {
            return;
        }
        this.data = data;
        this.totalCount = data.length;
        this.nd_itemRoot.height = (this.itemTemplate.height + this.spacing) * this.totalCount;
    };

    initItems() {
        for (let i = 0; i < this.spawnCount; ++i) {
            let item = this.items[i];
            this.updateItem(item as cc.Node, i);
        }
    };

    updateItem(item:cc.Node, index:number) {
        var data = this.data[index];
        if (!data) {
            item.active = false;
            return;
        }
        (item as any).tag_index = index;
        item.setPosition(0, -item.height * (0.5 + index) - this.spacing * (index + 1));
        item.active = true;
        if (!!this.itemFn && typeof this.itemFn == 'function') {
            this.itemFn(item, data);
        }
        this.initItemHandle(item, index);
    };

    getPositionInView(item) { // get item position in scrollview's node space
        let worldPos = item.parent.convertToWorldSpaceAR(item.position);
        let viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    };

    initItemHandle(item, index) {
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
    };

    onItemClickEvent(event:cc.Event, data:any) {
        if (this.itemHandle) {
            this.itemHandle(event.target, data);
        }
    };

    setItemClickHandle(cb:Function) {
        this.itemHandle = cb;
    };

    update(dt:number) {
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
            item.active = this.data[(item as any).tag_index] != undefined;
            let viewPos = this.getPositionInView(item);
            if (isDown) {
                // if away from buffer zone and not reaching top of content
                if (viewPos.y < -buffer_bottom && item.y + this.scrollView.node.height < 0) {
                    let index = (item as any).tag_index - items.length; // update item id
                    this.updateItem(item, index);
                }
            } else {
                // if away from buffer zone and not reaching bottom of content
                if (viewPos.y > buffer_top) {
                    let index = (item as any).tag_index + items.length; // update item id
                    this.updateItem(item, index);
                }
            }
        }
        // update lastContentPosY
        this.lastContentPosY = this.scrollView.content.y;
    };
};
