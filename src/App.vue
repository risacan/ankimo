<template>
  <div id="app">
    <h1>🐟アンキモ🐟</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">

@import url("./assets/bulma.css");

@import "../node_modules/bulma/bulma.sass";
@import "../node_modules/bulma-extensions/bulma-checkradio/dist/css/bulma-checkradio.sass";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  font-size: 30px;
}
</style>
