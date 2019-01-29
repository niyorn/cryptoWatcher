import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coins: []
  },


  actions: {

    fetchData() {
      const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1'
      fetch(url)
      .then(res => res.json())
      .then(result => {
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
        price: i.current_price
        }
      })
      
      action.commit('storeCoins',coins)
    },

    updateValue(action, value) {
      action.commit('storeCoins', value)
    }
  },
  
  mutations: {
    storeCoins (state, coins){
      state.coins = coins
    }
  },
})
