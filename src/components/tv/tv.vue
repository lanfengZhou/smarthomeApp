<template>
	<div id="tvcontrol" class="tvctrl">
		<div class="top">
			<ul>
				<li>
					<div class="power" @click="tvCtrl('key1')" @touchstart="touchS($event)" @touchend="touchE($event)">开关</div>
					<div  @click="tvCtrl('key2')">设置</div>
					<div class="menu"  @click="tvCtrl('key3')">菜单</div>
				</li>
				<li>
					<div @click="tvCtrl('key4')">图片</div>
					<div @click="tvCtrl('key5')">音乐</div>
					<div @click="tvCtrl('key6')">视频</div></li>
				<li>
					<div @click="tvCtrl('key7')">返回</div>
					<div  @click="tvCtrl('key8')"><span class="up">《</span></div>
					<div  @click="tvCtrl('key9')">功能</div>
				</li>
				<li>
					<div  @click="tvCtrl('key10')">《</div>
					<div  @click="tvCtrl('key11')">确认</div>
					<div  @click="tvCtrl('key12')">》</div>
				</li>
				<li>
					<div  @click="tvCtrl('key13')">音量＋</div>
					<div  @click="tvCtrl('key14')"><span class="down">》</span></div>
					<div  @click="tvCtrl('key15')">放大</div></li>
				<li>
					<div  @click="tvCtrl('key16')">音量－</div>
					<div  @click="tvCtrl('key17')">快进</div>
					<div  @click="tvCtrl('key18')">缩小</div>
				</li>
				<li>
					<div  @click="tvCtrl('key19')">静音</div>
					<div  @click="tvCtrl('key20')">快退</div>
					<div  @click="tvCtrl('key21')">口</div>
				</li>
			</ul>
		</div>
		<div class="tip">{{msg}}</div>
	</div>
</template>

<script >
	import {tvCtrl,tvLearn} from '../../service/getData'
	export default{
		data(){
			return {
				order:'',
				timer:'',
				// ctrltype:'/run/audio/irControl',
				ctrlStatus:true,
				msg:''
			}
		},
		methods:{
			touchS(e){
				e.preventDefault();
				var that=this;
				this.timer=setTimeout(function(){
					if(!that.ctrlStatus){
						// that.msg="退出学习状态"
						that.ctrlStatus=true;
						that.msg="";
					}else{
						that.msg="进入学习状态"
						that.ctrlStatus=false;
						// e.returnValue = true;
					}
				},3000)
			},
			touchE(e){
				clearTimeout(this.timer);
			},
			tvCtrl(key){
				if(this.ctrlStatus){
					tvCtrl(key).then(res =>{});
					// this.msg=key;
				}else{
					this.msg=key;
					tvLearn(key).then(res =>{})
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '../../style/mixin';
	.tvctrl{
		@include wh(70%,100%);
		margin: 0 auto;
		.top{
			@include wh(100%,auto);
			margin-top: 4rem;
			padding-bottom: 2rem;
			background-color: #2c2c2c;
			border-radius: 2rem;
			li{
				@include wh(100%,3.3rem);
				@include fj('center');
				div{
					height: 2rem;
					flex:1;
					color: #fff;
					text-align: center;
					/*border-radius: 40% 40%;*/
					margin: 1rem 1rem;
					border: 2px solid #000;
					line-height: 2rem;
					span{
						color: #fff;
					}
				}
				
			}
		}
		.power{
			border-radius: 50% 50%;
			background-color: #f00;
		}
		.menu{
			border-radius: 50% 50%;
			background-color: #3190e8;
		}
		.up{
			display: inline-block;
			@include wh(100%,100%);
			transform: rotateZ(90deg);
		}
		.down{
			display: inline-block;
			@include wh(100%,100%);
			transform: rotateZ(90deg);
		}
	}
	.tip{
		position: absolute;
		@include wh(100%,1rem);
		top:4rem;
		left: 0;
		text-align: center;
		line-height: 1rem;
	}
</style>