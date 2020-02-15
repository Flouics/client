cc.DragonBonesBase = cc.Class({
    extends: cc.Component,

    properties: {
    	b_IsRandomPlay:true,//是否开启随机播放
    	i_starTime:1,//显示界面之后 1 秒后开始播放动画 (随机播放开启生效)
    	i_interval:3,//动画播放间隔 (随机播放开启生效)
    	
    },

    // use this for initialization
    onLoad: function () {
    	var self = this;
    	this._armatureDisplay = this.getComponent(dragonBones.ArmatureDisplay);//动画控件
    	var ArmatureNames = this._armatureDisplay.getArmatureNames();
    	console.log("动画名称 " + JSON.stringify(ArmatureNames));
    	this.l_ActionName = this._armatureDisplay.getAnimationNames(ArmatureNames);//所有动画名称
    	console.log("所有动画名称 " + JSON.stringify(this.l_ActionName));
    	if(this.b_IsRandomPlay){//随机播放

    		this.scheduleOnce(function(){
    			self.playAnimationByIndex(self.getARandomIndex());
    		},self.i_starTime);

    		this.schedule(function(){
    			self.playAnimationByIndex(self.getARandomIndex());
    		}, (self.i_starTime + self.i_interval) );
    	}else{

    	}
    },
    onEnable: function () {
    	// this._armatureDisplay.playAnimation( this.l_ActionName[0], 0 );
    	
    },
    //获取一个随机数	
    getARandomIndex:function(){
    	var i_Random = Math.round(Math.random()*(this.l_ActionName.length)*100 );//
    	console.log("随机数 " + i_Random);
    	i_Random = Math.floor(i_Random/100);
    	return i_Random;
    },
    playAnimationByName:function(s_name, i_num){
    	i_num = i_num?i_num:1;
    	this._armatureDisplay.playAnimation( s_name, i_num );
    },
    playAnimationByIndex:function(index, i_num){
    	i_num = i_num?i_num:1;
    	var s_name = this.l_ActionName[index]?this.l_ActionName[index]:this.l_ActionName[this.l_ActionName.length-1];
    	this._armatureDisplay.playAnimation( s_name, i_num );
    },
});
