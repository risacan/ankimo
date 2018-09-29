<template>
  <div class='select-button'>
    <div v-for='item in data.sub' :key="item">
      <a class="button is-medium is-outlined" v-on:click="check(buki, item)" >{{data.allSub[item].localization.ja}}</a>
    </div>
  </div>
</template>

<script>
import Main from '../../static/main.json'
import Sub from '../../static/sub.json'

export default {
  name: 'SelectButton',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: 'hoge',
      data: {
        allSub: Sub,
        sub: Object.keys(Sub)
      }
    }
  },
  props: ['buki'],
  methods: {
    check: function (buki, item) {
      if (item === Main[buki].sub_key) {
        console.log('🎉' + item)
      } else {
        console.log('😭' + item)
      }
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.button {
  min-width: 300px;
}
</style>
