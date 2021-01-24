<template>
  <div>
    <form id="plane-question">
    <h2>How many flights do you take in a year</h2>
    <input type="radio" v-model="radioInput" name="miles" v-on:change="planeCo2Emission" value="0" />I don't fly
    <input type="radio" v-model="radioInput" name="miles" v-on:change="planeCo2Emission" value="1" />1
    <input type="radio" v-model="radioInput" name="miles" v-on:change="planeCo2Emission" value="2" />2
    <input type="radio" v-model="radioInput" name="miles" v-on:change="planeCo2Emission" value="3" />3
    <input type="radio" v-model="radioInput" name="miles" v-on:change="planeCo2Emission" value="4" />4+
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      planeCo2PerMile: 73,
      radioInput: null,
    }
  },
  methods: {
    planeCo2Emission() {
      console.log(this.planeCo2PerMile * this.radioInput)
    },
  }
}
</script>

<style>
</style>