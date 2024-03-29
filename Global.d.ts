
declare namespace window {
    export let game:{[key:string]:any} = {};
    export let temp;

    export let empty;
    export let deepCopy;
    export let clone;
    export let nullfun;
    export let getProxy;
    export let lang;

    export let timeProxy;
}

declare function empty(arg:T):boolean;
declare function clone(arg:T):T;
declare function deepCopy(arg:T):T;
declare function getProxy(arg:T):T;
declare function nullfun(arg:T):T;
declare function lang(arg:T):T;

declare var timeProxy:T;

