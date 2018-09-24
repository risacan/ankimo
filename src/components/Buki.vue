<template>
  <div class='buki'>
    🌟{{title}}🌟
    <ul id='example-1'>
      <li v-for='item in data.main' :key="item.key">
        {{ item.key }}: {{item.localization.ja}}
        <ul>
          <li>{{data.sub[item.sub_key].localization.ja}}</li>
          <li>{{data.special[item.special_key].localization.ja}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import Main from '../../static/main.json'
import Sub from '../../static/sub.json'
import Special from '../../static/special.json'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: 'hoge',
      data: {
        main: Main,
        sub: Sub,
        special: Special
      }
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
