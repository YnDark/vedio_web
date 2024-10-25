<script setup lang="ts">
import Header from './components/Layout/Header.vue';
import Body from './components/Layout/Body.vue';
</script>

<template>
    <Header></Header>
  <div class="outter">
    <Body></Body>
  </div>
</template>

<style scoped lang="less">
.outter {
  width: 100%;
}
</style>