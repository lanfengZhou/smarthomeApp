<template>
	<div id="living">
		<headTop head-title="客厅" goBack='true'>
			<!-- <span slot='logo'  class="head_logo"></span> -->
		</headTop>
		<div class="list">
			<div class="content">
				<div class="item1" @click="show('灯光')">
					<svg class="icon_style">
            			<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#led'"></use>
        			</svg><div>灯光控制</div>
        		</div>
				<div class="item1" @click="show('窗帘')"><svg class="icon_style">
            			<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#curtain'"></use>
        			</svg><div>窗帘控制</div>
        		</div>
			</div>
			<div class="content">
				<div class="item1" @click="show('门禁')"><svg class="icon_style">
            			<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#door'"></use>
        			</svg><div>门禁控制</div>
        		</div>
				<div class="item1" @click="show('数码相框')">
					<svg class="icon_style">
            			<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#tv'"></use>
        			</svg><div>数码相框</div>
        		</div>
			</div>
			<div class="content">
				<div class="item1" @click="show('环境')">
					<svg class="icon_style">
            			<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#th'"></use>
        			</svg><div>环境检测</div>
        		</div>
				<div class="item1" @click="show('安防')"><svg class="icon_style">
            			<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#video'"></use>
        			</svg><div>智能安防</div>
        		</div>
			</div>
		</div>
		
	<div :class="{overlay:true,overlayEnter:showflag,overlayLeave:!showflag}">
		<headTop :head-title='htitle'>
		</headTop>
		<div class="ctrl" v-if="htitle=='灯光'">
			<div class="item1">
				<svg class="over_icon_style">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#led'"></use>
        		</svg><span>吊灯</span>
        		<svg class="over_icon_style switch_icon" @click="ctrl('dLed')">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="dLed"></use>
        		</svg>
        	</div>
        	<div class="item1">
				<svg class="over_icon_style">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#led'"></use>
        		</svg><span>辅灯</span>
        		<svg class="over_icon_style switch_icon" @click="ctrl('fLed')">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="fLed"></use>
        		</svg>
        	</div>
		</div>
		<div class="ctrl" v-if="htitle=='窗帘'">
			<div class="item1">
				<svg class="over_icon_style">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#curtain'"></use>
        		</svg><span>窗帘</span>
        		<svg class="over_icon_style switch_icon" @click="ctrl('curtain')">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="curtain"></use>
        		</svg>
        	</div>
		</div>
		<div class="ctrl" v-if="htitle=='门禁'">
			<div class="item1">
				<svg class="over_icon_style">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#door'"></use>
        		</svg><span>屋门</span>
        		<svg class="over_icon_style switch_icon" @click="ctrl('door')">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="door"></use>
        		</svg>
        	</div>
		</div>
		<div class="ctrl" v-if="htitle=='环境'">
			<div class="item1">
				<svg class="over_icon_style">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#temp'"></use>
        		</svg><span>温度(℃):{{tempValue}}</span>
        	</div>
        	<div class="item1">
        		<svg class="over_icon_style">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#humi'"></use>
        		</svg><span>湿度(%):{{humiValue}}</span>
        	</div>
		</div>
		<div class="ctrl" v-if="htitle=='安防'">
			<div class="item1">
				<svg class="over_icon_style">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#button'"></use>
        		</svg><span>报警按钮:{{buttonValue}}</span>
        	</div>
        	<div class="item1">
        		<svg class="over_icon_style">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#irSensor'"></use>
        		</svg><span>人体红外:{{irSensorValue}}</span>
        	</div>
        	<div class="item1">
        		<svg class="over_icon_style">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#irCurtain'"></use>
        		</svg><span>红外幕帘:{{irCurtainValue}}</span>
        	</div>
        	<div class="item1 video" @click="preview">
        		<router-link :to="'/video'">
        			<svg class="over_icon_style">
            			<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#video'"></use>
        			</svg><span>实时视频(点击查看)</span>
        		</router-link>	
        	</div>
		</div>
		<div class="ctrl" v-if="htitle=='数码相框'">
			<tv></tv>
		</div>
		<div class="item1">
			<div class="esc" @click="hide">x</div>
		</div>
	</div>
	</div>
</template>

