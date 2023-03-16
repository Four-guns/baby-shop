<script setup lang="ts">
import { Toast } from 'vant';
import 'vant/es/toast/style';
import { computed, reactive, ref } from 'vue';
import { userLogin } from '@/api/login';


const month = ref(new Date().getMonth()+1);
const isEyeOpen = ref(true);
const sumList = reactive([{text:'收入',price: 550},{text:'支出',price:789}]);
const monthText = computed(()=> `${month.value}月`);
const goSearch = (event:Event) => {
  console.dir(event.target); // 用来查看元素的声明类型
  console.log((event.target as HTMLElement).tagName);
}
const changeStatus = () => {
   
}
</script>
<template>
  <div class="homePage">
    <div class="homeHeader">
      <van-icon name="notes-o" />
      <van-icon name="search" @click="goSearch"/>
    </div>
    <p class="homeTitle">{{ monthText }}</p>
    <div class="sumContain">
      <div v-for="(sumItem) in sumList" class="sumItem">
        <div>¥<b>{{ sumItem.price }}</b></div>
        <span>{{ sumItem.text }}</span>
      </div>
    </div>
     <div @click="changeStatus">{{ isEyeOpen?'收起':'展开' }}</div>
  </div>
</template>
<style scoped lang="scss">
.homePage {
  background: #f5f5f5;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  .homeHeader{
    display: flex;
    justify-content: space-between;
    :deep(.van-icon){
      font-size: 35px;
    }
  }
  .homeTitle{
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .sumContain{
    display: flex;
    justify-content: space-around;
    width: 100%;
    .sumItem{
      width: 40%;
      border-radius: 20px;
      height: 130px;
      background: #fff;
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      &:first-child{
        :first-child{
          color: #f00;
          b{
            font-size: 32px;
            margin-left: 6px;
          }
        }
      }
      &:nth-child(2) {
        :first-child{
          color: rgb(0, 166, 255);
          b{
            font-size: 32px;
            margin-left: 6px;
          }
        }
      }
    }
  }
}
</style>