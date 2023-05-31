const { ccclass, property } = cc._decorator;
@ccclass
export default class MyScrollView extends cc.ScrollView{
    _onTouchEnded(event:any, captureListeners:any) {
        super._onTouchEnded(event, captureListeners);
        var touch = event.touch;
        this.node.emit('my-touch-up', {touch: touch});
    }

    _onTouchCancelled(event:any, captureListeners:any) {
        super._onTouchCancelled(event, captureListeners);
        var touch = event.touch;
        this.node.emit('my-touch-cancel', {touch: touch});
    }
}
