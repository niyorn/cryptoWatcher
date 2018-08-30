<template>
  <div id="app">
    <Crypto/>
  </div>
</template>

<script>
import Crypto from './components/Crypto.vue'

export default {
  name: 'app',
  components: {
    Crypto
  }
}
</script>

<style lang="scss">
@import "./variables.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body{
  height: 100%;
  scroll-behavior: smooth;
  font-family: sans-serif;
}
  
#app {
  
}

header {
  background-color: yellow;
}
</style>
