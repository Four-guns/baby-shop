import { defineStore } from 'pinia';
export const useStore = defineStore('userStore',{
  state: () => ({
    name: 'ddd',
    mobileNo: '15684898823'
  }),
  getters: {
    formatName: (state) => {
      return state.name.toUpperCase();
    }
  },
  actions: {
    setNameData (data:any) {
      this.$state = data
    }
  }
});
export const commonStore = defineStore('commonStore',{
  state: () => ({
    isLoading: false
  }),
  actions: {
    setLoadingState (payload:boolean) {
      this.$state.isLoading = payload
    }
  }
});