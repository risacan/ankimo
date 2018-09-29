<template>
  <div class='buki'>
    <div id='example-1' class="columns is-multiline">
      <div v-for='item in data.main' :key="item.key" class="column is-half">
        <h2 class="title">{{item.localization.ja}}</h2>
        <SelectButton v-bind:buki="item.key" />
      </div>
    </div>
  </div>
</template>

<script>
import Main from '../../static/main.json'
import Sub from '../../static/sub.json'
import Special from '../../static/special.json'
import SelectButton from './SelectButton'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: 'hoge',
      data: {
        main: Main,
        sub: Sub,
        special: Special,
        subs: Object.keys(Sub).map(name => Sub[name].localization.ja)
      }
    }
  },
  components: { SelectButton }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
