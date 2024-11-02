<script setup lang="ts">
import axios from 'axios'
import { ref, computed, onMounted } from 'vue'
import { useMainStore } from '../store'
import { ActivityItem } from '../interface/index'
import { VedioType } from '../VedioType'
import PubSub from 'pubsub-js'
let selectTab = computed(() => {
  return useMainStore().selectTab
})
let data = ref<ActivityItem[]>([])
function jump(item:ActivityItem){
  window.open(item.modules.module_dynamic.major.archive.jump_url)
}

onMounted(() => {
    init();
    PubSub.subscribe('refresh',async()=>{
    if(useMainStore().selectTab == "3"){
      data.value = [];
      init();
    }
});
})
async function init(){
  await axios
    .get('/Bew/x/polymer/web-dynamic/v1/feed/all', { withCredentials: true })
    .then(res => {
      data.value = res.data.data.items
      console.log(data.value)
    })
    .catch(err => {
      console.log(err)
    })
}
</script>
<template>
  <div class="outter" v-if="selectTab === '3'">
    <div v-for="(item, index) in data" :key="index">
      <div v-if="item.type == 'DYNAMIC_TYPE_AV'" class="content" @click="jump(item)">
        <div class="head">
          <img :src="item.modules.module_author.face" alt="" />
          <div class="headInfo">
            <p class="name">{{ item.modules.module_author.name }}</p>
            <p>{{ item.modules.module_author.pub_time + ' 投稿了视频' }}</p>
          </div>
        </div>
        <div class="Card">
          <img :src="item.modules.module_dynamic.major.archive.cover" alt="" />
          <div class="desc">
            <p class="title">{{ item.modules.module_dynamic.major.archive.title }}</p>
            <div class="vediodes">
              <span>播放量：{{ item.modules.module_dynamic.major.archive.stat.play}}</span>
              <span class="danmu">弹幕：{{ item.modules.module_dynamic.major.archive.stat.danmaku}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.outter {
  // display: flex;
  // flex-direction: column;
  .content{
    overflow: hidden;
    width: 80%;
    min-width: 800px;
    margin: 10px auto;
  }
  .head{
    width: 100%;
    height: 100px;
    display: flex;
    .headInfo{
      margin: 10px 10px;
      .name{
        color: white;
        font-size: 18px;
      }
    }
    img{
      height: 50px;
      border-radius: 50px;
      margin: 10px 10px;
    }
  }
  .Card{
    background-color: rgba(31, 31, 37, 0.5);
    display: flex;
    margin-left: 80px;
    position: relative;
    .desc{
      display: flex;
      flex-direction: column;
      .vediodes{
        position: absolute;
        bottom: 10px;
        .danmu{
          margin-left: 30px;
        }
      }
      .title{
        color: white;
        font-size: 16px;
        padding: 10px 0;
      }
    }
    img{
      height: 200px;
      border-radius: 20px;
      margin-right: 20px;
    }
  }
  .Card:hover{
    opacity: 80%;
      background-color: #292929;
      transition: 0.2s linear;
      cursor: pointer;
      z-index: 0;
  }
}
</style>
