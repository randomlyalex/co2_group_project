<template>
  <div>
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
    <br>
        <button v-on:click="saveSection">Save Section</button>
  

            
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
props:[''],
components: {
    "question-heating": QuestionHeating,
    "question-electricity": QuestionElectricity,
    "question-water": QuestionWater,
    "question-waste": QuestionWaste,
    
},
methods: {
    
    saveSection: function(){
        this.$emit('home_questions', this.questionsCo2)
    }
},
computed: {
    
},
}

</script>

<style>

</style>