<template>
  <div v-on:change="handleChange">
    <question-heating 
    v-on:heatingTotal="questionsCo2[0] = $event"
    ></question-heating>
    <br>
    <br>
    <question-electricity 
    v-on:electricityTotal="questionsCo2[1] = $event">
    </question-electricity>
    <br>
    <br>
    <question-water 
    v-on:waterTotal="questionsCo2[2] = $event">
    </question-water>
    <br>
    <br>
    <question-waste 
    v-on:wasteTotal="questionsCo2[3] = $event">>
    </question-waste>

  

            
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
        return parseInt(this.questionsCo2).reduce((a, b) => a + b, 0)
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
    handleChange: function(){
        this.$emit('heatingTotal', this.heatingCo2Total)
    }
},
}

</script>

<style>

</style>