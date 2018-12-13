<template>
  <main class="container">
    <Header />
    <section class="crypto-container">
      <CryptoItem v-for="coin in coins" v-bind:key="coin.id" v-bind:name="coin.fullName" v-bind:imgUrl="`https://www.cryptocompare.com${coin.imageUrl}`"
        v-bind:price="coin.priceInfo.PRICE" v-bind:change="coin.priceInfo.CHANGEPCT24HOUR">
      </CryptoItem>
    </section>
  </main>
</template>

<script>
  import Search from "./Search.vue";
  import CryptoItem from "./CryptoItem.vue";

  export default {
    name: 'Crypto',
    components: {
      "Header": Search,
      CryptoItem
    },
    data() {
      return {
        coins: []
      }
    },
    methods: {
      fetchTopCoins() { //get top volume trading coins
        let url = "https://min-api.cryptocompare.com/data/top/totalvol?limit=70&tsym=USD";
        fetch(url)
          .then(res => res.json())
          .then(result => {
            let coin = [];
            result.Data.forEach(i => {
              let coinInfo = {
                name: i.CoinInfo.Name,
                fullName: i.CoinInfo.FullName,
                imageUrl: i.CoinInfo.ImageUrl
              };
              coin.push(coinInfo)
            })

            this.fetchPrice(coin)
          })
          .catch(err => {
            throw err
          })
      },
      fetchPrice(data) { //look up the price of coins
        let allName = "";

        data.forEach(i => {
          allName += `${i.name},`;
        })

        let url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${allName}&tsyms=USD`;
        fetch(url)
          .then(res => res.json())
          .then(result => {
            data.forEach((value) => {
              let name = value.name;
              let priceInfo = result.DISPLAY[name].USD;
              value.priceInfo = priceInfo;
            })
            this.coins = data;
          })
      }
    },
    created() { 
      //get data
      this.$store.dispatch('fetchData')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .container {
    padding-top: 6rem;
    background-color: var(--background-color);
  }

  .crypto-container {
    display: grid;
    grid-gap: 1.7rem;
    padding: 0.7rem;

    @media screen and (min-width: 30rem) {
      padding: 1.7rem;
      grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
    }
  }
</style>