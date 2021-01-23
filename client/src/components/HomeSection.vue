<template>
  <div>
    {{newData}}
  
    <h2>Heating</h2>
    <br>
    <home-section-question 
    v-bind:newData="newData" 
    v-bind:newData2="newData2"
    ></home-section-question>
    <home-section-question-2></home-section-question-2>
  

    
        <!-- <p>Is heating oil, coal, wood or bottled gas used in your household?</p>
            <input type="radio" id="home-section" name="yes" value="yes">
            <label for="yes">Yes</label><br>
            <input type="radio" id="home-section" name="no" value="no">
            <label for="no">No</label><br> -->
  </div>
</template>

<script>
import HomeSectionQuestion from './HomeSectionQuestion.vue'
import HomeSectionQuestion2 from './HomeSectionQuestion2.vue'

export default {
name: "HomeSection",
data(){
    return{
        newData: "a String Again Changed",
        newData2: "second string",
        questions: [],
        totalOfSection: [], 
    }
},
props:[''],
components: {
    "home-section-question": HomeSectionQuestion,
    "home-section-question-2": HomeSectionQuestion2
}
}
</script>

<style>

</style>