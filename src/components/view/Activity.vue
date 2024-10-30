<script setup lang='ts'>
import axios from 'axios'
import { ref,computed } from 'vue'
import {useMainStore} from '../store'
let selectTab = computed(()=>{
    return useMainStore().selectTab
})
axios.get("/Bew/x/polymer/web-dynamic/v1/feed/all",{withCredentials: true,})
.then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})
</script>
<template>
    <div class="outter" v-if="selectTab === '3'"></div>
</template>
<style lang='less' scoped>
</style>