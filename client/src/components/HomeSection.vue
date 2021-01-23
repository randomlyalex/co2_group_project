<template>
  <div>
    <question-heating></question-heating>
    <question-electricity> </question-electricity>
    <question-water></question-water>
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
data(){
    return{
        totalHomeSection: 0,
        homeQuestionTotals: []
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
    getTotalOfHome(){
        return this.totalHomeSection = homeQuestionTotals.reduce((a, b) => a + b, 0)
    }
}

}
</script>

<style>

</style>