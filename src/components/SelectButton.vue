<template>
  <div class='select-button'>
    <div class="columns">
      <div class="column">
        <div class="column is-full">
          {{selectedSub ? data.allSub[selectedSub].localization.ja : '🦑'}}
          {{selectedSpecial ? data.allSpecial[selectedSpecial].localization.ja : '🐙'}}</div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="control" v-for='item in data.sub' v-bind:key="item">
          <input
            type="radio"
            v-bind:name="item"
            v-bind:value="item"
            v-bind:id="buki+item"
            v-model="selectedSub"
            class="is-checkradio has-background-color"
          >
          <label class="radio" v-bind:for="buki+item" v-bind:class="{ tag: onChangeSub(buki, item, selectedSub)}">
            {{data.allSub[item].localization.ja}}
          </label>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="control" v-for='item in data.special' v-bind:key="item">
            <input
              type="radio"
              v-bind:name="item"
              v-bind:value="item"
              v-bind:id="buki+item"
              v-model="selectedSpecial"
              class="is-checkradio has-background-color"
            >
            <label class="radio" v-bind:for="buki+item" v-bind:class="{ tag: onChangeSpecial(buki, item, selectedSpecial)}">
              {{data.allSpecial[item].localization.ja}}
            </label>
          </div>
        </div>
      </div>
    </div>
    <audio id="sound-file1" preload="auto">
      <source src="@/assets/mens-ou1.mp3" type="audio/mp3">
    </audio>
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
      var resultSub = (selectedSub === item && selectedSub === Main[buki].sub_key)
      if (resultSub === true) {
        document.getElementById('sound-file1').play()
      }
      return resultSub
    },
    onChangeSpecial: function (buki, item, selectedSpecial) {
      var resultSpecial = (selectedSpecial === item && selectedSpecial === Main[buki].special_key)
      if (resultSpecial === true) {
        document.getElementById('sound-file1').play()
      }
      return resultSpecial
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
