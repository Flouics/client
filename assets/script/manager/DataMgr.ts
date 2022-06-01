import App from "../App";
import BaseClass from "../zero/BaseClass";

/**
 * Created by Administrator on 2017/8/17.
 */
var global = window;
class Data {
    data: { [key: string]: any } = {};
    ids: any[] = [];
    constructor(dataString: string) {
        var data = dataString.split(/\r?\n/);
        var fields = {};
        data[1].split('\t').forEach(function (i: any, k: any) {
            fields[i] = k;
        });
        data.splice(0, 2);

        var result = {}, ids = [], item: any;
        data.forEach(function (k: any) {
            if (k.trim() == '') {
                return;
            }
            k = k.split('\t');
            item = mapData(fields, k);
            result[item.id] = item;
            ids.push(item.id);
        });
        this.data = result;
        this.ids = ids;
    }

    findBy(attr: any, value: any) {
        var result = [];
        var i: any, item: any;
        for (i in this.data) {
            item = this.data[i];
            if (item[attr] == value) {
                result.push(item);
            }
        }
        return result;
    };

    findById(id: number | string) {
        return this.data[id];
    };

    random() {
        var length = this.ids.length;
        var rid = this.ids[Math.floor(Math.random() * length)];
        return this.data[rid];
    };

    getFirst() {
        var rid = this.ids[0];
        return this.data[rid];
    };

    all() {
        return this.data;
    };
};

/**
 * map the array data to object
 *
 * @param 
 * @param 
 * @return 
 * @api private
 */
function mapData(fields: any, item: any) {
    var obj = {};
    for (var k in fields) {
        var va = item[fields[k]];
        // 解析成列表
        if (k.endsWith("List")) {
            if (va.length == 0) {
                va = [];
            }
            else {
                va = va.split(';');
                var temp = [];
                for (var index = 0; index < va.length; index++) {
                    var value = va[index];
                    if (App.toolKit.isNum(value)) {
                        value = Number(value);
                    }
                    temp.push(value);
                }
                va = temp;
            }
        }
        else {
            if (App.toolKit.isNum(va)) {
                va = Number(va);
            }
            else {
                va = va.replace(/\\n|\\r/g, '\n');
            }
        }
        obj[k] = va;
    }
    return obj;
};

export default class DataMgr extends BaseClass {
    hasLoad: boolean = false;
    curLoad: number = 0;
    dataPool:{[key:string]:Data} = {}
    loadTexts = [
        'config'
        , 'bullet_type'
    ];

    callback: Function;
    tag: any;
    maxLoad: number;

    tryLoadAllTable(cb: Function, tag?: any) {
        if (!!this.hasLoad) {
            return true;
        }
        this.hasLoad = true;
        this.curLoad = 0;
        this.callback = cb;
        this.tag = tag;
        this.maxLoad = this.loadTexts.length;

        for (var i = 0; i < this.maxLoad; ++i) {
            this.loadTable(this.loadTexts[i]);
        }
    };

    loadTable(filename: string) {
        var self = this;
        if (self.dataPool[filename]) {
            self.onLoadTable(filename);
            return;
        }
        cc.loader.loadRes('data/' + filename + '', function (err: any, textAsset: any) {
            if (!err) {
                self.dataPool[filename] = new Data(textAsset.text);
                self.onLoadTable(filename);
            }
        });
    };

    onLoadTable(filename: string) {
        this.curLoad += 1;
        cc.log('load file', filename);
        if (this.curLoad == this.maxLoad) {
            if (this.callback) {
                this.callback(this.tag);
            }
        }
    };

    getTable(filename: string) {
        return this.dataPool[filename];
    };
};
