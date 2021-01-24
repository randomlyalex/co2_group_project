<template>
  <div>
    <form id="plane-question">
    <h2>How many flights do you take in a year</h2>
    <input type="radio" v-model="radioInput" name="miles" v-on:change="handleChange" value="0" />I don't fly
    <input type="radio" v-model="radioInput" name="miles" v-on:change="handleChange" value="1" />1
    <input type="radio" v-model="radioInput" name="miles" v-on:change="handleChange" value="2" />2
    <input type="radio" v-model="radioInput" name="miles" v-on:change="handleChange" value="3" />3
    <input type="radio" v-model="radioInput" name="miles" v-on:change="handleChange" value="4" />4+
    </form>
  </div>
</template>

<script>
import { eventBus } from "../main.js"

export default {
  data() {
    return {
      planeCo2PerMile: 88.2,
      radioInput: null,
      planeAnswer: null,
    }
  },
  methods: {
    planeCo2Emission() {
      this.planeAnswer = this.planeCo2PerMile * this.radioInput;
      console.log(this.planeAnswer);
      return this.planeAnswer
    },
    handleChange() {
      this.planeCo2Emission();
      eventBus.$emit("plane-co2-emission", this.planeAnswer)
    },
  },
}
</script>

<style>
</style>