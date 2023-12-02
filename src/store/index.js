import {createPinia} from 'pinia'
import plugins from '@/store/plugins'

const store = createPinia()

store.use(plugins)

export default store