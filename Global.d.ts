
declare namespace window {
    export let game:{[key:string]:any} = {};
    export let temp;
    export let empty = function(value:any){
        if(!!value){
            return false
        }
        if(typeof(value) == "string"){
            return value == ""
        }else{
            return !value
        }

    }
}

