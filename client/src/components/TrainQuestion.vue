<template>
  <div>
    <form id="train-question">
    <h2>How many miles do you travel by train per month</h2>
    <input type="radio" v-model="radioInput" name="miles" v-on:change="trainCo2Emission" value="50" />under 50
    <input type="radio" v-model="radioInput" name="miles" v-on:change="trainCo2Emission" value="100" />50 - 100
    <input type="radio" v-model="radioInput" name="miles" v-on:change="trainCo2Emission" value="150" />100 - 150
    <input type="radio" v-model="radioInput" name="miles" v-on:change="trainCo2Emission" value="200" />150 - 200
    <input type="radio" v-model="radioInput" name="miles" v-on:change="trainCo2Emission" value="250" />200+
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trainCo2PerMile: 25.5,
      radioInput: null,
    }
  },
  methods: {
    trainCo2Emission() {
      console.log(this.trainCo2PerMile * this.radioInput)
    },
  }
}
</script>

<style>
</style>