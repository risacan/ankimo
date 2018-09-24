<template>
  <div class='select-button'>
    <div v-for='item in data.sub' :key="item">
      <a class="button is-medium is-outlined">{{item}}</a>
    </div>
  </div>
</template>

<script>
import Sub from '../../static/sub.json'

export default {
  name: 'SelectButton',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: 'hoge',
      data: {
        sub: Object.keys(Sub)
      }
    }
  },
  props: ['selected']
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
