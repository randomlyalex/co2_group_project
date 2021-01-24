<template>
  <div>
    <form id="ferry-question">
    <h2>Ferry question</h2>
    <input type="radio" v-model="radioInput" name="miles" v-on:change="ferryCo2Emission" value="50" />under 50
    <input type="radio" v-model="radioInput" name="miles" v-on:change="ferryCo2Emission" value="100" />50 - 100
    <input type="radio" v-model="radioInput" name="miles" v-on:change="ferryCo2Emission" value="150" />100 - 150
    <input type="radio" v-model="radioInput" name="miles" v-on:change="ferryCo2Emission" value="200" />150 - 200
    <input type="radio" v-model="radioInput" name="miles" v-on:change="ferryCo2Emission" value="250" />200+
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ferryCo2PerMile: 11,
      radioInput: null,
    }
  },
  methods: {
    ferryCo2Emission() {
      console.log(this.ferryCo2PerMile * this.radioInput)
    },
  }
}
</script>

<style>
</style>