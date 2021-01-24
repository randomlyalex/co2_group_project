<template>
  <div>
    <form id="car-question">
    <h2>How many miles do you travel in a car per week</h2>
    <input type="radio" v-model="radioInput" name="miles" v-on:change="carCo2Emission" value="50" />under 50
    <input type="radio" v-model="radioInput" name="miles" v-on:change="carCo2Emission" value="100" />50 - 100
    <input type="radio" v-model="radioInput" name="miles" v-on:change="carCo2Emission" value="150" />100 - 150
    <input type="radio" v-model="radioInput" name="miles" v-on:change="carCo2Emission" value="200" />150 - 200
    <input type="radio" v-model="radioInput" name="miles" v-on:change="carCo2Emission" value="250" />200+
    </form>
  </div>
</template>

<script>
// import { eventBus } from "../main.js"

export default {
  data() {
    return {
      carCo2PerMile: 88.2,
      radioInput: null,
      array: [],
    }
  },
  methods: {
    // consoleRadio(){
    //   console.log(this.radioInput)
    // },
    carCo2Emission() {
      console.log(this.carCo2PerMile * this.radioInput)
      this.array.push(this.carCo2PerMile * this.radioInput)
    },
  }
}
</script>

<style>
</style>