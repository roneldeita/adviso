import Vue from 'vue'
import Vuex from 'vuex'
import { getProfile } from './assets/utils/auth.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    advisoProfile: JSON.parse(getProfile())
  },
  getters: {
    advisoProfile: function (state) {
      return state.advisoProfile
    }
  },
  mutations: {

  },
  actions: {

  }
})
