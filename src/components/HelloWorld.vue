<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from '../store';

defineProps<{ msg: string }>()

const count = ref(0)
const useStoreData = useStore();
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{useStoreData.formatName}}</h2>
  <p class="title">
    This is the first item from three guns
    <div class="first">let`s go</div>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped lang="scss">
a {
  color: #42b983;
}

label {
  margin: 0 20px;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
.title {
  font-size: 20px;
  .first {
    color: $themeColor;
  }
}
</style>
