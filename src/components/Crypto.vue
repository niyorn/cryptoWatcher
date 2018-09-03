<template>
  <main class="container">
    <Header/>
    <section class="crypto-container">
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
      <CryptoItem></CryptoItem>
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
  .container {
    padding-top: 6rem;
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
