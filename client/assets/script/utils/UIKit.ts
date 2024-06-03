import App from "../App";
import BaseClass from "../base/BaseClass";
import { assetManager, js, Label, macro, Node, resources, Sprite, SpriteAtlas, SpriteFrame, sys, Texture2D, UITransform, v2, v3, Vec3 } from "cc";
import Debug from "./Debug";
import { empty } from "../Global";
import TopTitleSub from "../common/TopTitleSub";

class UIKit extends BaseClass {

    uiMap(root:Node,map = new Map()):Map<string,Node>{
        if (!root) return map;

        map[root.name] = root;
        var children = root.children;
        var length = children.length;
        for (var i = 0; i < length; i++) {
            var child = children[i];
            this.uiMap(child, map);
        }
        return map;
    }
    
    initTitle(titleNode:Node,titleResUrl:string,...args: any[]){
        Debug.assert(empty(titleNode));
        var comp = titleNode.getComponent(TopTitleSub);
        if (comp){
            comp.init(titleResUrl,args);
        }
    }
    isValid(ui:Node){
        return ui && ui.isValid;
    }
};

export var uiKit = new UIKit(UIKit);
