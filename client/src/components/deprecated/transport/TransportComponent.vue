<template>
  <div>
    <car-question></car-question>
    <motorbike-question></motorbike-question>
    <bus-question></bus-question>
    <train-question></train-question>
    <plane-question></plane-question>
    <ferry-question></ferry-question>
    <p> Total co2 from transport: {{transportTotal}} </p>
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
      this.transportValues.splice(0, 1, carAnswer);
    })
    eventBus.$on("motorbike-co2-emission", (motorbikeAnswer) => {
      this.transportValues.splice(1, 1, motorbikeAnswer);
    })
    eventBus.$on("bus-co2-emission", (busAnswer) => {
      this.transportValues.splice(2, 1, busAnswer);
    })
    eventBus.$on("train-co2-emission", (trainAnswer) => {
      this.transportValues.splice(3, 1, trainAnswer);
    })
    eventBus.$on("plane-co2-emission", (planeAnswer) => {
      this.transportValues.splice(4, 1, planeAnswer);
    })
    eventBus.$on("ferry-co2-emission", (ferryAnswer) => {
      this.transportValues.splice(5, 1, ferryAnswer);
    })
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