<template>
	<div class="home">
		<headTop v-on:showSlider="showOverlay" head-title="智能家居系统" showSide='true'></headTop>
		<siderBar :class="{siderbar:true,siderbarEnter:showflag,siderbarLeave:!showflag}" v-on:roomSelect="hideOverlay"></siderBar>
		<div class="overlay"  v-if="showflag" @click="hideOverlay"></div>
	</div>
</template>

<script>
	import headTop from '../components/header/head'
	import siderBar from '../components/siderbar/siderbar'
	export default{
		data(){
			return{
				showflag:false
			}
		},
		components:{
			headTop,
			siderBar
		},
		mounted(){
			// this.showflag=false;
		},
		methods:{
			reload(){
				window.location.reload();
			},
			showOverlay(){
				// console.log("212");
				this.showflag=true;
			},
			hideOverlay(){
				this.showflag=false;
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '../style/mixin';
	.home{
		@include wh(100%,100%);

		/*background-color: #f00;*/
    	background: url("../assets/home.jpg") no-repeat center; 
    	background-size:100% auto;
	}
	.head_logo{
        left: 0.4rem;
        font-weight: 400;
        @include sc(1.5rem, #fff);
        /*@include wh(2.3rem, 0.7rem);*/
        @include center;
    }
    .overlay{
    	@include allcover_left;
    	@include wh(100%,100%);
    	z-index:500;
    	background:rgba(168,168,168,0.5);
    }
    .siderbar{
    	@include wh(50%,100%);
    	@include allcover_left;
    	background-color: #2c2c2c;
    	z-index:1000;
    	transform: translateX(-100%);
		-moz-transform: translateX(-100%); /* Firefox 4 */
		-webkit-transform: translateX(-100%); /* Safari 和 Chrome */
		-o-transform: translateX(-100%); /* Opera */	
    	
    }
    .siderbarEnter{
    	transition: all 1s;
		transform: translateX(0);
		-moz-transform: translateX(0); /* Firefox 4 */
		-webkit-transform: translateX(0); /* Safari 和 Chrome */
		-o-transform: translateX(0); /* Opera */	
    }
    .siderbarLeave{
    	transition: all 1s;
		transform: translateX(-100%);
		-moz-transform: translateX(-100%); /* Firefox 4 */
		-webkit-transform: translateX(-100%); /* Safari 和 Chrome */
		-o-transform: translateX(-100%); /* Opera */	
    }
    .content{}
</style>