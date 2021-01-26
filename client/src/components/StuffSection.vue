<template>
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
    name: "StuffSection",
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
                    type: "radio",
                    questionHeading:
                        "Have you bought a new laptop in the last year?",
                    questionSubHeading: "",
                    answers: [
                        { text: "Yes, Shiny new MacBook", co2amount: 1 },
                        {
                            text: "Yes, but it was second hand",
                            co2amount: 1,
                        },
                        {
                            text: "No, my old one is doing just fine!",
                            co2amount: 1,
                        },
                        { text: "Answer 4", co2amount: 1 },
                        { text: "Answer 5", co2amount: 2 },
                    ],
                },
                {
                    id: 2,
                    type: "checkbox",
                    questionHeading:
                        "What big purchases have you made in the last year?",
                    questionSubHeading: "",
                    answers: [
                        { text: "Sofa", co2amount: 1 },
                        {
                            text: "Fridge Freezer",
                            co2amount: 1,
                        },
                        {
                            text: "Car",
                            co2amount: 1,
                        },
                    ],
                },
                {
                    id: 3,
                    type: "range",
                    questionHeading: "This is where the question would go?",
                    questionSubHeading: "hopefully this slider works now",
                    answers: [
                        { text: "A little", co2amount: 10 },
                        {
                            text: "A little More",
                            co2amount: 12,
                        },
                        {
                            text: "More Again",
                            co2amount: 15,
                        },
                        { text: "Loads", co2amount: 20 },
                        { text: "Too Much!", co2amount: 22 },
                        { text: "Even Mooooore!", co2amount: 52 },
                        { text: "Astronomical", co2amount: 222 },
                    ],
                },
            ],
        };
    },
    computed: {
        total_question_co2: function() {
            return this.questions.reduce((total, question) => {
                if (question.co2total > 0) {
                    return total + question.co2total;
                }
            }, 0);
        },
    },
};
</script>

<style lang="css" scoped></style>
