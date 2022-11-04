// store/index.js
import { createStore } from 'vuex'
import defaultStore from './modules/default'

const store = createStore({
  modules: {
    defaultStore,
  },
})

export default store
