import App from "../App";
import BaseUI from "./BaseUI";

const {ccclass, property} = cc._decorator;
var global = window;
export default class BaseWin extends BaseUI{
    @property({
        tooltip: '窗口的层级；1级窗口0-99 2级100-199 以此类推'
    })
    public index:number = 130;

    @property
    _hasBaseInit: boolean = false;
    _isCanClose = true

    @property({
        type: cc.Boolean,
    })
    get isCanClose ():boolean{
        return this._isCanClose
    }
    set isCanClose (value:boolean) {
        var nd_close = cc.find('btn_close', this.node);
        if (nd_close) {
            nd_close.active = false;
        }
        this._isCanClose = value;
    }
    
    @property({
        tooltip: '切换场景的时候是否直接destroy'
    })
    is_destroy: boolean = true;    

    onLoad () {
        var nd_close = cc.find('btn_close', this.node);
        if (nd_close) {
            nd_close.on(cc.Node.EventType.TOUCH_END, this.onClose.bind(this));
            //nd_close.on(cc.Node.EventType.MOUSE_UP, this.onClose.bind(this));
            //App.windowMgr.control.closeAllOpen();
        }

        this.node.on(cc.Node.EventType.TOUCH_END, this.onBgClick.bind(this));
    }

    _baseInit () {
        if (!this._hasBaseInit) {
            cc.log("show js: ", cc.js.getClassName(this));
            this._hasBaseInit = true;
        }
    }

    show () {
        super.show();
        //todod ddz 动画待添加。
        this._baseInit();
        this.node.zIndex = this.index;
        this.node.active = true;
    }

    hide () {
        super.hide();
        //todod ddz 动画待添加。
        this.node.active = false;
        var self = this;
        if(this.is_destroy){    // 30秒后销毁
            this.scheduleOnce(()=>{
                if(self.node.isValid && self.node.active == true){
                    this.node.removeFromParent();
                }
            },30.0)
        }
    }

    onBgClick (event:any) {
        event.stopPropagation();
    }

    close () {
        App.windowMgr.closeUI(this);
    }
};
