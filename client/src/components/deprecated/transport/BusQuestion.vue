<template>
  <div>
    <form id="bus-question">
    <h2>How many miles do you travel on the bus per week</h2>
    <input type="radio" v-model="radioInput" name="miles"  v-on:change="handleChange" value="50" />under 50
    <input type="radio" v-model="radioInput" name="miles"  v-on:change="handleChange" value="100" />50 - 100
    <input type="radio" v-model="radioInput" name="miles" v-on:change="handleChange" value="150" />100 - 150
    <input type="radio" v-model="radioInput" name="miles" v-on:change="handleChange" value="200" />150 - 200
    <input type="radio" v-model="radioInput" name="miles" v-on:change="handleChange" value="250" />200+
    </form>
  </div>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  data() {
    return {
      busCo2PerMile: 64.6,
      radioInput: null,
      busAnswer: null,
    }
  },
  methods: {
    busCo2Emission() {
      this.busAnswer = this.busCo2PerMile * this.radioInput;
      return this.busAnswer
    },
    handleChange() {
      this.busCo2Emission();
      eventBus.$emit("bus-co2-emission", this.busAnswer)
    },
  },
}
</script>

<style>
</style>