<script setup lang="ts">
// Toast
import { showLoadingToast,closeToast } from 'vant';
import 'vant/es/toast/style';
// // Dialog
// import { showDialog } from 'vant';
// import 'vant/es/dialog/style';

// // Notify
// import { showNotify } from 'vant';
// import 'vant/es/notify/style';

// // ImagePreview
// import { showImagePreview } from 'vant';
// import 'vant/es/image-preview/style';
import { commonStore } from '@/store';
import { watchEffect } from 'vue';
const useCommonStore = commonStore();
watchEffect(() => {
  if(useCommonStore.isLoading) {
    showLoadingToast({
      message: '加载中...',
      forbidClick: true,
      duration: 0
    });
  } else {
    closeToast();
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
