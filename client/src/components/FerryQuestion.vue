<template>
  <div>
    <form id="ferry-question">
    <h2>Ferry question</h2>
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
      ferryCo2PerMile: 88.2,
      radioInput: null,
      ferryAnswer: null,
    }
  },
  methods: {
    ferryCo2Emission() {
      this.ferryAnswer = this.ferryCo2PerMile * this.radioInput;
      console.log(this.ferryAnswer);
      return this.ferryAnswer
    },
    handleChange() {
      this.ferryCo2Emission();
      eventBus.$emit("ferry-co2-emission", this.ferryAnswer)
    },
  },
}
</script>

<style>
</style>