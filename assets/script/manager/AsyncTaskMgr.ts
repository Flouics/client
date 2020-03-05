

export default class AsyncTaskMgr {
    tasks: Function[] = [];
    lowTasks: Function[] = [];
    taskCount: number = 0;
    maxCount: number = 4;
    timeInterval: number = 0.1;
    timeId: number = -1;

    // 单例处理
    static _instance:AsyncTaskMgr = null;
    constructor(){
        AsyncTaskMgr._instance = this;
    }
    static getInstance():AsyncTaskMgr{
        if(AsyncTaskMgr._instance){
            return AsyncTaskMgr._instance
        }else{
            let instance = new AsyncTaskMgr();
            return instance
        }
    }
    static get obj(){
        return AsyncTaskMgr.getInstance()
    } 


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


