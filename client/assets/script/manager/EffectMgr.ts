/**
 * Created by Administrator on 2017/8/5.
 * 特效管理类，方便后续游戏扩展。
 */

import App from "../App";
import UIEffect from "../effect/UIEffect";
import BaseClass from "../zero/BaseClass";
import { Node, Prefab, resources,instantiate} from "cc";
import Debug from "../utils/Debug";

class EffectData {
    root:Node = App.getUIRoot();
    x:number = 0;
    y:number = 0;
    constructor(param:any) {
        for (const key in param) {
            if(this.hasOwnProperty(key)){
                this[key] = param[key];
            }
        }
    }
}
export default class EffectMgr extends BaseClass {
    _baseUrl:"prefab/effect"
    /**
     * 播放通用特效
     */
    playEffect(effectName:string,param?:any):void {
        var self = this;
        var uiName = this._baseUrl + effectName;
        var effectData = new EffectData(param);
        var root = effectData.root;
        resources.load(uiName,Prefab, function (err: any, prefab: any) {
            Debug.log('[effect] create: ', uiName, new Date());
            if (err) {
                Debug.error("[effect] create error",uiName, err);
            }
            else {
                var ui = instantiate(prefab);
                ui.active = false;
                var parent = effectData.root;
                if (parent && parent.isValid) {
                    ui.parent = parent;
                }     
                ui.uiName = uiName;
                ui.x = effectData.x;
                ui.y = effectData.y;
                ui.getComponent(UIEffect).open(param)
            }
        });
    };
};
