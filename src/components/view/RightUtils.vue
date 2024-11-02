<script setup lang='ts'>
import "../icons/font_4124176_kflw0627fgs/iconfont.css"
import pubsub from 'pubsub-js';
import { onMounted ,onUnmounted} from "vue";
import {useMainStore} from '../store'
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
function home(){
    useMainStore().changeTab("4");
    scrollToTop()
    refresh()
    useMainStore().changeTab("1");
}
function refresh(){
    pubsub.publish('refresh');
}
</script>
<template>
    <div class="outter">
        <div class="iconfont icon-zhuye" @click="home()"></div>
        <div class="iconfont icon-cog-outline"></div>
        <div class="iconfont icon-replay" @click="refresh()"></div>
    </div>
</template>
<style lang='less' scoped>
.outter{
    box-shadow: 0px 0px 10px white;
    position: fixed;
    right: 20px;
    border: 2px solid #cccccc1d;
    height: 30vh;
    width: 50px;
    border-radius: 50px;
    top: 20%;
    background-color: rgb(20, 21, 22);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
}
.iconfont{
    height: 5vh;
    width: 40px;
    margin-left: 2.5px;
    border-radius: 40px;
    color: white;
    font-size: 20px;
    line-height: 5vh;
    cursor: pointer;
    background-color: rgba(90, 90, 90, 0.354);
}
.iconfont:hover{
    box-shadow: 0px 0px 5px white;
    background-color: rgb(215, 215, 215);
    color: black;
    transition: 0.3s linear;
}
</style>