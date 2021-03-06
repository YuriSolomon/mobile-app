import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    games:[],
  },
  mutations: {
    getGames(state, games){
      this.state.games = games;
    }
  }
})