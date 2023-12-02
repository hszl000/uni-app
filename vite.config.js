import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';

const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    vueJsx(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve:{
    alias:[
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: 'comps',
        replacement: path.resolve(__dirname, 'src/components/')
      },
      {
        find: 'hooks',
        replacement: path.resolve(__dirname, 'src/hooks/')
      },
      {
        find: 'modules',
        replacement: path.resolve(__dirname, 'src/modules/')
      },
      {
        find: 'static',
        replacement: path.resolve(__dirname, 'src/static/')
      }
    ]
  }
})
