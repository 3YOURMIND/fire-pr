import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import mutations from './mutations'
import * as actions from './actions'

import PrTemplate from '../assets/PrTemplate'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    prTemplate: PrTemplate,
  },
  getters,
  mutations,
  actions,
})
