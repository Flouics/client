import MapMainView from "../modules/map/MapMainView";
import MapUtils from "./MapUtils";
import Live from "./Live";
import UIManster from "../modules/map/UIMaster";
import MonsterMgr from "../manager/MonsterMgr";
import Headquarters from "./building/Headquarters";
import Building from "./Building";
import PoolMgr from "../manager/PoolMgr";
import BoxBase from "./BoxBase";
import StateMachine from "./stateMachine/StateMachine";
import App from "../App";
export default class Monster extends Live {
    moveSpeed: number = 180;    //1秒
    static _idIndex = 100000;
    _pb_tag:string = PoolMgr.POOL_TAG_ENUM.MONSTER;
    target:Live|Building = null;
    monsterMgr:MonsterMgr = null;
    constructor(mapMainView: MapMainView, x: number = 0, y: number = 0) {
        super(mapMainView,x,y)
        this.setIdx(Monster);
        this.init();
        this.name = "Monster_" +  this.idx;
    }

    init(){
        this.life = App.toolKit.getRand(10,50);
        this.monsterMgr = this.mapMainView.monsterMgr;
    }
    clear(){
        this.monsterMgr.clear(this.idx);        
    }    
    attackHeadquarters(){
        var target = this.mapMainView.headquarters;
        var nearByPos = this.getNearByPos(target.getRealArea())
        this.target = target;
        this.moveToPos(nearByPos);
    }

    checkAction():boolean{
        if(this.target instanceof Building){
            if(this.checkCrossBuilding(this.target)){
                this.stateMachine.switchState(StateMachine.STATE_ENUM.ATTACK)
                return true;
            }
        }     
        return false;
    }
    checkCrossBuilding(building:Building){
        var area = building.getRealArea();
        var isCross = area.some((pos)=>{
            if(this.getDistance(pos) <= 1){
                return true
            }
        })       
        return !!isCross;
    }

    onEnterState(params:any){
        var stateId = this.stateMachine.state.id;
        switch (stateId) {
            default:
                super.onEnterState(params)
                break;
        }
    }
    
    onState(params:any){
        var stateId = this.stateMachine.state.id;
        switch (stateId) {
            case StateMachine.STATE_ENUM.IDLE:                
                this.attackHeadquarters();
                break;
            case StateMachine.STATE_ENUM.ATTACK:
                this.atkTarget();
                break;
            default:
                super.onState(params)
                break;
        }
    }

    update(){
        this.stateMachine.checkState();
        super.update();
    }
}