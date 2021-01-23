<template>
    <div>
        <form>
            <h2>Car Questions</h2>
            <label for="miles">How many miles do you travel in a car per week</label>
            <br>
            <input type="radio" name="fifty" value="under50" />under 50
            <input type="radio" name="miles" value="50" />50+
            <input type="radio" name="miles" value="100" />100+
            <input type="radio" name="miles" value="150" />150+
            <input type="radio" name="miles" value="200" />200+
        </form>
    </div>
</template>

<script>
export default {
    name: "transport-form",
    data() {
        return {
            carCo2PerKm: 141.9,
            // motorbikeCo2PerKm: 141.9,
            busCo2PerKm: 104,
            trainCo2PerKm: 41,
            // planeCo2PerKm: 104,
            // ferryCo2PerKm: 104,

            transportValues: [],

            transportTotal: 0,
        };
    },
    created() {
        this.carCo2Emission();
        // this.motorbikeCo2Emission();
        this.busCo2Emission();
        this.trainCo2Emission();
        // this.planeCo2Emission();
        // this.ferryCo2Emission();
        this.transportTotal = this.transportValues.reduce(
            (acc, item) => acc + item,
            0
        );
        console.log(this.transportTotal);
    },
    methods: {
      carCo2Emission() {
        this.transportValues.push(this.carCo2PerKm * 100)
      },
      // motorbikeCo2Emission() {
      //   this.transportValues.push(this.motorbikeCo2PerKm * 100)
      // },
      busCo2Emission() {
        this.transportValues.push(this.busCo2PerKm * 100)
      },
      trainCo2Emission() {
        this.transportValues.push(this.trainCo2PerKm * 100)
      },
      // planeCo2Emission() {
      //   this.transportValues.push(this.planeCo2PerKm * 100)
      // },
      // ferryCo2Emission() {
      //   this.transportValues.push(this.ferryCo2PerKm * 100)
      // },
    }
};
</script>

<style>
</style>