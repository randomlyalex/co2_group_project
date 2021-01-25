<template>
  <div>
    <question-heating 
    v-on:heatingTotal="questionsCo2[0] = $event"
    v-on:electricityTotal="questionsCo2[1] = $event">
    </question-heating>
    <br>
    <br>
    <question-electricity></question-electricity>
    <br>
    <br>
    <question-water></question-water>
    <br>
    <br>
    <question-waste></question-waste>

  

            
  </div>
</template>

<script>
import QuestionHeating from './QuestionHeating.vue'
import QuestionElectricity from './QuestionElectricity.vue'
import QuestionWater from './QuestionWater.vue'
import QuestionWaste from './QuestionWaste.vue'

export default {
name: "home-section",
data() {
    return {
        questionsCo2: []
    }
},
computed: {
    totalSectionCo2: function() {
        return this.questionsCo2.reduce((a, b) => a + b, 0)
    }
},
props:[''],
components: {
    "question-heating": QuestionHeating,
    "question-electricity": QuestionElectricity,
    "question-water": QuestionWater,
    "question-waste": QuestionWaste,
    
},
methods: {
},
}

</script>

<style>

</style>