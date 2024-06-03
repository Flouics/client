import App from "../App";
import BaseClass from "../zero/BaseClass";

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
    loadTexts = [
        'config'
        , 'base'
        , 'building'
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
        this.loadFileKeyTables();
    };

    loadFileKeyTables(){
        var self = this;
        cc.loader.loadRes('data/fileKey.json', function (err: any, textAsset: any) {
            if (!err) {
                try {
                    let mapData = textAsset.json                    
                    for (const key in mapData) {
                        if (Object.prototype.hasOwnProperty.call(mapData, key)) {
                            const element = mapData[key];
                            App.asyncTaskMgr.newAsyncTask(() => {
                                self.loadTable(element);
                            })                         
                        }
                    }
                    
                } catch (error) {
                    cc.error("data load failed by name->fileKey.json")
                }                
            }
        });
    }

    loadTable(filename: string) {
        var self = this;
        if (self.dataPool[filename]) {
            self.onLoadTable(filename);
            return;
        }
        cc.loader.loadRes('data/' + filename + '.json', function (err: any, textAsset: any) {
            if (!err) {
                try {
                    let mapData = textAsset.json
                    for (const key in mapData) {
                        if (Object.prototype.hasOwnProperty.call(mapData, key)) {
                            const element = mapData[key];
                            self.dataPool[key] = new Data(element);
                        }
                    }
                    self.onLoadTable(filename);
                } catch (error) {
                    cc.error("data load failed by name->",filename)
                }                
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
    parseData (filename: string){
        var self = this;
        return new Promise((resolve, reject) => {
            cc.loader.loadRes('data/' + filename + '.json', function (err: any, textAsset: any) {
                if (!err) {
                    try {
                        let mapData = textAsset.json
                        for (const key in mapData) {
                            if (Object.prototype.hasOwnProperty.call(mapData, key)) {
                                const element = mapData[key];
                                self.dataPool[key] = new Data(element);
                            }
                        }
                        self.onLoadTable(filename);
                        resolve(self.dataPool[filename])
                    } catch (error) {
                        cc.error("data load failed by name->",filename)
                        reject(null)
                    }                
                }
            });
        });
    }

    async getTable(filename: string) {
        var data = this.dataPool[filename];
        if(data == null){      
            try {
                var ret = await this.parseData(filename);
                return ret as Data
            } catch (error) {
                console.error(error);
                return null;
            }
        }else{
            return this.dataPool[filename];
        }
       
    };
    
    static async findById(filename:string,id: number | string){
        var data = await DataMgr.getInstance(DataMgr).getTable(filename)
        if(data){
            return data.findById(id);
        }else{
            return null;
        }
        
    }
};
