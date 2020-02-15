/**
 * Created by Administrator on 2017/8/17.
 */

var Data = function (data) {
    data = data.split(/\r?\n/);
    var fields = {};
    data[1].split('\t').forEach(function (i, k) {
        fields[i] = k;
    });
    data.splice(0, 2);

    var result = {}, ids = [], item;
    data.forEach(function (k) {
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
};

/**
 * map the array data to object
 *
 * @param {Object}
 * @param {Array}
 * @return {Object} result
 * @api private
 */
var mapData = function (fields, item) {
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
                    if (app.toolKit.isNum(value)) {
                        value = Number(value);
                    }
                    temp.push(value);
                }
                va = temp;
            }
        }
        else {
            if (app.toolKit.isNum(va)) {
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


/**
 * find items by attribute
 *
 * @param {String} attribute name
 * @param {String|Number} the value of the attribute
 * @return {Array} result
 * @api public
 */
Data.prototype.findBy = function (attr, value) {
    var result = [];
    var i, item;
    for (i in this.data) {
        item = this.data[i];
        if (item[attr] == value) {
            result.push(item);
        }
    }
    return result;
};

/**
 * find item by id
 *
 * @param id
 * @return {Obj}
 * @api public
 */
Data.prototype.findById = function (id) {
    return this.data[id];
};

Data.prototype.random = function () {
    var length = this.ids.length;
    var rid = this.ids[Math.floor(Math.random() * length)];
    return this.data[rid];
};

Data.prototype.getFirst = function () {
    var rid = this.ids[0];
    return this.data[rid];
};

/**
 * find all item
 *
 * @return {array}
 * @api public
 */
Data.prototype.all = function () {
    return this.data;
};

var DataMgr = function () {
};

DataMgr.prototype.tryLoadAllTable = function (cb, tag) {
    if (!!this.hasLoad) {
        return true;
    }
    this.hasLoad = true;
    this.curLoad = 0;
    this.loadTexts = [
        'config'
        , 'block_type'
        , 'monster_type'
        , 'skill'
        , 'status'
    ];

    this.callback = cb;
    this.tag = tag;
    this.maxLoad = this.loadTexts.length;

    for (var i = 0; i < this.maxLoad; ++i) {
        this.loadTable(this.loadTexts[i]);
    }
};

DataMgr.prototype.loadTable = function (filename) {
    var self = this;
    if (self[filename]) {
        self.onLoadTable(filename);
        return;
    }
    cc.loader.loadRes('data/' + filename + '', function (err, textAsset) {
        if (!err) {
            self[filename] = new Data(textAsset.text);
            self.onLoadTable(filename);
        }
    });
};

DataMgr.prototype.onLoadTable = function (filename) {
    this.curLoad += 1;
    cc.log('load file', filename);
    if (this.curLoad == this.maxLoad) {
        if (this.callback) {
            this.callback(this.tag);
        }
    }
};

DataMgr.prototype.getTable = function (filename) {
    return this[filename];
};

module.exports = function () {
    return new DataMgr();
};