<script setup lang='ts'>
import axios from 'axios'
axios.get("/polymer/web-dynamic/v1/feed/all",{withCredentials: true,})
.then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})
</script>
<template>
</template>
<style lang='less' scoped>
</style>