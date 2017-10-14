<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <svgIcon></svgIcon>
  </div>
</template>

<script>
import svgIcon from './components/svg';
    export default {
      components:{
            svgIcon
        },
    }
</script>

<style lang="scss">
  @import './style/common';
  .router-fade-enter-active, .router-fade-leave-active {
        transition: opacity .3s;
    }
    .router-fade-enter, .router-fade-leave-active {
        opacity: 0;
    }
</style>
