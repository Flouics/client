
import App from "../../App";
import BaseView from "../../zero/BaseView";

import { _decorator } from 'cc';
import TemplateProxy from "./TemplateProxy";
const {ccclass, property} = _decorator;

@ccclass("TemplateView")
export default class TemplateView extends BaseView {
    moduleName = "template"
    proxys:any[] = [];
    proxy:TemplateProxy;
    onLoad(): void {
        super.onLoad(); //BaseView继承的不要去掉这句
    }

    init() {            //预加载就调用

    }

    show() {            //显示时调用

    }
    
    hide() {            //隐藏后调用

    }
}