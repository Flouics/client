//  平台配置
var Config = function () {
    /*
     * 是否测试环境 非正式发布包需要打开
     *  0,	    // 正式服
     *  1,		// 测试服
     *  2,		// 开发服
     */

    this.server_type = 2;

    /*
     * 对应ios和android发送版本id
     */
    this.version = '1.0.0';

    /*
     * 是否需要重启虚拟机的版本
     */
    this.core_version = '0';

    /*
     * 设备ID
     * 微信登录用
     */
    this.device_id = "aa.bb.cc.ddc004";

};

module.exports = function () {
    return new Config();
};



