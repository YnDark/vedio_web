<template>
  <div class="outter">
    <span class="userImg" />
  </div>
</template>
<script setup lang="ts">
import '../../assets/font_4124176_g7539sgz4ff/iconfont.css'
</script>
<style scoped lang="scss">
.outter {
  width: 200px;
  float: right;
  height: 50px;
  border: 2px solid #ccc;
  margin-top: 10px;
  border-radius: 20px;
  position: fixed;
  z-index: 100;
  right: 10px;
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
