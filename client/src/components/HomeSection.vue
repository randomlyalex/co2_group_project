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
     
    }
},
props:[''],
components: {
    "question-heating": QuestionHeating,
    "question-electricity": QuestionElectricity,
    "question-water": QuestionWater,
    "question-waste": QuestionWaste,
    
},

}
</script>

<style>

</style>