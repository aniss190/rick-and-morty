import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    cards: []
  },
  mutations: {
    SET_CARDS(state, items) {
      state.cards = items
    }
  },
  actions: {
    getCards({ commit }) {
      axios.get('https://rickandmortyapi.com/api/character')
          .then(response => {
            commit('SET_CARDS', response.data.results)
          })
    }
  },
  modules: {
  }
})
