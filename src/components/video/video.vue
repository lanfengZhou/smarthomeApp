<template>
	<div id="video">
		<headTop head-title="实时监控" goBack='true' v-on:back='stopPlay'></headTop>
		<div class="videoframe">
			<div :class="{zoom_in:status,zoom_out:!status}" @click='startPlay'>
				<img :src="imgsrc" alt="视频获取中.....请检查设备是否在线！！！" class="imgframe"  ref="imgdom">
				<span v-if="!status" class="c_scale"  @click="zoom($event)">
					<svg class="icon_style">
            			<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#esc_allover'"></use>
        			</svg>
				</span>
			</div>
			<div class="dir">
				<div class="item">
					<div class="item_child" @click="refresh">
						<svg class="icon_style">
            				<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#refresh'"></use>
        				</svg><span>刷新</span>
					</div>
					
					<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="icon_style icon_style_up" @click="videoCtrl('up')">
	            		<polyline points="2,13 10,2 18,13 " style="fill:none;stroke:rgb(0,0,0);stroke-width:3;"/>
	       			</svg>
	       			<div class="item_child" @click="allover">
	       				<svg class="icon_style">
            				<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#allover'"></use>
        				</svg><span>全屏</span>
        			</div>
				</div>
				<div class="item">
					<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="icon_style" @click="videoCtrl('left')">
	            		<polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(0,0,0);stroke-width:3"/>
	       			</svg><span class="ctrl">云台控制</span>
	       			<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="icon_style" @click="videoCtrl('right')">
	            		<polyline points="12,18 20,9 12,0" style="fill:none;stroke:rgb(0,0,0);stroke-width:3"/>
	       			</svg>
				</div>
				<div class="item">
					<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="icon_style" @click="videoCtrl('down')">
	            		<polyline points="2,0 10,13 18,0" style="fill:none;stroke:rgb(0,0,0);stroke-width:3"/>
	       			</svg>
				</div>

				
			</div>
		</div>
	</div>	
</template>
<script>
	import headTop from '../../components/header/head'
	import {ptzCtrl} from '../../service/getData'
	export default{
		data(){
			return {
				imgurl:'http://192.168.27.100:8080',
				imgsrc:'',
				cameratimer:'',
				status:'true',
				isplay:true
			}
			
		},
		mounted(){
			this.getImg();
		},
		components:{
			headTop
		},
		methods:{
			getImg(){
				var ele=this.$refs.imgdom;
				var that=this;
				function chagesrc(){
					that.imgsrc=that.imgurl+'/camera/getImage'+new Date().getTime();
					ele.onload=function(){
						if(that.isplay){
							setTimeout(chagesrc,20);
						}	
					}
				}
				this.cameratimer=setTimeout(chagesrc,20);
			},
			startPlay(){
				this.isplay=true;
			},
			stopPlay(){
				this.isplay=false;
			},
			videoCtrl(dir){
				ptzCtrl(dir).then(res =>{})
			},
			refresh(){
				window.location.reload();
			},
			allover(){
				this.status=false;
			},
			zoom(e){
				this.status=true;
			}

		},
		destroyed(){
			alert("wef");
			clearTimeout(this.cameratimer);
		},
		watch:{
			isplay:function(){
				if(this.isplay){
					// this.isplay=false;
					this.getImg();
				}else{
					// this.isplay=true;
				}	
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../style/mixin';
	#video{
		@include allcover;
		@include wh(100%,100%);
	}
	.videoframe{
		@include wh(100%,100%);
		padding-top:3rem;
		/*background-color: #f00;*/
		.zoom_in{
			/*@include allcover_left;*/
			@include wh(100%,60%);
			background-color: #8e8e8e;
			.imgframe{
				@include wh(100%,100%);
			}
		}
		.zoom_out{
			position: fixed;
			top:0;
			right: 0;
			z-index: 1000;
			@include wh(100%,100%);
			background-color: #8e8e8e;
			.imgframe{
				@include wh(100%,100%);
			}
			.c_scale{
				position: absolute;
				@include wh(2rem,2rem);
				bottom: 2rem;
				right:0;
				color: #fff;
				
		}
		}
		
		.dir{
			padding-top: 1rem;
			@include wh(100%,40%);
			@include fj;
			flex-direction: column;
			.item{
				background-color: #e8e8e8;
				text-align: center;
				vertical-align: middle;
				.item_child{
					display: inline-block;
				}
			}
			.ctrl{
				margin: 0 1.2rem;
			}
		}
		.icon_style{
			@include wh(2rem, 2rem);
			vertical-align: middle;
			margin-bottom: .5rem;
			margin-top: 1rem;
			fill: #ccc;
		}
		.icon_style_up{
			margin: 0 4rem;
		}	
	}
</style>