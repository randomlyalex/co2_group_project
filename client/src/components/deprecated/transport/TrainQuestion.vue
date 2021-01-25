<template>
  <div>
    <form id="train-question">
    <h2>How many miles do you travel by train per month</h2>
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
      trainCo2PerMile: 43,
      radioInput: null,
      trainAnswer: null,
    }
  },
  methods: {
    trainCo2Emission() {
      this.trainAnswer = this.trainCo2PerMile * this.radioInput;
      return this.trainAnswer
    },
    handleChange() {
      this.trainCo2Emission();
      eventBus.$emit("train-co2-emission", this.trainAnswer)
    },
  },
}
</script>

<style>
</style>