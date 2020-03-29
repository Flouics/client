import Hero from "../../logic/Hero";
import UILive from "./UILive";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIHero extends UILive {    
    _baseUrl = "texture/monster/";
}