

import Item from "../../logic/Item";
import BaseProxy from "../base/Proxy";
/*
 * 背包数据
 */
export default class PackageProxy extends BaseProxy {
    itemList:[Item] = null; 
    itemMap:{[key:number]:Item} = null;

    //方法
    init(){

    }
    addItem(item:any){
        if (this.itemMap[item.type] == null){
            this.itemMap[item.type] = new Item(item.id);
        }
        this.itemMap[item.type].addItem(item);
    }
};


