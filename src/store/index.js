import Vue from 'vue'
import Vuex from 'vuex'
import ListStore from './ListStore/ListStore.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { ListStore }
})
