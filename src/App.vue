<script setup lang="ts">
import { Toast } from 'vant';
import 'vant/es/toast/style';
import { commonStore } from '@/store';
import { watchEffect } from 'vue';
const useCommonStore = commonStore();
watchEffect(() => {
  if(useCommonStore.isLoading) {
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      duration: 0
    });
  } else {
    Toast.clear();
  }
})
</script>

<template>
  <router-view></router-view>
</template>

<style>
html,body,#app{
  width: 100%;
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f5f5f5;
}
</style>