<script >
	import headTop from '../components/header/head'
	import tv from '../components/tv/tv'
	import {ledCtrl,curtainCtrl,doorCtrl,getTH,getProtect} from '../service/getData'
	export default{
		data(){
			return {
				showflag:false,
				htitle:'',
				dLed:'#switchoff',
				fLed:'#switchoff',
				curtain:'#switchoff',
				door:'#switchoff',
				tempValue:' ',
				humiValue:' ',
				buttonValue:'',
				irSensorValue:'',
				irCurtainValue:'',
				th_timer:'',
				protect_timer:''
			}
		},
		components:{
			headTop,
			tv
		},
		methods:{
			show(type){
				// console.log("212");
				this.showflag=true;
				this.htitle=type;
				let that=this;
				if(type=='环境'){
					// that.tempValue="ffs";
					function getData(){
						getTH().then(res => {
							// this.tempValue=res;
							that.tempValue=res.temp;
							that.humiValue=res.humi;
						});
						that.th_timer=setTimeout(getData,1000);
					}
					getData();
				}else if(type=='安防'){
					function getPdata(){
						getProtect().then(res => {
							that.buttonValue=res.button=='true'?'打开':'关闭';
							that.irSensorValue=res.irSensor=='true'?'有人':'没人';
							that.irCurtainValue=res.irCurtain=='true'?'打开':'关闭';
						})
						that.protect_timer=setTimeout(getPdata,1000);
					}
					getPdata();
				}
			},
			hide(){
				this.showflag=false;
				clearTimeout(this.th_timer);
				clearTimeout(this.protect_timer);
			},
			ctrl(type){
				if(this[type]=='#switchon'){
					this[type]='#switchoff';
					this.ctrlType(type,'off');
				}else{
					this.ctrlType(type,'on');
					this[type]='#switchon';
				}
			},
			ctrlType(type,status){
				if(status=='on'){
					switch(type){
						case 'dLed' :
							ledCtrl('3-1').then(res => {
			        		});
			        		break;
			        	case 'fLed':
			        		ledCtrl('3-3').then(res => {});
			        		break;
			        	case 'curtain':
			        		curtainCtrl('open').then(res =>{});
			        		break;
			        	case 'door':
			        		doorCtrl('on').then(res =>{});
			        		break;
					}
				}else{
					switch(type){
						case 'dLed' :
							ledCtrl('3-2').then(res => {
			        		});
			        		break;
			        	case 'fLed':
			        		ledCtrl('3-4').then(res => {
			        		});
			        		break;
			        	case 'curtain':
			        		curtainCtrl('close').then(res =>{});
			        		break;
			        	case 'door':
			        		doorCtrl('off').then(res =>{});
			        		break;
					}
				}
				
			},
			preview(){
				this.showflag=false;
				clearTimeout(this.protect_timer);
			}
		},
		watch:{
			htitle:function(){
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../style/mixin';
	#living{
		overflow-y: auto;
	}
	.list{
		padding-top: 3rem;
		@include fj;
		flex-flow: column wrap;
	}
	.content{
		/*background-color: #ff0;*/
		/*padding-top: 3rem;*/
		margin-top:4rem;
		@include fj;
		flex-flow: row wrap;
		.item1{
			/*flex-basis: 5rem;*/
			/*background-color: #f00;*/
			flex: 1;
			text-align: center;
			align-self: bottom;
		}
	}
	.icon_style{
		@include wh(2rem, 2rem);
		margin-bottom: .5rem;
		margin-top: .5rem;
		fill: #ccc;
	}
	.over_icon_style{
		@include wh(3rem, 3rem);
		vertical-align: bottom;
	}
	.switch_icon{
		margin-left: 3rem;
		margin-bottom: -.7rem;
	}
	.overlay{
    	position: fixed;
    	top:0;
    	overflow-y: auto;
    	@include wh(100%,100%);
    	z-index:500;
    	background:rgba(200,200,200,1);
    	transform: translateY(-100%);
		-moz-transform: translateY(-100%); /* Firefox 4 */
		-webkit-transform: translateY(-100%); /* Safari 和 Chrome */
		-o-transform: translateY(-100%); /* Opera */
		.esc{
	    	@include cl;
	    	@include sc(2rem,#000);
	    	bottom: 50px;
	    	width: 32px;
	        height: 32px;
	  		text-align: center;
	  		line-height: 26px;
	    	border: 1px solid #000;
	    	border-radius: 40%;
	    }	
    }
    .overlayEnter{
    	transition: all 1s;
		transform: translateY(0);
		-moz-transform: translateY(0); /* Firefox 4 */
		-webkit-transform: translateY(0); /* Safari 和 Chrome */
		-o-transform: translateY(0); /* Opera */	
    }
    .overlayLeave{
    	transition: all 1s;
		transform: translateY(-100%);
		-moz-transform: translateY(-100%); /* Firefox 4 */
		-webkit-transform: translateY(-100%); /* Safari 和 Chrome */
		-o-transform: translateY(-100%); /* Opera */	
    }
    .ctrl{
    	@include wh(100%,100%);
		@include fj(center);
		flex-flow: column nowrap;

		.item1{
			text-align: left;
			margin-left: 3rem;
			margin-bottom: 3rem;
		}
    }
    .video{
    	text-align: center!important;
    }
</style>