<template>
  <main class="container">
    <Header @search='search'/>
    <section class="crypto-container">
      <CryptoItem v-for="coin in coins" v-bind:key="coin.id" 
        v-bind:name="coin.name" 
        v-bind:imgUrl="coin.image"
        v-bind:price="coin.price" 
        v-bind:change="coin.change">
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
    data(){
      return {
      }
    },
    methods: {
      fetchData() {        
        this.$store.dispatch('fetchData')
      },
      getData() {
        return this.$store.getters('coins')
      },
      search(value) {

        // const data = 
        const data =  this.coins.filter(item=> {
          //Set everything to lowercase so that search will go
          //through every item
          return item.name.toLowerCase().includes(value.toLowerCase())
        })      
        
        this.updateValue(data)
        },
      updateValue(value){
        this.$store.dispatch('updateValue', value)
      }
    },
    computed: {
      coins() {
        const coins = this.$store.state.coins
        return coins
      }

    },
    created() {
      this.fetchData()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .container {
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