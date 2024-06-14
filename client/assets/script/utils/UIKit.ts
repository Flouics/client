import App from "../App";
import BaseClass from "../zero/BaseClass";
import { assetManager, js, Label, macro, Node, resources, Sprite, SpriteAtlas, SpriteFrame, sys, Texture2D, UITransform, v2, v3, Vec3 } from "cc";
import Debug from "./Debug";
import { empty } from "../Global";


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
    

    isValid(ui:Node){
        return ui && ui.isValid;
    }

    setScale(node:Node, scale:number){
        node.setScale(new Vec3(scale, scale, scale));
    }
};

export var uiKit = new UIKit(UIKit);
