<template>
  <div class='select-button'>
    {{selectedSub}}
    <div class="control" v-for='item in data.sub' v-bind:key="item">
      <input
        type="radio"
        v-bind:name="item"
        v-bind:value="item"
        v-model="selectedSub"
      >
      <label class="radio" v-bind:for="item" v-bind:class="{ tag: onChange(buki, item, selectedSub)}">
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
      selectedSub: 'first'
    }
  },
  props: ['buki'],
  methods: {
    onChange: function (buki, item, selectedSub) {
      return (selectedSub === item && selectedSub === Main[buki].sub_key)
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
