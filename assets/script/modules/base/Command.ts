import App from "../../App";
import Init from "./Init";

export default class Command{
    app:App;
    constructor(){
        this.app = App.getInstance(App);
    }
    init(){
    }
}
