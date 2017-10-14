<template>
	<div id="living">
		<headTop head-title="厨房" goBack='true'>
			<!-- <span slot='logo'  class="head_logo"></span> -->
		</headTop>
		<div class="list">
			<div class="content">
				<div class="item1">
					<svg class="icon_style">
            			<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#led'"></use>
        			</svg><div>灯光控制</div>
        		</div>
				<div class="item1"><svg class="icon_style">
            			<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#fan'"></use>
        			</svg><div>排风扇控制</div>
        		</div>
			</div>
			<div class="content">
				<div class="item1">
					<svg class="icon_style">
            			<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#env'"></use>
        			</svg><div>环境监测</div>
        		</div>
			</div>
			<div class="content">
				<div class="item1"><svg class="icon_style">
            			<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#water'"></use>
        			</svg><div>水阀控制</div>
        		</div>
				<div class="item1"><svg class="icon_style">
            			<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#contact'"></use>
        			</svg><div>智能联动</div>
        		</div>
			</div>
		</div>
		

	</div>
</template>

<script >
	import headTop from '../components/header/head'
	export default{
		data(){
			return {

			}
		},
		components:{
			headTop
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
</style>