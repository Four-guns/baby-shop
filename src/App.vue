<script setup lang="ts">
import { Toast } from 'vant'
import { commonStore } from '@/store';
const useCommonStore = commonStore();
if(useCommonStore.isLoading) {
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration: 0
  });
} else {
  Toast.clear();
}
</script>

<template>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
