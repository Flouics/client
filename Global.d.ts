
declare namespace window {
    export let game:{[key:string]:any} = {};
    export let temp;
    export let empty;
    export let deepCopy;
    export let clone;
}
declare function empty(arg:T):boolean;
declare function clone(arg:T):T;
declare function deepCopy(arg:T):T;
declare function getProxy(arg:T):T;
