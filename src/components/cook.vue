<template>
	<div id="living">
		<headTop head-title="厨房" goBack='true'>
			<!-- <span slot='logo'  class="head_logo"></span> -->
		</headTop>
		<div class="list">
			<div class="content">
				<div class="item1" @click="show('灯光')">
					<svg class="icon_style">
            			<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#led'"></use>
        			</svg><div>灯光控制</div>
        		</div>
				<div class="item1" @click="show('排风扇')"><svg class="icon_style">
            			<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#fan'"></use>
        			</svg><div>排风扇控制</div>
        		</div>
			</div>
			<div class="content">
				<div class="item1" @click="show('环境')">
					<svg class="icon_style">
            			<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#env'"></use>
        			</svg><div>环境监测</div>
        		</div>
			</div>
			<div class="content">
				<div class="item1" @click="show('水阀')"><svg class="icon_style">
            			<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#water'"></use>
        			</svg><div>水阀控制</div>
        		</div>
				<div class="item1" @click="show('智能联动')"><svg class="icon_style">
            			<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#contact'"></use>
        			</svg><div>智能联动</div>
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
        		<svg class="over_icon_style" @click="ctrl('dLed')">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="dLed"></use>
        		</svg>
        	</div>
		</div>
		<div class="ctrl" v-if="htitle=='排风扇'">
			<div class="item1">
				<svg class="over_icon_style">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#fan'"></use>
        		</svg><span>排风扇</span>
        		<svg class="over_icon_style" @click="ctrl('fan')">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="fan"></use>
        		</svg>
        	</div>
		</div>
		<div class="ctrl" v-if="htitle=='环境'">
			<div class="item1">
				<svg class="over_icon_style">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#leak'"></use>
        		</svg><span>水浸:{{leak}}</span>
        	</div>
        	<div class="item1">
        		<svg class="over_icon_style">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#smoke'"></use>
        		</svg><span>烟雾:{{smoke}}</span>
        	</div>
        	<div class="item1">
        		<svg class="over_icon_style">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#gas'"></use>
        		</svg><span>燃气:{{gas}}</span>
        	</div>
        	<div class="item1">
        		<svg class="over_icon_style">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#led'"></use>
        		</svg><span>报警灯</span>
        		<svg class="over_icon_style switch_icon" @click="ctrl('alarm')">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="alarm"></use>
        		</svg>
        	</div>
		</div>
		<div class="ctrl" v-if="htitle=='水阀'">
			<div class="item1">
				<svg class="over_icon_style">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#water'"></use>
        		</svg><span>水阀</span>
        		<svg class="over_icon_style" @click="ctrl('valve')">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="valve"></use>
        		</svg>
        	</div>
		</div>
		<div class="ctrl" v-if="htitle=='智能联动'">
			<div class="item1">
				<p>=>水浸联动关闭水阀</p>
        	</div>
        	<div class="item1">
        		<p>=>烟雾联动报警灯</p>
        	</div>
        	<div class="item1">
        		<p>=>燃气联动风扇</p>
        	</div>
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
	import {ledCtrl,curtainCtrl,commonIoCtrl,getIoState} from '../service/getData'
	export default{
		data(){
			return {
				showflag:false,
				htitle:'',
				dLed:'#switchoff',
				alarm:'#switchoff',
				fan:'#switchoff',
				valve:'#switchoff',
				leak:' ',
				smoke:' ',
				gas:'',
				th_timer:''
			}
		},
		components:{
			headTop
		},
		methods:{
			show(type){
				// console.log("212");
				this.showflag=true;
				this.htitle=type;
				if(type=='环境'){
					let that=this;
					// that.="ffs";
					function getData(){
						getIoState().then(res => {
							// this.tempValue=res;
							that.leak=res.leak?'"报警"':'"正常"';
							that.smoke=res.smoke?'"报警"':'"正常"';
							that.gas=res.gas?'"报警"':'"正常"';
						});
						that.th_timer=setTimeout(getData,1000);
					}
					getData();
				}
			},
			hide(){
				this.showflag=false;
				clearTimeout(this.th_timer);
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
							ledCtrl('3-5').then(res => {
			        		});
			        		break;
			        	case 'fan':
			        		commonIoCtrl('fan','on').then(res =>{});
			        		break;
			        	case 'valve':
			        		commonIoCtrl('valve','on').then(res =>{});
			        		break;
			        	case 'alarm':
			        		commonIoCtrl('alarm','on').then(res =>{});
			        		break;
					}
				}else{
					switch(type){
						case 'dLed' :
							ledCtrl('3-6').then(res => {
			        		});
			        		break;
			        	case 'fan':
			        		commonIoCtrl('fan','off').then(res =>{});
			        		break;
			        	case 'valve':
			        		commonIoCtrl('valve','off').then(res =>{});
			        		break;
			        	case 'alarm':
			        		commonIoCtrl('alarm','off').then(res =>{});
			        		break;
					}
				}
				
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
		margin-left: 3rem;
	}
	.switch_icon{}
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
    	margin-top:4rem;
		@include fj('center');
		flex-flow: column nowrap;

		.item1{
			/*flex-basis: 5rem;*/
			/*background-color: #f00;*/
			/*flex: 1;*/
			margin-top: 3rem;
			text-align: left;
			vertical-align: bottom;
		}
    }
</style>