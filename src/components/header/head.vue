<template>
	<header id="head_top">
		<!-- <?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1507878619815" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="997" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><style type="text/css"></style></defs><path d="M65.290005 143.465482l0 67.010183L958.708971 210.475665l0-67.010183L65.290005 143.465482zM65.290005 880.533494 958.708971 880.533494l0-67.008136L65.290005 813.525358 65.290005 880.533494zM65.290005 545.505092 958.708971 545.505092l0-67.008136L65.290005 478.496955 65.290005 545.505092z" p-id="998" fill="#ffffff"></path></svg> -->
		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0">
	    	<defs>
	    		<symbol viewBox="0 0 1024 1024" id="msite"><path d="M65.290005 143.465482l0 67.010183L958.708971 210.475665l0-67.010183L65.290005 143.465482zM65.290005 880.533494 958.708971 880.533494l0-67.008136L65.290005 813.525358 65.290005 880.533494zM65.290005 545.505092 958.708971 545.505092l0-67.008136L65.290005 478.496955 65.290005 545.505092z" p-id="998" fill="#ffffff"></path></symbol>
	    	</defs>
	    </svg>
	   <!--  <svg class="icon_style" @click='roomSelect'>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#msite'"></use>
        </svg> -->
		<!-- <slot name='logo'></slot> -->
		<section class="head_goback" v-if="goBack" @click="back">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:3"/>
            </svg>
        </section>
        <section v-else-if="showSide">
        	<svg class="icon_style" @click='showSlider'>
            	<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#msite'"></use>
        	</svg>
        </section>
		<section class="title_head ellipsis" v-if="headTitle">
            <span class="title_text">{{headTitle}}</span>
        </section>
	</header>
</template>

<script>
	export default{
		data(){
			return{

			}
		},
		methods:{
			back(){
				this.$router.go(-1);
				// alert(this.timer);
				this.$emit('back');
			},
			showSlider(){
				this.$emit('showSlider');
			}
		},
		props: ['headTitle', 'goBack','showSide','timer'],
	}
</script>
<style lang="scss" scoped>
	@import '../../style/mixin';
	#head_top{
		background-color: $blue;
		position: fixed;
		z-index: 100;
		left: 0;
		top:0;
		@include wh(100%,3rem);
	}
	.icon_style{
			@include wh(2rem, 2rem);
			margin-bottom: .5rem;
			margin-top: .5rem;
			fill: #ccc;
		}
	 .head_goback{
        left: 0.4rem;
        @include wh(0.6rem, 1rem);
        line-height: 3rem;
        margin-left: .4rem;
    }
	 .title_head{
        @include center;
        width: 50%;
        color: #fff;
        text-align: center;
        .title_text{
            @include sc(1.5rem, #fff);
            text-align: center;
            /*font-weight: bold;*/
        }
    }
</style>