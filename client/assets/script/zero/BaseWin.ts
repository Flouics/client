import App from "../App";
import Debug from "../utils/Debug";
import { uiKit } from "../utils/UIKit";
import BaseUI from "./BaseUI";

import { _decorator,CCBoolean,EventTouch,find,js,Node, UITransform} from 'cc';
const {ccclass, property} = _decorator;

@ccclass("BaseWin")
export default class BaseWin extends BaseUI{
    _index:number = 130;
    @property({
        tooltip: '窗口的层级；1级窗口0-99 2级100-199 以此类推'
    })
    get index():number { return this._index;}
    set index(value:number) { this._index = value;}


    @property
    _hasBaseInit: boolean = false;
    _isCanClose = true

    @property({
        type: CCBoolean,
    })
    get isCanClose ():boolean{
        return this._isCanClose
    }
    set isCanClose (value:boolean) {
        var nd_close = find('btn_close', this.node);
        if (nd_close) {
            nd_close.active = false;
        }
        this._isCanClose = value;
    }
    
    uiMap:Map<string,Node> = new Map<string,Node>();

    onLoad () {
        super.onLoad();
        this._baseInit();
        this.setIndex();

        var nd_close = find('close', this.node);
        if (nd_close) {
            nd_close.on(Node.EventType.TOUCH_END, this.onClose.bind(this));
            //nd_close.on(Node.EventType.MOUSE_UP, this.onClose.bind(this));
            //App.windowMgr.control.closeAllOpen();
        }

        this.node.on(Node.EventType.TOUCH_END, this.onBgClick.bind(this));
        this.uiMap = uiKit.uiMap(this.node);
    }

    _baseInit () {
        if (!this._hasBaseInit) {
            Debug.log("init baseWin: ", js.getClassName(this));
            this._hasBaseInit = true;
        }
    }
    setIndex (){
        if(this.node){
            this.node.setSiblingIndex(this._index);
        }
    }    

    
    onBgClick (event:EventTouch) {
        event.propagationStopped = true;
    }

    close () {
        App.windowMgr.closeUI(this);
    }
};
