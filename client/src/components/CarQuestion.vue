<template>
  <div>
    <form id="car-question">
    <h2>How many miles do you travel in a car per week</h2>
    <input type="radio" v-model="radioInput" name="miles" v-on:change="handleChange" value="50" />under 50
    <input type="radio" v-model="radioInput" name="miles" v-on:change="handleChange" value="100" />50 - 100
    <input type="radio" v-model="radioInput" name="miles" v-on:change="handleChange" value="150" />100 - 150
    <input type="radio" v-model="radioInput" name="miles" v-on:change="handleChange" value="200" />150 - 200
    <input type="radio" v-model="radioInput" name="miles" v-on:change="handleChange" value="250" />200+
    </form>
  </div>
</template>

<script>
import { eventBus } from "../main.js"

export default {
  data() {
    return {
      carCo2PerMile: 88.2,
      radioInput: null,
      carAnswer: null,
    }
  },
  methods: {
    carCo2Emission() {
      this.carAnswer = this.carCo2PerMile * this.radioInput;
      console.log(this.carAnswer);
      return this.carAnswer
    },
    handleChange() {
      this.carCo2Emission();
      eventBus.$emit("car-co2-emission", this.carAnswer)
    },
  },
}
</script>

<style>
</style>