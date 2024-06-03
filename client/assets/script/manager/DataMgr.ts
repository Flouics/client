import { js, resources } from "cc";
import App from "../App";
import BaseClass from "../zero/BaseClass";
import { clone, empty } from "../Global";
import Debug from "../utils/Debug";

/**
 * Created by Administrator on 2017/8/17.
 */
var global = window;
class Data {
    data: { [key: string]: any } = {};
    list:any[] = [];
    ids: any[] = [];
    constructor(data:Object) {
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                const element = data[key];
                this.data[element.id] = element;
                this.list.push(element)
                this.ids.push(element.id)
            }
        }
    }

    findBy(attr: any, value: any) {
        var result = [];
        var i: any, item: any;
        for (i in this.data) {
            item = this.data[i];
            if (item[attr] == value) {
                result.push(clone(item));
            }
        }
        return result;
    };

    findById(id: number | string) {
        return clone(this.data[id]);
    };

    random() {
        var length = this.ids.length;
        var rid = this.ids[Math.floor(Math.random() * length)];
        return clone(this.data[rid]);
    };

    getFirst() {
        var rid = this.ids[0];
        return clone(this.data[rid]);
    };

    all() {
        return this.data;
    };
};

export default class DataMgr extends BaseClass {
    hasLoad: boolean = false;
    curLoad: number = 0;
    dataPool:{[key:string]:Data} = {}
    fileKeyMap:{[key:string]:string} = {};
    loadTexts = [];

    callback: Function;
    tag: any;
    maxLoad: number;
    init() {

    }

    tryLoadAllTable(cb: Function, tag?: any) {
        if (!!this.hasLoad) {
            return true;
        }
        this.hasLoad = true;
        this.curLoad = 0;
        this.callback = cb;
        this.tag = tag;
        this.maxLoad = this.loadTexts.length;

        var self = this;
        resources.load('data/fileKey', function (err: any, textAsset: any) {
            if (!err) {
                try {        
                    let mapData = textAsset.json       
                    self.fileKeyMap = mapData;   
                    for (var i = 0; i < self.maxLoad; ++i) {
                        self.loadTable(self.loadTexts[i]);
                    }
                    self.loadFileKeyTables();                                          
                } catch (error) {
                    Debug.error("data load failed by name->fileKey.json")
                }                
            }
        });
    }

    loadFileKeyTables(){
        var self = this;
        var mapData = self.fileKeyMap;
        for (const key in mapData) {
            if (Object.prototype.hasOwnProperty.call(mapData, key)) {
                const element = mapData[key];
                App.asyncTaskMgr.newAsyncTask(() => {
                    self.loadTable(element);
                })                         
            }
        }           
    }

    loadTable(keyName: string) {
        var self = this;
        if (self.dataPool[keyName]) {
            self.onLoadTable(keyName);
            return;
        }
        var fileName = self.fileKeyMap[keyName]
        if (empty(fileName)) {            
            Debug.warn(js.formatStr("cannot find table key: %s",keyName));
            return;
        }
        resources.load('data/' + fileName, function (err: any, textAsset: any) {
            if (!err) {
                try {
                    let mapData = textAsset.json
                    for (const key in mapData) {
                        if (Object.prototype.hasOwnProperty.call(mapData, key)) {
                            const element = mapData[key];
                            self.dataPool[key] = new Data(element);
                        }
                    }
                    self.onLoadTable(keyName);
                } catch (error) {
                    Debug.error("data load failed by name->",keyName)
                }                
            }
        });
    };

    onLoadTable(keyName: string) {
        this.curLoad += 1;
        Debug.log('load file', keyName);
        if (this.curLoad == this.maxLoad) {
            if (this.callback) {
                this.callback(this.tag);
            }
        }
    };

    parseData (keyName: string){
        var self = this;
        return new Promise((resolve, reject) => {
            var fileName = self.fileKeyMap[keyName]
            resources.load('data/' + fileName, function (err: any, textAsset: any) {
                if (!err) {
                    try {
                        let mapData = textAsset.json
                        for (const key in mapData) {
                            if (Object.prototype.hasOwnProperty.call(mapData, key)) {
                                const element = mapData[key];
                                self.dataPool[key] = new Data(element);
                            }
                        }
                        self.onLoadTable(keyName);
                        resolve(self.dataPool[keyName])
                    } catch (error) {
                        Debug.error("data load failed by name->",keyName)
                        reject(null)
                    }                
                }
            });
        });
    }

    async getTable(keyName: string) {
        var data = this.dataPool[keyName];
        if(data == null){      
            try {
                var ret = await this.parseData(keyName);
                return ret as Data
            } catch (error) {
                console.error(error);
                return null;
            }
        }else{
            return this.dataPool[keyName];
        }       
    };
    
    async findById(filename:string,id: number){
        var data = await this.getTable(filename)
        if(data){
            return data.findById(id);
        }else{
            return null;
        }
        
    }
};
