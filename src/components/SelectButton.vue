<template>
  <div class='select-button'>
    {{selectedSub}} {{ selectedSpecial }}
    <div class="control" v-for='item in data.sub' v-bind:key="item">
      <input
        type="radio"
        v-bind:name="item"
        v-bind:value="item"
        v-model="selectedSub"
      >
      <label class="radio" v-bind:for="item" v-bind:class="{ tag: onChangeSub(buki, item, selectedSub)}">
        {{data.allSub[item].localization.ja}}
      </label>
    </div>
    <div class="control" v-for='item in data.special' v-bind:key="item">
      <input
        type="radio"
        v-bind:name="item"
        v-bind:value="item"
        v-model="selectedSpecial"
      >
      <label class="radio" v-bind:for="item" v-bind:class="{ tag: onChangeSpecial(buki, item, selectedSpecial)}">
        {{data.allSpecial[item].localization.ja}}
      </label>
    </div>
  </div>
</template>

<script>
import Main from '../../static/main.json'
import Sub from '../../static/sub.json'
import Special from '../../static/special.json'

export default {
  name: 'SelectButton',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: 'hoge',
      data: {
        main: Main,
        allSub: Sub,
        allSpecial: Special,
        sub: Object.keys(Sub),
        special: Object.keys(Special)
      },
      selectedSub: '🦑',
      selectedSpecial: '🐙'
    }
  },
  props: ['buki'],
  methods: {
    onChangeSub: function (buki, item, selectedSub) {
      return (selectedSub === item && selectedSub === Main[buki].sub_key)
    },
    onChangeSpecial: function (buki, item, selectedSpecial) {
      return (selectedSpecial === item && selectedSpecial === Main[buki].special_key)
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
