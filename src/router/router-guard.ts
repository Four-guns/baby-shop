import { commonStore } from '@/store/index';
import router from './index';
router.afterEach((to, from) => {
  const useCommonStore = commonStore();
  useCommonStore.setLoadingState(false);
  document.title = to.meta.title as string;
})