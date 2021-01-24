<template>
  <div>
    <form id="motorbike-question">
    <h2>How many miles do you travel on a motorbike per week</h2>
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
      motorbikeCo2PerMile: 88.2,
      radioInput: null,
    }
  },
  methods: {
    motorbikeCo2Emission() {
      this.transportValues.push(this.motorbikeCo2PerMile * 100)
    },
  }
}
</script>

<style>
</style>