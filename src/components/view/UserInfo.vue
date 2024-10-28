<template>
  <div class="outter">
    <span class="icon-24gl-star"></span><span class="userImg" src="" />
  </div>
</template>
<script setup lang="ts">
import '../../assets/font_4124176_g7539sgz4ff/iconfont.css'
</script>
<style scoped lang="less">
.outter {
  float: right;
  width: 200px;
  height: 50px;
  border: 1px solid #ccc;
  margin-top: 10px;
  border-radius: 20px;
  position: fixed;
  left: 70vw;
  .icon-24gl-star {
    position: relative;
    left: 120px;
    bottom: 5px;
  }
  .userImg {
    display: inline-block;
    width: 50px;
    height: 35px;
    position: relative;
    left: 140px;
    top: 5px;
    border-radius: 20px;
    border: 1px solid #ccc;
    cursor: pointer;
    background-image: url('../../assets/1726290689529.jpg');
    background-repeat: no-repeat;
    background-size: 100px;
    background-origin: content-box;
    background-clip: border-box;
  }
}
</style>
