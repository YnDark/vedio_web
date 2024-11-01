<script lang="ts" setup></script>
<template>
  <div class="outter">
    <span index="1" :style="changeStyle(1)" @click="changeSelect('1')">首页推荐</span>
    <span index="2" :style="changeStyle(2)" @click="changeSelect('2')">搜索详情</span>
    <span index="3" :style="changeStyle(3)" @click="changeSelect('3')">关注</span>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useMainStore } from "../store";
const selectTab = computed(() => useMainStore().selectTab);
console.log(selectTab.value)
let changeStyle = ((index) => {
  return index.toString() === selectTab.value ? {
    backgroundColor: 'white',
    color: 'black'
  } : {
    backgroundColor: '#181818',
    color: 'white' 
  };
});
let changeSelect = function(index){
  useMainStore().changeTab(index);
  console.log(index);
}
</script>
<style lang="less" scoped>
.outter {
  position: fixed;
  z-index: 100;
  left: 10%;
  top: 110px;
  height: 100px !important;
  span {
    margin: 20px 40px;
    border-radius: 10px;
    padding: 10px 30px;
    border: #ccc 2px solid;
    cursor: pointer;
    background-color: #181818;
    color: white;
    transition: 0.4s linear;
  }
  span:hover {
    box-shadow: 0px 0px 5px white;
    opacity: 80%;
  }
}
</style>
