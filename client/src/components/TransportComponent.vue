<template>
    <div>
      <p> Your total co2 emissions from travelling: {{transportTotal}} </p>
    </div>
</template>

<script>
import CarQuestion from "./components/CarQuestion"

export default {
    name: "transport-component",
    data() {
        return {
            // motorbikeCo2PerMile: 77.7,
            // busCo2PerMile: 64.6,
            // trainCo2PerMile: 25.5,
            // planeCo2PerMile: 73,
            // ferryCo2PerMile: 11,

            

            transportValues: [],

            // transportTotal: 0,
        };
    },
    mounted() {
        // this.carCo2Emission();
        // this.motorbikeCo2Emission();
        // this.busCo2Emission();
        // this.trainCo2Emission();
        // this.planeCo2Emission();
        // this.ferryCo2Emission();

        // console.log(this.transportTotal);
    },
    methods: {

      // motorbikeCo2Emission() {
      //   this.transportValues.push(this.motorbikeCo2PerMile * 100)
      // },
      // busCo2Emission() {
      //   this.transportValues.push(this.busCo2PerMile * 100)
      // },
      // trainCo2Emission() {
      //   this.transportValues.push(this.trainCo2PerMile * 100)
      // },
      // planeCo2Emission() {
      //   this.transportValues.push(this.planeCo2PerMile * 100)
      // },
      // ferryCo2Emission() {
      //   this.transportValues.push(this.ferryCo2PerMile * 100)
      // },
    },
    computed: {
      transportTotal: function() {
        return this.transportValues.reduce((acc, item) => acc + item, 0)
      }
    },
    components: {
      "car-question": CarQuestion
    }
};
</script>

<style>
#car-question {
    border: solid black;
    padding: 1em;
    margin: 1em;
}
</style>