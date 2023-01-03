<script setup lang="ts">
import { Toast } from 'vant';
import 'vant/es/toast/style';
import { ref } from 'vue';
import { userLogin } from '@/api/login';


const username = ref('');
const password = ref('');
const onSubmit = () => {
  userLogin({username:username.value, password: password.value}).then(r => {
    if(r.status === 200) {
      Toast.success('登录成功');
    }
  })
};
</script>
<template>
  <div class="loginPage">
    <div class="loginTitle">
      welcome to Three Guns login page~
    </div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="username"
                   name="用户名"
                   label="用户名"
                   placeholder="请输入用户名"
                   :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="password"
                   type="password"
                   name="密码"
                   label="密码"
                   placeholder="请输入密码"
                   :rules="[{ required: true, message: '请填写密码' }]" />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round
                    block
                    type="primary"
                    native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<style scoped lang="scss">
.loginPage {
  background: #f5f5f5;
  height: 100%;
  padding-top: 200px;
  .loginTitle {
    margin-bottom: 40px;
  }
  :v-deep .van-cell__title.van-field__label {
    font-size: 30px;
    color:$themeColor;
  }
}
</style>