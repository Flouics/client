import App from "../App";

var charStr = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
export default class UUID {    
    static gen(len: number = 16) {
        var chars = charStr.split("");
        var times = new Date().getTime().toString().split("")
        var timeLen = times.length 
        var offset = App.toolKit.getRand(1,20)
        var ret = []
        if (len < timeLen * 2){
            timeLen = Math.floor(len/2)
        } 
        for (let index = timeLen; index >=0; index--) {
            ret[index * 2] = chars[index +  offset] || "x"            
        }
        for (let index = 0; index < len; index++) {
            if (ret[index] == null){
                ret[index] = App.toolKit.getRandFromArray(chars);
            }
        }
        return ret.join("")
    }
}