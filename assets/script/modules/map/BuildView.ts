
import App from "../../App";
import ListViewSimple from "../../ui/ListViewSimple";
import BaseUI from "../../zero/BaseUI";
import BaseView from "../../zero/BaseView";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BuildView extends BaseView {
    moduleName = "map";
    _baseUrl = "texture/map/";
    listView:ListViewSimple = null;

    onLoad(){
        super.onLoad();
        this.initBuildListView();
    }

    async initBuildListView(){
        var conf = await App.dataMgr.getTable("building")
        var data = conf.all();
        this.listView = this.node.getComponent(ListViewSimple);
        this.listView.init(this.setItem.bind(this))
        this.listView.updateContent(data);
    }

    setItem(item:cc.Node,v:any){
        item.getComponent(BaseUI).init()
    }

}