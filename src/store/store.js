import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coins: []
  },


  actions: {

    fetchData(action, path) {
      const url = path
      const data =  fetch(url)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        this.dispatch('transformData', result)
      })
    },

    transformData(action, data) {
      const coins = data.map((i)=>{
        return {
        name: i.name,
        symbol: i.symbol,
        rank: i.market_cap_rank,
        change: i.market_cap_change_percentage_24h,
        image: i.image,
        volume: i.total_volume,
        price: i.current_price,
        }
      })
      
      action.commit('storeCoins',coins)
    },

    addCoins(action, path) {
      const data = this.dispatch('fetchData', path)
      data.then(value=> {
        action.commit('storeCoins', value)
      })
    },

    updateValue(action, value) {
      action.commit('updateCoins', value)
    },

    resetState(action) {
      action.commit('clearState')
    }
  },
  
  mutations: {
    storeCoins(state, coins) {
      for(let coin of coins) {
        state.coins.push(coin)
      }
    },

    updateCoins(state, coins) {
      state.coins = coins
    },

    clearState(state) {
      state.coins = []
    }
  }
})
