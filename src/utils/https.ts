import axios,{ AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';
import { commonStore } from '../store'

let loadingCount:number = 0;
const useCommonStore = commonStore();
const showLoading = () => {
  if(loadingCount===0 && !useCommonStore.isLoading){
    useCommonStore.setLoadingState(true);
  }
  loadingCount++
}
const hideLoading = () => {
  loadingCount--;
  if(loadingCount < 1) {
    useCommonStore.setLoadingState(false);
  }
}

const https = axios.create({
  baseURL: "",
  //针对get请求格式可设置相应序列化方式传输
  paramsSerializer: function(params) {
    return qs.stringify(params);
  },
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 30000
});

https.interceptors.request.use(
  async (config:AxiosRequestConfig) => {
    if(!config.noLoading){
      showLoading()
    }
    if (config.hasOwnProperty("noAuth") && config.noAuth) {
      delete config.noAuth;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  });


https.interceptors.response.use((response: AxiosResponse) => {
  hideLoading();
  if(response.status === 200){
    return response.data
  }
  return Promise.reject(response.data);
}, error => {
  hideLoading();
  return Promise.reject(error)
})
