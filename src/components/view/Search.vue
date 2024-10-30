<script setup lang="ts">
import '../../assets/font_4124176_g7539sgz4ff/iconfont.css'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import {useMainStore} from '../store'
import { computed } from '@vue/reactivity';
let searchValue = ref<string>('')
interface result {
  result_type: string
  data: searchdata[]
}
interface searchdata {
  arcurl: string
  author: string
  bvid: string
  description: string
  pic: string
  title: string
  tag: string
  upic: string
  video_review: Number
  like: Number
}
let data = ref<searchdata[]>([])
let isReady = ref<Boolean>(false)
let selectType = computed(()=>{
  return useMainStore().selectTab
})
let page = 1;
function jump(event: string){
  window.open(event);
}
async function searchVedio() {
  useMainStore().changeTab("2");
  data.value = [];
  await getSearchRes();
  await getSearchRes();
}
async function getSearchRes(){
  await axios
    .get('/x/web-interface/wbi/search/all/v2', {
      params: {
        keyword: searchValue.value,
        page: page,
      },
      withCredentials: true,
    })
    .then(res => {
      console.log(res)
      isReady.value = true
      if(data.value === null){
        data.value = res.data.data.result[11].data
      }
      else{
        data.value.push(...res.data.data.result[11].data)
      }
      page++
      console.log(data.value)
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
      class="iconfont icon-sousuo"
    />
    <!-- 搜索类型
    <div class="selectType">
      <select v-model="selectType">
        <option :value="ix" v-for="(type, ix) in data">
          {{ type.result_type }}
        </option>
      </select>
    </div> -->

    <div class="show"  v-if="selectType === '2'">
      <!-- v-for="(item, index) in data" :key="index"  -->
      <span v-for="(v, id) in data" :key="id" class="card" @click="jump(v.arcurl)">
        <img class="vedio" :src="v.pic" :href="v.arcurl" />
        <!-- <p class="title" v-if="v.title.length > 15">
          {{ v.title.slice(0, 14) + '...' }}
        </p> -->
        <p class="title"><span v-html="v.title"></span></p>
        <div class="ownerCard">
          <img class="owner" :src="v.upic" alt="" />
          <p class="ownerName"><span v-html="v.author"></span></p>
        </div>
        <span class="bottom">
          播放量：
          <span v-html="v.video_review"></span>
        </span>
        <span class="bottom">点赞量：
          <span v-html="v.like"></span>
        </span>
      </span>
    </div>
  </div>
</template>

<style scoped lang="less">
.outter {
  height: 100px;
  text-align: center;
  input {
    height: 50px;
    width: 50vw;
    position: relative;
    border-radius: 10px;
    padding-left: 20px;
    color: black;
  }
  input:hover {
    opacity: 80%;
    transition: 0.1s linear;
  }
  .vedio {
    width: 100px;
  }
  .owner {
    width: 100px;
  }
  .show {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    .card {
      .ownerCard {
        width: 200px;
        padding-left: 10px;
      }
      text-align: center;
      // border: #ccc 1px solid;
      padding: 10px 10px;
      width: 350px;
      height: 350px;
      position: relative;
      .vedio {
        width: 300px;
        border-radius: 10px;
        margin: 10px 10px;
        max-height: 150px;
        min-height: 180px;
        overflow: hidden;
      }
      .ownerName {
        margin: 20px 0;
      }
      .owner {
        border-radius: 40px;
        width: 40px;
        position: absolute;
        left: 20px;
        bottom: 50px;
      }
    }
    .card:hover {
      opacity: 80%;
      background-color: #515151;
      transition: 0.2s linear;
      cursor: pointer;
    }
  }
}
.title {
  color: white;
  font-size: 16px;
  margin: 10px 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bottom {
  bottom: 10px;
  font-size: 12px;
  margin: 10px 10px;
}
</style>
