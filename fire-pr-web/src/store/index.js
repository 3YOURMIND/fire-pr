import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import PrTemplate from '../assets/PrTemplate'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    prTemplate: PrTemplate,
    options: {},
  },
  getters,
  mutations,
  actions,
})
