<template>
  更新日期
  <div class="selectedDate">
    <select  v-model="selectDate">
      <option :value="ix" v-for="(date, ix) in data">{{ date.date }}</option>
    </select>
  </div>
  <div class="outter"> 
    <div v-for="(item, index) in data" :key="index">
      <div class="show" v-if="selectDate === index">
        <span class="card" @click="jump()" v-for="(update, idx) in item.updates" :key="idx">
          <img :src="update.cover_url" :alt="update.cover_url">
          <p>{{ update.title }}</p>
          <span>{{ update.update_time }}</span>
        </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import axios from 'axios'
import { ref } from 'vue'

interface UpdateItem {
  cover_url: any;
  title: string;
  update_time: string;
  update_to: string;
}

interface AnimeItem {
  date: string;
  day_of_week: string;
  is_today: boolean;
  updates: UpdateItem[];
}

let data = ref<AnimeItem[]>([]);
let selectDate = ref<Number>(0) 
function jump(){
  console.log("jump")
}
onMounted(async () => {
  console.log(`The component is now onMounted.`);
  await axios.get('http://127.0.0.1:6001/anime/bangumi/updates').then((res) => {
    data.value = res.data;
  }).catch((err) => {
    console.log(err);
  })
  console.log(data.value);
})
</script>
<style lang="less" scoped>
.selectedDate {
  display: inline-block;
  width: 200px;
  position: relative;
  vertical-align: middle;
  padding: 0;
  overflow: hidden;
  background-color: #fff;
  color: #555;
  border: 1px solid #aaa;
  text-shadow: none;
  border-radius: 4px;	
  transition: box-shadow 0.25s ease;
  z-index: 2;
  margin: 10px 10px;
}
.selectedDate:hover {
  opacity: 80%;
}

.selectedDate select {
  cursor: pointer;
  padding: 10px;
  width: 100%;
  border: none;
  background: transparent;
  background-image: none;
}

.selectedDate select:focus {
  outline: none;
}
.outter {
  width: 100%;
  height: 100%;
  // border: #ccc solid 1px;
  .show {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .card{
      text-align: center;
      // border: #ccc 1px solid;
      padding: 30px 10px;
      width: 200px;
      height: 300px;
      img {
        width: 100px;
        border-radius: 10px;
        margin: 10px 10px;
      }
    }
    .card:hover{
      opacity: 80%;
      background-color: #515151;
      transition: 0.2s linear;
      cursor: pointer;
    }
  }
}

</style>