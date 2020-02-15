var ToolKit = function () {

};

/**
 * 是否有效的字符串
 * @param str
 * @return true or false
 *
 */
ToolKit.prototype.isValidString = function (str) {
    return str && str != "";
};

/**
 *获得一个范围的随机值
 * @param min：最小值 max:最大值(包含)
 * @return int
 *
 */
ToolKit.prototype.getRand = function (min, max) {
    var n = max - min;
    return min + Math.round(Math.random() * n);
};

/**
 *获得一个数组的随机成员。
 * @param array
 * @return member
 *
 */
ToolKit.prototype.getRandFromArray = function (array) {
    var len = array.length;
    var randIndex = this.getRand(0, len - 1);
    return array[randIndex];

};


/**
 *获得一个有权重的成员返回
 * @param Obj 格式需要是{id:weight}
 * @return member
 *
 */
ToolKit.prototype.getRandKeyFromWeightObj = function (weightObj) {
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
ToolKit.prototype.get2PosAngle = function (pos1, pos2) {
    var rad = 90 - Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x) * 180 / Math.PI;
    return rad;
};

/**
 *获得两点之间距离
 * @param pos1 起点  pos2 终点
 * @return 长度
 *
 */
ToolKit.prototype.get2PosDistance = function (pos1, pos2) {
    return cc.pDistance(pos1, pos2);
};

/**
 *节点遍历查找
 * @param root 根节点  name 要查找的节点名
 * @return 节点
 *
 */
