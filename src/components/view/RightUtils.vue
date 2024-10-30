<script setup lang='ts'>
import "../icons/font_4124176_kflw0627fgs/iconfont.css"
</script>
<template>
    <div class="outter">
        <div class="iconfont icon-zhuye"></div>
        <div class="iconfont icon-cog-outline"></div>
        <div class="iconfont icon-replay"></div>
    </div>
</template>
<style lang='less' scoped>
.outter{
    position: fixed;
    right: 20px;
    border: 2px solid #cccc;
    height: 30vh;
    width: 50px;
    border-radius: 50px;
    top: 20%;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
}
.iconfont{
    border: 2px solid #cccc;
    height: 80px;
    width: 40px;
    margin-left: 2.5px;
    border-radius: 40px;
    color: white;
    font-size: 20px;
    line-height: 80px;
    cursor: pointer;
}
.icon-zhuye{
    line-height: 70px;
}
.iconfont:hover{
    background-color: rgb(215, 215, 215);
    color: black;
    transition: 0.3s linear;
}
</style>