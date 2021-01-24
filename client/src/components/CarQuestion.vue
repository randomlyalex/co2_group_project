<template>
  <div>
    <form id="car-question">
    <h2>How many miles do you travel in a car per week</h2>
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
      carCo2PerMile: 88.2,
      radioInput: null,
    }
  },
  methods: {
    carCo2Emission() {
      this.transportValues.push(this.carCo2PerMile * 100)
    },
  }
}
</script>

<style>
</style>