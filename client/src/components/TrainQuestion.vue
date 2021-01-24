<template>
  <div>
    <form id="train-question">
    <h2>How many miles do you travel by train per month</h2>
    <input type="radio" v-model="radioInput" name="miles" value="50" />under 50
    <input type="radio" v-model="radioInput" name="miles" value="100" />50 - 100
    <input type="radio" v-model="radioInput" name="miles" value="150" />100 - 150
    <input type="radio" v-model="radioInput" name="miles" value="200" />150 - 200
    <input type="radio" v-model="radioInput" name="miles" value="250" />200+
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
      this.transportValues.push(this.trainCo2PerMile * 100)
    },
  }
}
</script>

<style>
</style>