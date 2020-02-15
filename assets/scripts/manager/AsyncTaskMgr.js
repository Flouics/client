

var AsyncTaskMgr = function () {
    this.tasks = [];
    this.lowTasks = [];
    this.taskCount = 0;
    this.maxCount = 4;
    this.timeInterval = 0.1;
    this.timeId = -1;
};

AsyncTaskMgr.prototype.process = function () {
    var self = this;
    this.timeId = setTimeout(function () {
        var task;
        if (self.tasks.length < 1 || (self.taskCount > 10 && self.lowTasks.length > 0)) {
            self.taskCount = 0;
            task = self.lowTasks.shift();
        } else {
            task = self.tasks.shift();
        }
        if (!!task && typeof task == 'function') {
            task();
            self.process();
        } else {
            if (self.tasks.length > 0 || self.lowTasks.length > 0) {
                cc.error('AsyncTaskMgr process has a error');
                self.process();
            }
            self.timeId = -1;
        }
    }, self.timeInterval);
};

AsyncTaskMgr.prototype.newAsyncTask = function (cb, isLow) {
    if(isLow == undefined) isLow = false;
    if (!!cb && typeof cb == 'function') {
        if (isLow) {
            this.lowTasks.push(cb);
        } else {
            this.tasks.push(cb);
        }
        if (this.timeId == -1) {
            this.process();
        }
    }
};

AsyncTaskMgr.prototype.clear = function () {
    this.tasks = [];
};

module.exports = function () {
    return new AsyncTaskMgr();
};