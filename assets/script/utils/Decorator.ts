import "reflect-metadata";
export const SerializeMetaKey = "serialize";

//序列化装饰器
export function serialize(name?: string) {
    return (target: Object, property: string): void => {
        Reflect.defineMetadata(SerializeMetaKey, name || property, target, property);
    };
}

//序列化
export function objToJson(obj:Object): any {
    const ret = {};
    Object.keys(obj).forEach( property => {
        const serialize = Reflect.getMetadata(SerializeMetaKey, obj, property);
        if (serialize) {
            if (obj[property] instanceof Element) {
                ret[serialize] = obj[property].objToJson();
            } else {
                ret[serialize] = obj[property];
            }
        }
    });
    return JSON.stringify(ret);
}

//反序列化
export function jsonToObj(obj:Object,json:string) {
    try {
        let json2obj = JSON.parse(json);
        Object.keys(obj).forEach( property => {
            const serialize = Reflect.getMetadata(SerializeMetaKey, obj, property);
            if (serialize) {
                if (obj[property] instanceof Element) {
                    obj[property].jsonToObj(obj[serialize]);
                } else {
                    obj[property] = obj[serialize];
                }
            }
        });
    } catch (error) {
        cc.error("fromJson is Failed");
    }
}