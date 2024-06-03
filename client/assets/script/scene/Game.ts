import { appendFile } from "fs";
import App from "../App";
import SceneBase from "../base/SceneBase";


import { _decorator,Node,Label, director} from 'cc';
const {ccclass, property} = _decorator;
@ccclass("Game")
export default class Game extends SceneBase{
    // use this for initialization
    onLoad () {
        super.onLoad();
    };

    onEnable () {
        super.onEnable();
    };

    start () {
        App.platformMgr.init();
    };

};
