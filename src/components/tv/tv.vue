<template>
	<div id="tvcontrol" class="tvctrl">
		<div class="top">
			<ul>
				<li>
					<div class="power">开关</div><div>设置</div><div class="menu">菜单</div>
				</li>
				<li><div>图片</div><div>音乐</div><div>视频</div></li>
				<li><div>返回</div><div><span class="up">《</span></div><div>功能</div></li>
				<li><div>《</div><div>确认</div><div>》</div></li>
				<li><div>音量＋</div><div><span class="down">》</span></div><div>放大</div></li>
				<li><div>音量－</div><div>快进</div><div>缩小</div></li>
				<li><div>静音</div><div>快退</div><div>菜单</div></li>
			</ul>
		</div>
	</div>
</template>

<script >
	export default{
		data(){
			return {
				order:'',
				timer:'',
				ctrltype:'/run/audio/irControl',
				powerStatus:false
			}
		},
		methods:{
			mouseDown(){
				var that=this;
				this.timer=setTimeout(function(){
					if(that.ctrltype=='/run/audio/irLearn'){
						that.ctrltype='/run/audio/irControl';
						alert('退出学习状态');
						console.log('退出学习状态');
					}else{
						that.ctrltype='/run/audio/irLearn';
						alert('进入学习状态');
						console.log('进入学习状态');
					}
				},3000)
			},
			mouseUp(){
				clearTimeout(this.timer);
			},
			powerCtrl(){
				console.log(this.ctrltype);
				if(this.powerStatus){
					this.powerStatus=false;
					$.post(this.ctrltype,{did:this.topbox_did,key:'on'},function(data){});
				}else{
					this.powerStatus=true;
					$.post(this.ctrltype,{did:this.topbox_did,key:'off'},function(data){})
				}
			},
			sendOrder(orderType){
				$.post(this.ctrltype,{did:this.topbox_did,key:orderType},function(data){

				})
			}
		},
		props:['topbox_did']
	}
</script>
<style lang="scss" scoped>
	@import '../../style/mixin';
	.tvctrl{
		@include wh(70%,100%);
		margin: 1rem auto;
		background-color: #2c2c2c;
		border-radius: 2rem;
		/*padding-top: 1rem;*/
		.top{
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
</style>