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
				<div class="item1" @click="show('视频')"><svg class="icon_style">
            			<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#video'"></use>
        			</svg><div>视频监控</div>
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
        		<svg class="over_icon_style" @click="ctrlLeds('dLed')">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="dLed"></use>
        		</svg>
        	</div>
        	<div class="item1">
				<svg class="over_icon_style">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#led'"></use>
        		</svg><span>辅灯</span>
        		<svg class="over_icon_style" @click="ctrlLed('fLed')">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="fLed"></use>
        		</svg>
        	</div>
		</div>
		<div class="ctrl" v-if="htitle=='窗帘'">
			<div class="item1">
				<svg class="over_icon_style">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#curtain'"></use>
        		</svg><span>窗帘</span>
        		<svg class="over_icon_style" @click="ctrlLed('curtain')">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="curtain"></use>
        		</svg>
        	</div>
		</div>
		<div class="ctrl" v-if="htitle=='门禁'">
			<div class="i
			tem1">
				<svg class="over_icon_style">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#door'"></use>
        		</svg><span>屋门</span>
        		<svg class="over_icon_style" @click="ctrlLed('door')">
            		<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="door"></use>
        		</svg>
        	</div>
		</div>
		<div class="esc" @click="hide">x</div>
	</div>
	</div>
</template>

<script >
	import headTop from '../components/header/head'
	import {ledCtrl,curtainCtrl} from '../service/getData'
	export default{
		data(){
			return {
				showflag:false,
				htitle:'',
				dLed:'#switchoff',
				fLed:'#switchoff',
				curtain:'#switchoff',
				door:'#switchoff'
			}
		},
		components:{
			headTop
		},
		methods:{
			show(type){
				// console.log("212");
				this.showflag=true;
				console.log(type);
				this.htitle=type;
			},
			hide(){
				this.showflag=false;
			},
			ctrlLeds(){
				console.log("111");
				ledCtrl('3-2').then(res => {
			        		});
			}
		// 	ctrlLed(type){
		// 		if(this[type]=='#switchon'){
		// 			this[type]='#switchoff';
		// 			switch(type){
		// 				case 'dLed' :
		// 					ledCtrl('3-2').then(res => {
		// 	        		});
		// 	        		break;
		// 	        	case 'fLed':
		// 	        		ledCtrl('3-4').then(res => {});
		// 	        		break;
		// 	        	case 'curtain':
		// 	        		curtainCtrl('open').then(res =>{});
		// 	        		break;
		// 			}
					
		// 		}else{
		// 			switch(type){
		// 				case 'dLed' :
		// 					ledCtrl('3-1').then(res => {
		// 	        		});
		// 	        		break;
		// 	        	case 'fLed':
		// 	        		ledCtrl('3-3').then(res => {
		// 	        		});
		// 	        		break;
		// 	        	case 'curtain':
		// 	        		curtainCtrl('close').then(res =>{});
		// 	        		break;
		// 			}
		// 			this[type]='#switchon';
		// 		}
		// 	}
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
	.overlay{
    	@include allcover_left;
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
    	margin-top:5rem;
		@include fj('center');
		flex-flow: column nowrap;

		.item1{
			/*flex-basis: 5rem;*/
			/*background-color: #f00;*/
			/*flex: 1;*/
			margin-top: 60px;
			text-align: center;
			vertical-align: bottom;
		}
    }
</style>