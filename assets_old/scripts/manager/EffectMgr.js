/**
 * Created by Administrator on 2017/8/5.怎么投诉企业拖欠工资
 * 特效管理类。
 */

//帧动画。直接调用资源。
var FRAME_ANIM_ENUM = {
    //storm: {name: 'STORM', atlas: 'storm', show_time: 2},
    storm: {name: 'storm', atlas: 'storm'}
    , fireball: {name: 'fireball', atlas: 'fireball', show_time: 1}
    , explode: {name: 'explode', atlas: 'explode'}
    , on_healed: {name: 'on_healed', atlas: 'on_healed'}
    , shoot_2: {name: 'shoot_2', atlas: 'shoot_2'}

};
var EffectMgr = function () {
    this.FRAME_ANIM_ENUM = FRAME_ANIM_ENUM;
};

/**
 * 播放帧动画
 */
EffectMgr.prototype.playFrameAnim = function (effectObj, root, position, is_unique, createCallBack, cmpCallBack) {
    if (root == undefined) {
        root = cc.find('Canvas');
        if (position) {
            //当没有节点时，传入的position为世界坐标，需转一下。
            position = root.convertToNodeSpaceAR(position);
        }
    }
    if (position == undefined) position = cc.p(0, 0);
    if (is_unique == undefined) is_unique = true;
    if (cmpCallBack == undefined) {
        cmpCallBack = createCallBack;
        createCallBack = null;
    }

    if (!!is_unique) this.clearFrameAnimFromRoot(effectObj, root);
    var self = this;
    this.createFrameAnim(effectObj, function (animNode) {
        animNode.active = true;
        animNode.parent = root;
        animNode.position = position;

        // 添加帧事件
        var effectStriptComponent = animNode.getComponent(cc.EffectBase);

        effectStriptComponent.setCmpCallBack(function () {
            if (!!cmpCallBack) cmpCallBack();
            self.clearFrameAnim(animNode);
        });
        animNode.getComponent(cc.Animation).play('run');
        if (!!createCallBack) createCallBack(animNode);
    }, cmpCallBack);
};

EffectMgr.prototype.createFrameAnim = function (effectObj, cb, cmpCallBack) {
    if (effectObj.atlas) {
        var self = this;
        var animNode = this.getFameEffectFromPool(effectObj);
        if (animNode) {
            cb(animNode);
            return;
        }
        cc.loader.loadRes("atlas/" + effectObj.atlas, cc.SpriteAtlas, function (err, atlas) {
            if (!!err) return;
            var animNode = new cc.Node();
            animNode.name = 'FRAME_ANIM_' + effectObj.name;
            var effectStriptComponent = animNode.addComponent(cc.EffectBase);
            var animation = animNode.addComponent(cc.Animation);
            var spt = animNode.addComponent(cc.Sprite); //需要添加精灵帧，否则无法播放帧动画

            var frames = atlas.getSpriteFrames();
            var framesCount = frames.length - 1;
            var clip = cc.AnimationClip.createWithSpriteFrames(frames, framesCount);
            clip.name = "run";
            if (effectObj.show_time) {
                clip.wrapMode = cc.WrapMode.Loop;
            }
            animation.addClip(clip);

            /*
             //指定帧事件，待处理。
             clip.events.push({
             frame: framesCount,
             func: "cmpCallBack",     // 回调函数名称
             params: [eventFrame]    // 回调参数
             });
             */

            if (effectObj.show_time) {
                effectStriptComponent.setMaxEffectSec(effectObj.show_time);
            }
            if (!!cb) cb(animNode);
        });
    } else {
        cc.error('playFrameAnim atlas is null:', effectObj);
    }
};

/**
 * 播放清除特效
 */
EffectMgr.prototype.clearFrameAnimFromRoot = function (effectObj, root) {
    if (root == undefined) root = cc.find('Canvas');
    if (root && root.isValid) {
        var target = cc.find(effectObj.name, root);
        this.clearFrameAnim(target);
    }
};

/**
 * 播放清除特效
 */
EffectMgr.prototype.getFrameAnimFromRoot = function (effectObj, root) {
    if (root == undefined) root = cc.find('Canvas');
    if (root && root.isValid) {
        var target = cc.find(effectObj.name, root);
        return target;
    }
    return null;
};

/**
 * 播放清除特效
 */
EffectMgr.prototype.clearFrameAnim = function (animNode) {
    if (animNode && animNode.isValid) {
        animNode.active = false;
        //缓存起来。
        animNode.parent = global.app.nd_effectPool;
    }
};

EffectMgr.prototype.getFameEffectFromPool = function (effectObj) {
    var target = cc.find('FRAME_ANIM_' + effectObj.name, global.app.nd_effectPool);
    return target;
};

/**
 *播放prefab特效
 * todo 未测试
 * loadedCallBack: 加载之后的回调
 * endCallBack：动画播放完成的回调
 */
EffectMgr.prototype.playCommonEffect = function (effect_prefab_name, loadedCallBack, endCallBack) {
    var cb = function (uiNode) {
        if (!!loadedCallBack) loadedCallBack(uiNode);

        var ui = uiNode.getComponent(cc.EffectBase);
        if (!!ui && !!endCallBack) {
            ui.setCmpCallBack(endCallBack);
        } else {
            if (!!endCallBack) {
                endCallBack(null);
            }
        }
    };
    global.app.windowMgr.open(effect_prefab_name, cb, null, endCallBack);
};

EffectMgr.prototype.clearCommonEffect = function (effect_prefab_name) {
    global.app.windowMgr.close(effect_prefab_name);
};

module.exports = function () {
    return new EffectMgr();
};
