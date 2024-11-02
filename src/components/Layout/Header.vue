<script lang="ts" setup>
import Search from '../view/Search.vue'
import UserInfo from '../view/UserInfo.vue'
import Switch from '../view/Switch.vue'
</script>
<template>
  <div class="outter">
    <UserInfo></UserInfo>
    <div class="s">
      <Search></Search>
    </div>
    <Switch></Switch>
  </div>
</template>
<style lang="less" scoped>
.outter {
  margin-bottom: 30px;
}
.s{
  padding: 0 3vw;
}
</style>
