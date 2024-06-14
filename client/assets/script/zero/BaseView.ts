import App from "../App";
import Proxy from "../modules/base/Proxy";
import Debug from "../utils/Debug";
import { toolKit } from "../utils/ToolKit";
import BaseWin from "./BaseWin";

import { _decorator, EventTouch, find, NodeEventType } from 'cc';
const {ccclass, property} = _decorator;
// 需要绑定proxy的需要在此层。

@ccclass("BaseView")
export default class BaseView extends BaseWin {
    _objFlags: number;
    moduleName:string = "";
    proxys:any[] = [];
    proxy:Proxy;

    onLoad() {
        super.onLoad();
        this.initProxy();

        var nd_close = find('close', this.node);
        if (nd_close) {
            nd_close.on(NodeEventType.TOUCH_END, this.onClose.bind(this));
        }

        this.node.on(NodeEventType.TOUCH_END, this.onBgClick.bind(this));
    }

    initProxy() {
        if (!toolKit.empty(this.moduleName)){
            this.proxy = App.moduleMgr.getProxy(this.moduleName);
            if(this.proxys.indexOf(this.proxy) == -1){
                this.proxys.push(this.proxy)
            }else{
                Debug.warn("proxy of ",this.moduleName," is null");
            }            
        } else{
            Debug.warn("moduleName is null",this.moduleName);
        }
    }

    onBgClick (event:EventTouch) {
        //Debug.log("event propagationStopped",this);
        //event.propagationStopped = true;
    }

    getResUrl(res_url:string){
        if(this.proxy){
            return this.proxy._baseUrl + res_url;
        }else{
            return super.getResUrl(res_url);
        }        
    }

    show() {

    }
    hide() {

    }
    onEnable() {
        this.bindProxys();
    }

    onClose() {

    }

    onDisable() {
        this.unbindProxys();      
    }

    onDestroy() {
    }

    getDataUnique(data: any) {
        if (typeof (data) == "object") {
            return JSON.stringify(data)
        } else {
            return data;
        }
    }
    bindProxys() {
        this.proxys.forEach((proxy) => {
            if (typeof proxy  == 'string' ){
                proxy = App.moduleMgr.getProxy(proxy)
            }
            proxy.bindView(this)
        })
    }
    unbindProxys() {
        this.proxys.forEach((proxy) => {
            if (typeof proxy  == 'string' ){
                proxy = App.moduleMgr.getProxy(proxy)
            }
            proxy.unbindView(this)
        })
    }

    update(dt:number){
        //this.updateUI();  主动刷新
    }

    command(funcName:string,params?:any){
        if (!toolKit.empty(this.moduleName)){
            App.moduleMgr.command(this.moduleName,funcName,params)
        }
    }
}
