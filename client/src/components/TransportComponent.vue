<template>
  <div>
    <car-question></car-question>
    <motorbike-question></motorbike-question>
    <bus-question></bus-question>
    <train-question></train-question>
    <plane-question></plane-question>
    <ferry-question></ferry-question>
    <p> Your total co2 emissions from travelling: {{transportTotal}} </p>
  </div>
</template>

<script>
import CarQuestion from "./CarQuestion";
import MotorbikeQuestion from "./MotorbikeQuestion";
import BusQuestion from "./BusQuestion";
import TrainQuestion from "./TrainQuestion";
import PlaneQuestion from "./PlaneQuestion";
import FerryQuestion from "./FerryQuestion";

import { eventBus } from "../main.js"

export default {
  name: "transport-component",
  data() {
      return {
          transportValues: [],
      };
  },
  mounted() {
    eventBus.$on("car-co2-emission", (carAnswer) => {
      this.transportValues.push(carAnswer);
      console.log(this.transportTotal)
    })
  },
  methods: {

  },
  computed: {
    transportTotal: function() {
      return this.transportValues.reduce((acc, item) => acc + item, 0);
    }
  },
  components: {
    "car-question": CarQuestion,
    "motorbike-question": MotorbikeQuestion,
    "bus-question": BusQuestion,
    "train-question": TrainQuestion,
    "plane-question": PlaneQuestion,
    "ferry-question": FerryQuestion
  }
};
</script>

<style>
#car-question {
    border: solid black;
    padding: 1em;
    margin: 1em;
}
#motorbike-question {
    border: solid black;
    padding: 1em;
    margin: 1em;
}
#bus-question {
    border: solid black;
    padding: 1em;
    margin: 1em;
}
#train-question {
    border: solid black;
    padding: 1em;
    margin: 1em;
}
#plane-question {
    border: solid black;
    padding: 1em;
    margin: 1em;
}
#ferry-question {
    border: solid black;
    padding: 1em;
    margin: 1em;
}

</style>