<template>
  <div>
    <form id="bus-question">
    <h2>How many miles do you travel on the bus per week</h2>
    <input type="radio" v-model="radioInput" name="miles" v-on:change="busCo2Emission" value="50" />under 50
    <input type="radio" v-model="radioInput" name="miles" v-on:change="busCo2Emission" value="100" />50 - 100
    <input type="radio" v-model="radioInput" name="miles" v-on:change="busCo2Emission" value="150" />100 - 150
    <input type="radio" v-model="radioInput" name="miles" v-on:change="busCo2Emission" value="200" />150 - 200
    <input type="radio" v-model="radioInput" name="miles" v-on:change="busCo2Emission" value="250" />200+
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      busCo2PerMile: 64.6,
      radioInput: null,
    }
  },
  methods: {
    busCo2Emission() {
      console.log(this.busCo2PerMile * this.radioInput)
    },
  }
}
</script>

<style>
</style>