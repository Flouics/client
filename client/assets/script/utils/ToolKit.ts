import App from "../App";
import BaseClass from "../base/BaseClass";
import MsgBox from "../common/MsgBox";
import Tips from "../common/Tips";
import { lang, nullfun, RES_WINDOW } from "../Global";
import { assetManager, js, Label, macro, Node, resources, Sprite, SpriteAtlas, SpriteFrame, sys, Texture2D, UITransform, v2, v3, Vec3 } from "cc";
import Debug from "./Debug";

class ToolKit extends BaseClass {   

    /**
     *获得一个范围的随机值
     * @param min：最小值 
     * @param max:最大值(包含)
     * @return integer
     *
     */
    getRand(min: number, max: number): number {
        var n = max - min;
        return min + Math.round(Math.random() * n);
    };

    /**
     *获得一个数组的随机成员。
     * @param array
     * @return member
     *
     */
    getRandFromArray(array: any[]): any {
        var len = array.length;
        var randIndex = this.getRand(0, len - 1);
        return array[randIndex];

    };


    /**
     *获得一个有权重的成员返回
     * @param Obj 格式需要是{id:weight}
     *
     */
    getRandKeyFromWeightObj(weightObj: any[]): any {
        var weight_total = 0;
        for (var i in weightObj) {
            weight_total += weightObj[i];
        }
        var randomnum = this.getRand(1, weight_total);
        var cur_weight = 0;
        for (var key in weightObj) {
            cur_weight += weightObj[key];
            if (cur_weight > randomnum) {
                return key;
            }
        }
        return null;
    };
    /**
     *获得两点之间夹角
     * @param pos1 起点  pos2 终点
     * @return 角度
     *
     */
    get2PosAngle(pos1: Vec3, pos2: Vec3): number {
        var rad = 90 - Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x) * 180 / Math.PI;
        return rad;
    };

    /**
     *获得两点之间距离
     * @param pos1 起点  pos2 终点
     * @return number
     *
     */
    get2PosDistance(pos1: Vec3, pos2: Vec3) :any{
        var v = pos1.add(pos2);
        return v.length();
    };

    /**
     *节点遍历查找
     * @param root 根节点  name 要查找的节点名
     * @return 节点
     *
     */
    getChildByName(name: string, root: Node) {
        if (!root) return null;

        var nd_find = root.getChildByName(name);
        if (nd_find) {
            return nd_find;
        }
        var children = root.children;
        var length = children.length;
        for (var i = 0; i < length; i++) {
            var child = children[i];
            var nd_find = this.getChildByName(name, child);
            if (nd_find)
                return nd_find;
        }
    };
    getChild(name: string, root: Node){
        return this.getChildByName(name, root);
    }

    // 判断是否是数字
    isNum(s: any) {
        if (typeof s == 'number')
            return true;
        if (typeof s != 'string')
            return false;

        if (s != null && s.length > 0) {
            var r, re;
            re = /-?\d*\.?\d*/i; //\d表示数字,*表示匹配多个数字
            r = s.match(re);
            return (r == s) ? true : false;
        }
        return false;
    };
    
    //精确到小数点N位。
    round(number: number, precision: number) {
        var inter = Math.floor(number);
        var decimal = number - inter;
        return inter + Math.round(decimal * Math.pow(10, precision)) / Math.pow(10, precision);
    };


    /*
     * 移除arrar 中val的值
     * @param arrar val 
     */
    remove(array: any[], val: number) {
        var index = array.indexOf(val);
        if (index > -1) {
            array.splice(index, 1);
        }
    };

    /*
     * 两个集合的差集
     * @param arrar removearr 
     */
    ArrayMinus(a: any[], b: any[]) {
        var a = a.slice(0);
        var b = b;
        for (var i = 0; i < b.length; i++) {
            this.remove(a, b[i]);
        }
        return a;
    };

    ArrayAdd(a: any[], b: any[]) {
        var a = a.slice(0);
        var b = b;
        for (var i = 0; i < b.length; i++) {
            if (a.indexOf(b[i]) == -1) {
                a.push(b[i])
            }
        }
        return a;
    };

    /**
     * 将数组按照Ｎ个进行组合分组 不过滤重复的元素。
     * @param array
     * @constructor
     */

    ArrayGroup(array: any[], count_num: number) {
        function loop_get(list: any[], count: number, index: number):any[] {
            if (count < count_num) {
                var list_ret = [], ret;
                for (var k = index, len = array.length; k < len; k++) {
                    var list_slice = list.slice(0); //复制
                    list_slice.push(array[k]);
                    ret = loop_get(list_slice, count + 1, k + 1);
                    list_ret = list_ret.concat(ret);
                }
                return list_ret;
            } else {
                return list;
            }
        };
        var ret_list = [];
        for (var i = 0, len = array.length; i < len; i++) {
            if (i < len - count_num + 1) {
                ret_list = ret_list.concat(loop_get([array[i]], 1, i + 1));
            }
        }
        return ret_list;
    };

    /*
     * 获得头像自适应缩放
     * @param pic大小  framsize框大小 scale 指定缩放大小
     */
    getHeadScale(picSize:any, framSize:any, scale:number) {
        var wid = picSize.width;
        var hei = picSize.height;
        if (wid > hei) {
            return (picSize.width / framSize.width) * scale;
        } else {
            return (picSize.height / framSize.height) * scale;
        }
        ;
    }

    /*
     * 格式化数字
     * @param
     */
    formatNumber(number:number, maxlen:number) {
        if (0 == number) {
            return 0;
        }
        var tempNumber:string = number.toString();
        for (var i = number.toString().length; i < maxlen; i++) {
            tempNumber = "0" + tempNumber;
        }

        return Number(tempNumber);
    };

    /*
     * 格式化昵称
     * @param
     */
    formatNick(nick:string, maxlen:number) {
        if (!nick || 0 >= nick.length) return "";

        var newNick = nick;
        var len = (maxlen) ? maxlen : 5;
        if (len < nick.length) {
            newNick = nick.substring(0, len);
            newNick = newNick + ".."
        }

        return newNick;
    };

    /*
     * 截图
     * @param 
     * 返回存储截图路径
     */
    screenShot(callBack?:Function) {
        this.createScreenShotTexture(function (texture:Texture2D) {
            if(!!callBack)  callBack()
        });
    };

    createScreenShotTexture(cb:Function) {
        //ts 报错比较多，有需要在做。
        cb()
    };

    //简单的tip提示
    showTip(content:string) {
        App.windowMgr.open(RES_WINDOW.tips, function (uiNode:Node) {
            var tip = uiNode.getComponent(Tips);
            if (tip) {
                tip.open(content);
            }
        });
    };

    showMsgBox(content:string,cb_comfirm:Function = nullfun,cb_cancel:Function=nullfun) {
        App.windowMgr.open(RES_WINDOW.msgBox,function(uiNode:Node){
            var msgBox = uiNode.getComponent(MsgBox);
            if (msgBox){
                msgBox.open(content,cb_comfirm,cb_cancel);
            }
        });
    };

    //从网络获取图片
    loadWebImg(url:string, spt:Sprite) {
        var reg = /\?/;
        var url_2 = reg.test(url) ? url + '&temp=temp.jpg' : url + '?temp=temp.jpg';
        //var url_2 = url;
        assetManager.loadRemote(url_2, function (error, texture) {
            if (!error) {
                if (typeof texture == 'object') {
                    const spriteFrame = new SpriteFrame();
                    spriteFrame.texture = texture as any;
                    spt.spriteFrame = spriteFrame;
                }
            } else {
                Debug.error("loadWebImg failed",url);
            }
        });
    };

    //获取数字
    stringToNum(s:string) {
        if (typeof s == 'number') {
            return s;
        }
        s = s.toString();
        var reg = /-?\d*\.?\d*/i;
        return Number(s.match(reg));
    };

    //获取target位于node父节点坐标系中的坐标。
    //主要用于将node在自己坐标系中，将坐标改成为target的坐标。
    getTargetPos(node:Node, target:Node) {
        if (!node || !target) {
            Debug.error('target or node is null.');
            return v2(0, 0);
        }
        if (!node.parent || !target.parent) {
            Debug.error('parent of target or node is null.');
            return v2(0, 0);
        }

        var worldSpacePos = target.parent.getComponent(UITransform).convertToNodeSpaceAR(target.getPosition());
        var nodeSpacePos = node.parent.getComponent(UITransform).convertToNodeSpaceAR(worldSpacePos);
        return nodeSpacePos;
    };

    //判断两个节点是否相交。
    interTarget(node:Node, target:Node) {
        if (!node || !target) {
            Debug.error('target or node is null.');
            return false;
        }
        if (!node.parent || !target.parent) {
            Debug.error('parent of target or node is null.');
            return false;
        }
        var rect_node = node.getComponent(UITransform).getBoundingBox();
        var rect_target = target.getComponent(UITransform).getBoundingBox();
        var world_pos = node.parent.getComponent(UITransform).convertToNodeSpaceAR(v3(rect_node.x, rect_node.y));
        var node_pos = target.parent.getComponent(UITransform).convertToNodeSpaceAR(world_pos);
        rect_node.x = node_pos.x;
        rect_node.y = node_pos.y;
        return rect_node.intersects(rect_target);
    };

    //label上数值累加到目标值
    labelAccumulator(label:Label, formateStr:string = null, startValue:number = 0, finalValue:number = 0, delta?:number, cb?:Function) {
        if (!delta || delta == 0) {
            if (delta) {
                Debug.warn("labelAccumulator : deltadelta is 0.");
            }
            delta = 1;
        }

        if (!formateStr || formateStr === "") {
            formateStr = "%s";
        }

        if (label.accumulatorFunction) {
            label.unschedule(label.accumulatorFunction);//先取消原调度。
            label.accumulatorFunction = null;
        }

        label.accumulatorFunction = function () {
            startValue += delta;
            if ((startValue + delta) <= finalValue) {
                label.string = js.formatStr(formateStr, startValue);
            } else {
                startValue = finalValue;
                label.string = js.formatStr(formateStr, startValue);
                label.unschedule(label.accumulatorFunction);
                label.accumulatorFunction = undefined;
            }
            if (cb && typeof cb === "function") {
                cb(startValue);
            }
        };
        label.schedule(label.accumulatorFunction, 0.1, macro.REPEAT_FOREVER);
    };

    //加载图片
    loadResSpriteFrame(res_url:string = null, spt:Sprite, cb?:Function) {
        if (!res_url) return;
        resources.load(res_url, SpriteFrame, function (err, spriteFrame) {
            if (!err && spt && spt.node) {
                spt.spriteFrame = spriteFrame;
                if (!!cb) cb(err, spriteFrame);
            }
        });
    };

    //加载图集
    loadResSpriteAtlas(res_url:string, name:string, spt:Sprite, cb?:Function) {
        if (!res_url) return;
        resources.load(res_url, SpriteAtlas, function (err, atlas) {
            if (!err && spt && spt.node) {
                var spriteFrame = atlas.getSpriteFrame(name);
                spt.spriteFrame = spriteFrame
                if (!!cb) cb(err, spriteFrame);
            }
        });
    };

    //json解析
    parseJson(json_str:string) {
        var ret = null;
        try {
            ret = JSON.parse(json_str);
        } catch (e) {
            Debug.error("could not parseJson:", json_str);
        }

        return ret;
    };

    //地址解析
    getQueryString(name:string) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substring(1).match(reg);
        if (r != null) return r[2];
        return null;
    };

    //地址解析
    getURLString(url:string, name:string) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var index = url.indexOf('?');
        if (index == -1) {
            return null;
        }
        var r = url.substring(index + 1).match(reg);
        if (r != null) return r[2];
        return null;
    };

    //打开新地址。
    openUrl(url:string) {
        if (!url) return;
        return sys.openURL(url);
    };

    //剪贴板功能
    copyTextToClipboard(content:string) {
        //todo 
        return false;
    };

    empty(value:any){
        if(!!value){
            return false
        }
        if(typeof(value) == "string"){
            return value == ""
        }else if (typeof(value) == "object"){
            return Object.keys(value).length == 0;
        }else{
            return !value
        }
    };

    limitNum(value:number,min?:number,max?:number){
        if(min && value < min){
            value = min;
        }
        if(max && value > max){
            value = max;
        }
        return value;
    };

    /*     
    保持队列索引始终在范围内
    超出范围的，会重新修正 如-1 ,则在在队尾
    */
    queueIndexd(index:number,len:number){
        var i = index % len;
        return (i + len - 1) % len  + 1
    }

    tableToMap(t:Array<any>,key:string="id",parseFunc:Function=nullfun):Map<any,any>{
        var map = new Map();
        if(this.empty(t)){
            return map;
        };
        for(var i=0;i<t.length;i++){
            let v = t[i];
            if (v instanceof Object){
                map[v[key]] = v
            }else{
                map[v] = v
            }
            parseFunc(map,v,key);
        }
        return map;
    }

    ArrayToMap(t:Array<any>,key:string="id",parseFunc:Function=nullfun):Map<any,any>{
       return this.tableToMap(t,key,parseFunc);
    }

    logBase(x:number,base:number):number {
        return Math.log10(x)/Math.log10(base);
    }

    parseNum(value:number):string{
        var unitNum = 10000;      // 进制单位
        var index = Math.floor(this.logBase(value,unitNum));
        var baseNum = Math.pow(unitNum,this.limitNum(index - 1,0));
        var num:any = value / baseNum;
        var precision = 5;
        if (num == Math.floor(num)){
            num = num.toPrecision(precision)      // 整数
        }else{
            num = num.toPrecision(precision -1)   // 含有小数点
        }
        return "" + num + lang("common.unit_" + index);
    }
};

export var toolKit = new ToolKit(ToolKit);
