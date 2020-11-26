import BaseClass from "../zero/BaseClass";
export default class AsyncTaskMgr extends BaseClass {
    tasks: Function[] = [];
    lowTasks: Function[] = [];
    taskCount: number = 0;
    maxCount: number = 4;
    timeInterval: number = 0.1;
    timeId: number = -1;

    process() {
        var self = this;
        this.timeId = setTimeout(function () {
            var task: Function;
            if (self.tasks.length < 1 || (self.taskCount > 10 && self.lowTasks.length > 0)) {
                self.taskCount = 0;
                task = self.lowTasks.shift();
            } else {
                task = self.tasks.shift();
            }
            if (!!task) {
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

    newAsyncTask(cb: Function, isLow: boolean = false) {
        if (!!cb) {
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

    clear() {
        this.tasks = [];
    };
};


