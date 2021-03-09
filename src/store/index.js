import Vue from 'vue'
import Vuex from 'vuex'

import * as categories from '@/store/modules/categories.js'
import * as notification from '@/store/modules/notification.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { categories, notification }
})
