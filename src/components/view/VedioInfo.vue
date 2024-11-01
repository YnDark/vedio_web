<template>
  <div class="outter" v-if="isReady && useMainStore().selectTab==='1'||useMainStore().selectTab==='4'">
    <div class="show">
      <span
        v-for="(item, index) in data"
        :key="index"
        class="card"
        @click="jump(item.uri)"
      >
        <img class="vedio" :src="item.pic" :href="item.uri" />
        <div class="info">
        <p class="title">{{ item.title.length>13?item.title.slice(0,12)+"...":item.title }}</p>
        <div class="ownerCard">
          <img class="owner" :src="item.owner.face" alt="" />
          <p class="ownerName">{{ item.owner.name }}</p>
        </div>
          <span class="bottom">播放量：{{ item.stat.view.toString().length>=5?item.stat.view.toString().slice(0,-4)+"万":item.stat.view }}</span>
          <span class="bottom">点赞量：{{ item.stat.like.toString().length>=5?item.stat.like.toString().slice(0,-4)+"万":item.stat.like }}</span>
        </div>
      </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import axios from 'axios'
import { ref } from 'vue'
import {useMainStore} from '../store'
import pubsub from 'pubsub-js';

interface stat {
  danmaku: Number
  like: Number
  view: Number
  vt: Number
}
interface owner {
  name: string
  face: string
}
interface UpdateItem {
  bvid: string
  dislike_switch: Number
  dislike_switch_pc: Number
  duration: Number
  enable_vt: Number
  goto: 'av'
  pic: string
  cuttedPic?: string | null
  title: string
  uri: string
  is_followed: Number
  is_stock: Number
  id: Number
  owner: owner
  pic_4_3: string
  pubdate: Number
  track_id: string
  stat: stat
}

let data = ref<UpdateItem[]>([])
function jump(event: string) {
  window.open(event)
}
let isReady = ref<Boolean>(false)

let page:number = 1;
async function getAllVedio(){
  await getVedio();
  await getVedio();
  await getVedio();
  await getVedio();
}
onMounted(async () => {
  let Auth =
    "buvid3=3A082D63-7D49-F637-58F8-52B28FCD116D08737infoc; b_nut=1729352208; _uuid=D105AA996-B4FE-F2E5-ED9F-593D2C109B23710868infoc; CURRENT_FNVAL=4048; rpdid=|(k)~RYml~lY0J'u~kmJlkkuk; DedeUserID=14551198; DedeUserID__ckMd5=fc8f8c8cc5957c60; header_theme_version=CLOSE; enable_web_push=DISABLE; hit-dyn-v2=1; fingerprint=7d889acd0b9d6ea8fa18d138dc9a183f; buvid_fp_plain=undefined; buvid4=4953F96A-A683-78DA-6A0E-D65270B01E7011402-024101915-6tN5RoR9B6bNcAiU%2FwwN3w%3D%3D; bp_t_offset_14551198=991703615024398336; CURRENT_QUALITY=120; buvid_fp=7d889acd0b9d6ea8fa18d138dc9a183f; SESSDATA=a9cf665e%2C1745759857%2C2a69b%2Aa2CjDstqzaf9KiMh89ZNtidXLDAeZkiM7t9xXkHB8sURGGyWKX6WHywaKgbyZuafbQ4xYSVndDcC12Q2xOR3lLUkRWNVpnakJxOHRVMzZ0OGw4OHlqTUsweWVFWlhadVpvWDI1RU9RRHpnTkdfTWFLV0szU3VUQXhkT1UyOUVnTGhaRWZfNHplTFpnIIEC; bili_jct=d3a5320ef79c97639d5f9202211e6353; sid=81hua2o3; bili_ticket=eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzA2MDk0OTAsImlhdCI6MTczMDM1MDIzMCwicGx0IjotMX0.1nzY8ZMUfxNRX_CrR8Asq5XfLWJw6wfkmsE061J_g4U; bili_ticket_expires=1730609430; b_lsid=2A3C6999_192E1124739; home_feed_column=5; browser_resolution=1807-1314; theme_style=light"
  document.cookie = Auth
  await getAllVedio();
  pubsub.subscribe('refresh',async()=>{
    if(useMainStore().selectTab == "1"){
      getAllVedio();
    }
    else if(useMainStore().selectTab == "4"){
      data.value = [];
      await getAllVedio();
    }
  });
})
async function getVedio(){
  await axios
    .get('/Bew/x/web-interface/index/top/rcmd',{
      params:{
        fresh_idx:page
      },
      withCredentials: true,
    })
    .then(res => {
      console.log(res)
      if(data.value.length>0){
        console.log(data.value)
        console.log(res.data.data.item)
        data.value.push(...res.data.data.item)
      }
      else{
        console.log(data.value)
        data.value=res.data.data.item
      }
      isReady.value = true
      console.log(page)
      page++
    })
    .catch(err => {
      console.log(err)
    })
}
</script>
<style lang="less" scoped>
.outter {
  z-index: 0;
  width: 100%;
  height: 100%;
  // border: #ccc solid 1px;
  .show {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .card {
      .title {
        color: white;
        text-overflow: ellipsis;
        font-size: 16px;
        max-height: 25px;
        margin: 10px 10px;
        overflow: hidden;
      }
      .info{
        padding: 0 50px;
        text-align: center;
      }
      .ownerCard {
        width: 200px;
        padding-left: 20px;
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
        text-align: left;
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

.bottom {
  bottom: 10px;
  font-size: 12px;
  margin: 10px 10px;
}
</style>
