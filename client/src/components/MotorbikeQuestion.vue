<template>
  <div>
    <form id="motorbike-question">
    <h2>How many miles do you travel on a motorbike per week</h2>
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
      motorbikeCo2PerMile: 88.2,
      radioInput: null,
      motorbikeAnswer: null,
    }
  },
  methods: {
    motorbikeCo2Emission() {
      this.motorbikeAnswer = this.motorbikeCo2PerMile * this.radioInput;
      console.log(this.motorbikeAnswer);
      return this.motorbikeAnswer
    },
    handleChange() {
      this.motorbikeCo2Emission();
      eventBus.$emit("motorbike-co2-emission", this.motorbikeAnswer)
    },
  },
}
</script>

<style>
</style>