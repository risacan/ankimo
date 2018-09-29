<template>
  <div class='select-button'>
          {{update}}
    <div class="control" v-for='item in data.sub' v-bind:key="item">
      <input
        type="radio"
        v-bind:name="item"
        v-bind:value="item"
        v-model="update"
      >
      <label class="radio" v-bind:for="item" v-bind:class="{ tag: update === item && update === data.main[buki].sub_key }">
        {{data.allSub[item].localization.ja}}
      </label>
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
        main: Main,
        allSub: Sub,
        sub: Object.keys(Sub)
      },
      update: 'first'
    }
  },
  props: ['buki'],
  methods: {
    onChange: function (buki, event) {
      console.log(buki)
      console.log(event.target.value)
      console.log(event.target.value === Main[buki].sub_key)
      console.log(event.target)
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
