/**
 * Created by Administrator on 2017/8/5.
 * 特效管理类，方便后续游戏扩展。
 */

import App from "../App";
import UIEffect from "../effect/UIEffect";
import BaseClass from "../zero/BaseClass";

var global = window
class EffectData {
    root:cc.Node = App.getUIRoot();
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
        cc.loader.loadRes(uiName,cc.Prefab, function (err: any, prefab: any) {
            cc.log('[effect] create: ', uiName, new Date());
            if (err) {
                cc.error("[effect] create error",uiName, err);
            }
            else {
                var ui = cc.instantiate(prefab);
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
