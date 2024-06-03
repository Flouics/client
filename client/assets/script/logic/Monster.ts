import MapMainView from "../modules/map/MapMainView";
import Live from "./Live";
import MonsterMgr from "../manager/MonsterMgr";
import Building from "./Building";
import PoolMgr from "../manager/PoolMgr";
import StateMachine from "./stateMachine/StateMachine";
import DataMgr from "../manager/DataMgr";
import App from "../App";
import { Node } from "cc";
export default class Monster extends Live {
    moveSpeed: number = 180;    //1秒
    data:any = null;
    static _idIndex = 100000;
    _pb_tag:string = PoolMgr.POOL_TAG_ENUM.MONSTER;
    target:Live|Building = null;
    monsterMgr:MonsterMgr = null;
    constructor(mapMainView: MapMainView,monsterType:number,x: number = 0, y: number = 0) {
        super(mapMainView,x,y)
        this.setIdx(Monster);
        this.id = monsterType;
        this.init();
        this.name = "Monster_" +  this.idx;       
    }

    init(){
        this.initData();
        this.monsterMgr = this.mapMainView.monsterMgr;
    }
    async initData(){
        this.data = await App.dataMgr.findById("monster",this.id)
        this.life = this.data.life;
        this.atk = this.data.atk;
    }

    initUI(parent:Node,cb?:Function) {
        super.initUI(parent,cb);
    }

    clear(){
        this.monsterMgr.clearMonster(this.idx);        
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