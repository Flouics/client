import App from "./App";
import BaseUI from "./zero/BaseUI";
import SceneBase from "./zero/SceneBase";

const {ccclass, property} = cc._decorator;
/**
 * 全局唯一的游戏管理器,每个场景都可以持有
 * 挂在启动场景。
 */


@ccclass
export default class AppUI extends BaseUI{
    @property(cc.Node)
    public nd_effectPool: cc.Node = null;
    @property(cc.Node)
    public nd_uiPool: cc.Node = null;
    
    // use this for initialization
    onLoad () {
        //设置为常驻借点。
        cc.game.addPersistRootNode(this.node);
        //关闭帧数显示。
        cc.debug.setDisplayStats(false);
        //适配相关的
        cc.view.setResizeCallback(this.onViewResize.bind(this));

        this.appInit();
        this.onMsg();
    }

    appInit () {
       App.appInit(this);        
    }

    start () {
        
    }

    restart () {
        cc.game.removePersistRootNode(this.node);
    }

    exit () {
        cc.game.removePersistRootNode(this.node);
    }
    
    onViewResize () {
        //遍历所有的节点。
        //this.toolKit.showTip("onViewResize");
        var root = cc.find('Canvas');
        var scene_comp = root.getComponent(SceneBase);
        if (scene_comp && scene_comp.fitWinSize) {
            scene_comp.fitWinSize();
        }
        this.updateNodeWidget(root);
    }

    updateNodeWidget (node:cc.Node) {
        if (!!node && node instanceof cc.Node) {
            var widget = node.getComponent(cc.Widget);
            if (!!widget) {
                widget.updateAlignment();
            }
            var children = node.children;
            if (!!children) {
                children.forEach(function (child:cc.Node) {
                    this.updateNodeWidget(child);
                }.bind(this))
            }
        }
    }
}
