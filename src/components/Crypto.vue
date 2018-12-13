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