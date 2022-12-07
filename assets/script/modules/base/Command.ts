import App from "../../App";
import Init from "./Init";
import Proxy from "./Proxy";

export default class Command{
    app:App;
    proxy:Proxy;
    constructor(){
        this.app = App.getInstance(App);
    }
    init(){
    }
}
