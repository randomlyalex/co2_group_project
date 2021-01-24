<template>
  <div>
    <form id="motorbike-question">
    <h2>How many miles do you travel on a motorbike per week</h2>
    <input type="radio" v-model="radioInput" name="miles" v-on:change="motorbikeCo2Emission" value="50" />under 50
    <input type="radio" v-model="radioInput" name="miles" v-on:change="motorbikeCo2Emission" value="100" />50 - 100
    <input type="radio" v-model="radioInput" name="miles" v-on:change="motorbikeCo2Emission" value="150" />100 - 150
    <input type="radio" v-model="radioInput" name="miles" v-on:change="motorbikeCo2Emission" value="200" />150 - 200
    <input type="radio" v-model="radioInput" name="miles" v-on:change="motorbikeCo2Emission" value="250" />200+
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      motorbikeCo2PerMile: 77.7,
      radioInput: null,
    }
  },
  methods: {
    motorbikeCo2Emission() {
      console.log(this.motorbikeCo2PerMile * this.radioInput)
    },
  }
}
</script>

<style>
</style>