<template lang="html">
    <div class="slider-wrapper">
        <question-component
            v-for="(question, index) in questions"
            :key="index"
            v-bind:data="question"
            v-on:question_co2_total="questions[index].co2total = $event"
            v-on:question_answers="questions[index].answers = $event"
        >
        </question-component>
        <button v-on:click="saveSection">Save Section</button>
    </div>
</template>

<script>
import QuestionComponent from "./QuestionComponent.vue";

export default {
    name: "DietSection",
    components: {
        "question-component": QuestionComponent,
    },
    methods: {
        saveSection: function() {
            this.$emit("stuff_questions", this.questions);
        },
    },
    data() {
        return {
            questions: [
                {
                    id: 1,
                    type: "range",
                    questionHeading: "Do you eat animal-origin products?",
                    questionSubHeading: "(meat, fish, eggs, dairy)",
                    answers: [
                        { text: "Never! I'm a level 7 vegan: I'm married to a carrot", co2amount: 1.4 },
                        { text: "No - I'm vegan, no food with a face", co2amount: 1.5 },
                        { text: "I'm vegetarian - cheese and eggs are some of my closest friends", co2amount: 1.7 },
                        { text: "I'm a flexitarian/pescetarian - but I don't eat beef", co2amount: 1.8 },
                        { text: "I'm partial to the odd sausage", co2amount: 1.9 },
                        { text: "I have a meaty treat most days", co2amount: 2.5 },
                        { text: "I eat beef all day long", co2amount: 3.3 }
                    ]
                },
                {
                    id: 2,
                    type: "range",
                    questionHeading: "How much of your food is locally-sourced?",
                    questionSubHeading: "Fun fact! Did you know that switching to a plant-based diet for just one day a week saves more carbon emissions that switching to 100% locally-sourced food?",
                    answers: [
                        { text: "All of it! I grow my own veg", co2amount: 0.01 },
                        { text: "A lot! I'm a regular at my local farmers' market", co2amount: 0.02 },
                        { text: "Quite a lot - I try to eat seasonally and sometimes I think about food miles", co2amount: 0.03 },
                        { text: "Ummmmm I don't know? I buy it in a local supermarket, but where it's been before the supermarket is anyone's guess", co2amount: 0.128 },
                        { text: "None of it! I ONLY eat food that has been on a plane - in fact, I have my own private jet just for sandwiches", co2amount: 0.2 }
                    ]
                },
                {
                    id: 3,
                    type: "range",
                    questionHeading: "How much food do you end up throwing away?",
                    answers: [
                        { text: "None of it - I am a highly evolved meal planner, and I compost all my peelings etc", co2amount: 0.01 },
                        { text: "Very little of it - I treat 'use by dates' with a daredevil disdain", co2amount: 0.02 },
                        { text: "Some of it... sometimes I buy more than I need", co2amount: 0.03 },
                        { text: "All of it! I buy food just so I can put it in the bin!", co2amount: 1 }
                    ]
                },
            ]
        }
    },
    computed: {
        total_stuff_co2: function() {
            return this.questions.reduce((total, question) => {
                if (question.co2total > 0) {
                    return total + question.co2total;
                }
            }, 0);
        }
    }

};
</script>

<style lang="css" scoped>


</style>