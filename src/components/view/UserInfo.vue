<template>
  <div class="outter">
    <span><img class="tixing" :src="tixing"></span>
    <span class="line"></span>
    <span class="iconfont icon-24gl-star"></span>
    <img class="userImg" src='../../assets/IMG_20241102_101642.jpg' />
  </div>
</template>
<script setup lang="ts">
import tixing from '../../assets/提醒 (1).svg'
</script>
<style scoped lang="less">
.tixing{
  height: 20px;
  position: relative;
  left: 30px;
  color: white;
  cursor: pointer;
}
.outter {
  box-shadow: 0px 0px 5px white;
  width: 200px;
  float: right;
  height: 50px;
  border: 2px solid #ccc;
  margin-top: 10px;
  border-radius: 20px;
  position: fixed;
  z-index: 100;
  right: 10px;
  background-color: rgba(60, 60, 60, 0.29);
  .line{
    height: 10px;
    position: relative;
    left: 30px;
    bottom: 2.5px;
    width: 1;
    border: 1px solid white;
  }
  .icon-24gl-star {
    position: relative;
    left: 80px;
    bottom: 5px;
    font-size: 18px;
    color: white;
    cursor: pointer;
  }
  .userImg {
    display: inline-block;
    width: 50px;
    height: 35px;
    position: relative;
    left: 100px;
    top: 5px;
    border-radius: 20px;
    border: 1px solid #ccc;
    cursor: pointer;
    max-height: 35px;
  }
}
</style>
