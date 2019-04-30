<template>
  <main class="container">
    <Header @search='search' />
    <section class="crypto-container">
      <CryptoItem v-for="coin in coins" v-bind:key="coin.id" 
        v-bind:name="coin.name" 
        v-bind:imgUrl="coin.image"
        v-bind:price="coin.price" 
        v-bind:change="coin.change"
        v-bind:rank="coin.rank"
        v-bind:symbol="coin.symbol">
      </CryptoItem>
    </section>
    <div class="observer">
      <div class="loader"></div>
      <div class="loader"></div>
      <div class="loader"></div>
    </div>

    <BackToTop/>
  </main>
</template>

<script>
  import Search from "./Search.vue";
  import CryptoItem from "./CryptoItem.vue";
  import BackToTop from "./BackToTop.vue"

  export default {
    name: 'Crypto',
    components: {
      "Header": Search,
      CryptoItem,
      BackToTop
    },
    data() {
      return {
        apiPath: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=",
        apiPage: 1

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
        console.log(value)
        const observer = document.querySelector('.observer')
        if (value) {
          observer.classList.remove('active')
          observer.classList.add('inactive')
        } else {
          observer.classList.remove('inactive')
          observer.classList.add('active')
        }
        // const data = 
        const data = this.coins.filter(item => {
          //Set everything to lowercase so that search will go
          //through every item
          return item.name.toLowerCase().includes(value.toLowerCase())
        })

        this.updateValue(data)
      },
      updateValue(value) {
        this.$store.dispatch('updateValue', value)
      },

      observe() {
        const _self = this
        const options = {
          root: null,
          rootMargin: "700px 0px"
        }

        const observer = new IntersectionObserver(handleIntersection, options)

        const target = document.querySelector(".observer")

        observer.observe(target)

        function handleIntersection(entries, observe) {
          entries.forEach(element => {
            if (element.isIntersecting) {
              _self.apiPage++
              _self.$store.dispatch('fetchData', _self.url)
            }
          });
        }
      }
    },
    computed: {
      coins() {
        const coins = this.$store.state.coins
        return coins
      },
      url() {
        const path = this.apiPath + this.apiPage
        return path
      }

    },
    created() {
      this.$store.dispatch('fetchData', this.url)
    },
    mounted() {
      this.$nextTick(() => {
        this.observe()
      })
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
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    }
  }

  .observer {
    display: flex;
    padding: 2rem;
    justify-content: center;

    .loader {
      height: 6rem;
      width: 1rem;
      margin: 0 1rem;
      background-color: #ffba64;
      animation: loading 1s alternate infinite ease-in-out;

      &:nth-of-type(2) {
        animation-delay: 0.4s;
      }

      &:nth-of-type(3) {
        animation-delay: 0.8s;
      }
    }


    &.inactive {
       display: none;
    }

    &.active {
      display: flex;
    }

    @keyframes loading {
      to {
        transform: scaleY(0.4);
      }
    }
  }


</style>