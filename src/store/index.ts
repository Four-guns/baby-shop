import { defineStore } from 'pinia';
export const useStore = defineStore('mainStore',{
  state: () => ({
    name: 'dd',
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