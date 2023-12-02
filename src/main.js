import {
  createSSRApp
} from "vue";
// 引入store
import store from '@/store/index'
// App.vue
import App from "./App.vue";
// 引入 vant 样式
import 'vant/lib/index.css';

export function createApp() {
  const app = createSSRApp(App);

  app.use(store)

  return {
    app,
  };
}
