<script setup lang="ts">
import '../../assets/font_4124176_g7539sgz4ff/iconfont.css'
import axios from 'axios'
let searchValue: String = ''
async function searchVedio() {
  console.log(searchValue)
  await axios
    .get('http://127.0.0.1:6001/anime/search/' + searchValue)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}
</script>
<template>
  <div class="outter">
    <input
      type="text"
      placeholder="搜索"
      v-model="searchValue"
      v-on:keyup.enter="searchVedio()"
    />
    <span class="iconfont icon-sousuo"></span>
  </div>
</template>

<style scoped lang="less">
.outter {
  width: 100%;
  height: 100px;
  position: relative;
  input {
    height: 50px;
    width: 50%;
    position: absolute;
    border-radius: 10px;
    top: 10px;
    left: 25%;
    padding-left: 20px;
  }
  .iconfont {
    position: absolute;
    top: 23px;
    left: 72%;
  }
}
</style>