ToolKit.prototype.getChildByName = function (name, root) {
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

// 判断是否是数字
ToolKit.prototype.isNum = function (s) {
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
ToolKit.prototype.round = function round(number, precision) {
    return Math.round(+number + 'e' + precision) / Math.pow(10, precision);
};

//特别处理Money
ToolKit.prototype.roundMoney = function round(number) {
    return Math.round(number / 100) / 10;
};

/*
 * 移除arrar 中val的值
 * @param arrar val 
 */
ToolKit.prototype.remove = function (array, val) {
    var index = array.indexOf(val);
    if (index > -1) {
        array.splice(index, 1);
    }
};

/*
 * 两个集合的差集
 * @param arrar removearr 
 */
ToolKit.prototype.ArrayMinus = function (a, b) {
    var a = a.slice(0);
    var b = b;
    for (var i = 0; i < b.length; i++) {
        ToolKit.remove(a, b[i]);
    }
    return a;
};

ToolKit.prototype.ArrayAdd = function (a, b) {
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

ToolKit.prototype.ArrayGroup = function (array, count_num) {
    var loop_get = function (list, count, index) {
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
            return [list];
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
//排列组合
ToolKit.prototype.combineCount = function (total, count) {
    if (count < 1 || total < count) return 0;
    var v1 = 1, v2 = 1;
    for (var i = 1; i <= count; i++) {
        v1 *= (total + 1 - i);
        v2 *= i;
    }
    return v1 / v2;
};

/*
 * 获得头像自适应缩放
 * @param pic大小  framsize框大小 scale 指定缩放大小
 */
ToolKit.prototype.getHandScale = function (picSize, framSize, scale) {
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
ToolKit.prototype.formatNumber = function (number, maxlen) {
    if (0 == number) {
        return 0;
    }
    var tempNumber = number;
    for (var i = number.toString().length; i < maxlen; i++) {
        tempNumber = "0" + tempNumber;
    }

    return tempNumber;
};

/*
 * 格式化昵称
 * @param
 */
ToolKit.prototype.formatNick = function (nick, maxlen) {
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
 * 发送错误数据
 * @param
 */
ToolKit.prototype.SendError = function () {
    if (0 >= arguments.length) return;

    var msgStr = "";
    for (var i = 0; i < arguments.length; i++) {
        msgStr = msgStr + arguments[i] + " ";
    }

    app.extension.SendError(msgStr);
};

/*
 * 截图
 * @param 
 * 返回存储截图路径
 */
ToolKit.prototype.screenShot = function (callBack) {
    this.createScreenShotTexture(function (texture) {
        var fileName = "share.png";

        if (cc.sys.isNative) {
            var filePath = jsb.fileUtils.getWritablePath() + fileName;
            if (jsb.fileUtils.isFileExist(filePath)) {
                jsb.fileUtils.removeFile(filePath);
            }

            texture.saveToFile(fileName, cc.IMAGE_FORMAT_PNG);
            var cb = function () {
                cc.director.off(cc.Director.EVENT_AFTER_DRAW, cb);
                if (!!callBack) {
                    callBack(filePath);
                }
            }
            cc.director.on(cc.Director.EVENT_AFTER_DRAW, cb);
        }
    });
};


ToolKit.prototype.createScreenShotTexture = function (cb) {
    if (cc.sys.isNative) {
        var parent = cc.find('Canvas');
        var size = cc.director.getWinSize();
        //var texture = cc.RenderTexture.create(parseInt(size.width), parseInt(size.height), cc.Texture2D.PIXEL_FORMAT_RGBA8888, gl.DEPTH24_STENCIL8_OES); //比较耗内存
        var renderTexture = cc.RenderTexture.create(parseInt(size.width), parseInt(size.height));
        renderTexture.setPosition(cc.p(size.width / 2, size.height / 2));
        renderTexture.begin();
        parent._sgNode.visit();
        renderTexture.end();

        var sf = renderTexture.getSprite().getSpriteFrame();
        var texture = sf.getTexture();
        if (!!cb) {
            cb(texture)
        }
    } else {
        var cb = function () {
            cc.director.off(cc.Director.EVENT_AFTER_DRAW, cb);
            var size = cc.director.getWinSize();
            var canvas = document.getElementById("GameCanvas");
            var base64 = canvas.toDataURL("image/png");

            var shotImg = new Image();
            shotImg.src = base64;
            shotImg.width = size.width;
            shotImg.height = size.height;

            shotImg.onload = function () {
                var texture = new cc.Texture2D();
                texture.initWithElement(shotImg);
                texture.handleLoadedTexture();
                if (!!cb) {
                    cb(texture)
                }
            }
            //document.body.appendChild(shotImg);
        };
        cc.director.on(cc.Director.EVENT_AFTER_DRAW, cb);
    }
};

//简单的tip提示
ToolKit.prototype.showTip = function (content) {
    app.windowMgr.open(app.RES_WINDOW.tips, function (uiNode) {
        var tip = uiNode.getComponent("Tips");
        if (tip) {
            tip.open(content);
        }
    });
};

//从网络获取图片
ToolKit.prototype.loadWebImg = function (url, spt) {
    var load_texture = function (_spt) {
        var image = new Image();
        image.src = url;
        image.crossOrigin = "anonymous";
        image.onload = function () {
            try {
                var texture = new cc.Texture2D();
                texture.generateMipmaps = false;
                texture.initWithElement(image);
                texture.handleLoadedTexture();
                _spt.spriteFrame = new cc.SpriteFrame(texture);
            } catch (e) {
                cc.error(' image.onload error', e);
            }
        };
        image.onerror = function (e) {
            cc.error(' image.onerror', e);
        };
    };

    //ios 临时解决方案
    if (!cc.sys.isMobile || cc.sys.os == cc.sys.OS_IOS) {
        var reg = /\?/;
        var url_2 = reg.test(url) ? url + '&temp=temp.jpg' : url + '?temp=temp.jpg';
        //var url_2 = url;
        cc.loader.load(url_2, function (error, texture) {
            if (!error) {
                if (typeof texture == 'object') {
                    spt.spriteFrame = new cc.SpriteFrame(texture);
                } else {
                    load_texture(spt);
                }
            } else {
                load_texture(spt);
            }
        });
    } else {
        load_texture(spt);
    }
};


//获取数字
ToolKit.prototype.stringToNum = function (s) {
    if (typeof s == 'number') {
        return s;
    }
    s = s.toString();
    var reg = /-?\d*\.?\d*/i;
    return s.match(reg);
};

//获取target位于node父节点坐标系中的坐标。
//主要用于将node在自己坐标系中，将坐标改成为target的坐标。
ToolKit.prototype.getTargetPos = function (node, target) {
    if (!node || !target) {
        cc.error('target or node is null.');
        return cc.p(0, 0);
    }
    if (!node.parent || !target.parent) {
        cc.error('parent of target or node is null.');
        return cc.p(0, 0);
    }
    var worldSpacePos = target.parent.convertToWorldSpaceAR(target);
    var nodeSpacePos = node.parent.convertToNodeSpaceAR(worldSpacePos);
    return nodeSpacePos;
};

//判断两个节点是否相交。
ToolKit.prototype.interTarget = function (node, target) {
    if (!node || !target) {
        cc.error('target or node is null.');
        return false;
    }
    if (!node.parent || !target.parent) {
        cc.error('parent of target or node is null.');
        return false;
    }
    var rect_node = node.getBoundingBox();
    var rect_target = target.getBoundingBox();
    var world_pos = node.parent.convertToWorldSpaceAR(cc.v2(rect_node.x, rect_node.y));
    var node_pos = target.parent.convertToNodeSpaceAR(world_pos);
    rect_node.x = node_pos.x;
    rect_node.y = node_pos.y;
    return rect_node.intersects(rect_target);
};

//带图片的窗口
ToolKit.prototype.openPicBox = function (l_info, cb_ok, cb_equit) {
    app.windowMgr.open(app.RES_WINDOW.msgBox, function (uiNode) {
        uiNode.getComponent('MsgBox').openHavePicInfo(l_info, cb_ok, cb_equit);
    });
};
ToolKit.prototype.OpenWindow = function (content, cb_ok, cb_cancel) {
    app.windowMgr.open(app.RES_WINDOW.msgBox, function (uiNode) {
        uiNode.getComponent('MsgBox').OpenWindow(content, cb_ok, cb_cancel);
    });
};
//简单弹窗
ToolKit.prototype.openMsgBox = function (content, cb_ok, cb_equit) {
    app.windowMgr.open(app.RES_WINDOW.msgBox, function (uiNode) {
        uiNode.getComponent('MsgBox').openCommon(content, cb_ok, cb_equit);
    });
};
//简单弹窗
ToolKit.prototype.openMsgBoxWithCancel = function (content, cb_ok, cb_cancel, cb_equit) {
    app.windowMgr.open(app.RES_WINDOW.msgBox, function (uiNode) {
        uiNode.getComponent('MsgBox').openWithCancel(content, cb_ok, cb_cancel, cb_equit);
    });
};

//label上数值累加到目标值
ToolKit.prototype.labelAccumulator = function (label, formateStr, startValue, finalValue, delta, cb) {
    if (!delta || delta == 0) {
        if (delta) {
            cc.warn("labelAccumulator : deltadelta is 0.");
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
            label.string = cc.js.formatStr(formateStr, startValue);
        } else {
            startValue = finalValue;
            label.string = cc.js.formatStr(formateStr, startValue);
            label.unschedule(label.accumulatorFunction);
            label.accumulatorFunction = undefined;
        }
        if (cb && typeof cb === "function") {
            cb(startValue);
        }
    };
    label.schedule(label.accumulatorFunction, 0.1, cc.macro.REPEAT_FOREVER);
};

//加载图片
ToolKit.prototype.loadResSpritFrame = function (res_url, spt, cb) {
    if (!res_url) return;
    cc.loader.loadRes(res_url, cc.SpriteFrame, function (err, spriteFrame) {
        if (!err && spt && spt.node) {
            spt.spriteFrame = spriteFrame;
            if (!!cb) cb(err, spriteFrame);
        }
    });
};

//加载图集
ToolKit.prototype.loadResSpriteAtlas = function (res_url, name, spt, cb) {
    if (!res_url) return;
    cc.loader.loadRes(res_url, cc.SpriteAtlas, function (err, atlas) {
        if (!err && spt && spt.node) {
            spt.spriteFrame = atlas.getSpriteFrame(name);
            if (!!cb) cb(err, spriteFrame);
        }
    });
};


//json解析
ToolKit.prototype.parseJson = function (json_str) {
    var ret = null;
    try {
        ret = JSON.parse(json_str);
    } catch (e) {
        cc.error("could not parseJson:", json_str);
    }

    return ret;
};

//地址解析
ToolKit.prototype.getQueryString = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)return r[2];
    return null;
};

//地址解析
ToolKit.prototype.getURLString = function (url, name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var index = url.indexOf('?');
    if (index == -1) {
        return null;
    }
    var r = url.substr(index + 1).match(reg);
    if (r != null)return r[2];
    return null;
};

//打开新地址。
ToolKit.prototype.openUrl = function (url) {
    if (!url) return;
    return cc.sys.openURL(url);
};

//剪贴板功能
ToolKit.prototype.copyTextToClipboard = function (content) {
    if (cc.sys.isNative) {
        jsb.copyTextToClipboard(content);
        return true;
    } else {
        var success = true;
        if (window.clipboardData) { // 浏览器
            window.clipboardData.setData("Text", content);
        } else {
            if (this.copyTextToClipboardBrower_1(content) == false) {
                return this.copyTextToClipboardBrower_2(content)
            }
        }
        return success;
    }
};

//剪贴板功能 浏览器模式 cocos论坛推荐
ToolKit.prototype.copyTextToClipboardBrower_1 = function (content) {
    var success = true;

    function CreateElementForExecCommand(textToClipboard) {
        var forExecElement = document.createElement("div");
        //在可见区域以外
        forExecElement.style.position = "absolute";
        forExecElement.style.left = "-10000px";
        forExecElement.style.top = "-10000px";
        //将必需的文本写入元素并追加到文档中
        forExecElement.textContent = textToClipboard;
        document.body.appendChild(forExecElement);
        //内容编辑模式在火狐的exec命令方法是必要的
        forExecElement.contentEditable = true;
        return forExecElement;
    }

    function SelectContent(element) {
        //创建一个范围
        var rangeToSelect = document.createRange();
        rangeToSelect.selectNodeContents(element);
        //选择内容
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(rangeToSelect);
    }

    var forExecElement = CreateElementForExecCommand(content);
    SelectContent(forExecElement);
    try {
        if (window.netscape && netscape.security) {
            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
        }
        //将选定内容复制到剪贴板
        success = document.execCommand("copy", false, null);
    }
    catch (e) {
        cc.error('copyTextToClipboardBrower_1 error', e);
        success = false;
    }
    //移除临时元素
    document.body.removeChild(forExecElement);
    return success;
};


//剪贴板功能 浏览器模式 Sari需要用这种
ToolKit.prototype.copyTextToClipboardBrower_2 = function (content) {
    var success = true;
    // input自带的select()方法在苹果端无法进行选择，所以需要自己去写一个类似的方法
    // 选择文本。createTextRange(setSelectionRange)是input方法
    function selectText(textbox, startIndex, stopIndex) {
        if (textbox.createTextRange) {//ie
            const range = textbox.createTextRange();
            range.collapse(true);
            range.moveStart('character', startIndex);//起始光标
            range.moveEnd('character', stopIndex - startIndex);//结束光标
            range.select();//不兼容苹果
        } else {//firefox/chrome
            textbox.setSelectionRange(startIndex, stopIndex);
            textbox.focus();
        }
    }

    try {
        let input = document.querySelector('#copy-input');
        if (!input) {
            input = document.createElement('input');
            input.id = "copy-input";
            input.readOnly = "readOnly";        // 防止ios聚焦触发键盘事件
            input.style.position = "absolute";
            input.style.left = "-1000px";
            input.style.zIndex = "-1000";
            document.body.appendChild(input)
        }
        input.value = content;
        // ios必须先选中文字且不支持 input.select();
        selectText(input, 0, content.length);
        if ([
                cc.sys.BROWSER_TYPE_BAIDU,
                cc.sys.BROWSER_TYPE_WECHAT,
                cc.sys.BROWSER_TYPE_MOBILE_QQ,
                cc.sys.BROWSER_TYPE_UC,
                cc.sys.BROWSER_TYPE_UCBS,
            ].indexOf(cc.sys.browserType) < 0) {
            //通用情况
            success = document.execCommand('copy', false, null);
        } else {
            if (window.copy) {
                //chrome
                window.copy(content);
            } else {
                //UC浏览返回值虽然失败，但实际是成功的。
                document.execCommand('copy', false, null);
            }
        }
        input.blur();
    } catch (e) {
        cc.error('copyTextToClipboardBrower_2 error', e);
        success = false;
    }
    return success;
};

module.exports = function () {
    return new ToolKit();
};
