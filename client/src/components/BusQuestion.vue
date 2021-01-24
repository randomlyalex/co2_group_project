<template>
  <div>
    <form id="bus-question">
    <h2>How many miles do you travel on the bus per week</h2>
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
      busCo2PerMile: 64.6,
      radioInput: null,
    }
  },
  methods: {
    busCo2Emission() {
      this.transportValues.push(this.busCo2PerMile * 100)
    },
  }
}
</script>

<style>
</style>