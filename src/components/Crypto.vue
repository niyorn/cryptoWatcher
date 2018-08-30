<template>
  <main class="container">
    <Header/>
    <section class="crypto-container">
      <CryptoItem/>
      <CryptoItem/>
    </section>
  </main>
</template>

<script>
import Search from "./Search.vue";
import CryptoItem from "./CryptoItem.vue";

export default {
  name: 'Crypto',
  components: {
    "Header" : Search,
    CryptoItem
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  header {
    background-color: blue;
  }

  .crypto-container {
    display: grid;
    grid-row-gap: 1rem;
    padding: 1rem;
  }
</style>
