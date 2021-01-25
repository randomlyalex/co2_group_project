<template lang="html">
    <div>
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
            questions: []
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