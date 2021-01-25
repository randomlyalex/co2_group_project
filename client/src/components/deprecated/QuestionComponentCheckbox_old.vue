<template>
    <div id="question-container">
        <h1>Have you bought a new laptop in the last year?</h1>
        <h2></h2>
        <form v-bind:id="question.id" v-on:change="updateResult">
            <input
                type="checkbox"
                id="question-answer-1"
                v-model="form_check_1"
                v-bind:name="question.id"
            />
            <label for="question-answer-1">Yes, Shiny new MacBook</label>

            <input
                type="checkbox"
                id="question-answer-2"
                value="answer_2"
                v-model="form_check_2"
            />
            <label for="question-answer-2">Yes, but it was second hand</label>

            <input
                type="checkbox"
                id="question-answer-3"
                value="answer_3"
                v-model="form_check_3"
            />
            <label for="question-answer-3"
                >No, my old one is doing just fine!</label
            >
            <input
                type="checkbox"
                id="question-answer-4"
                value="answer_4"
                v-model="form_check_4"
            />
            <label for="question-answer-3">Answer 4</label>
        </form>
    </div>
</template>

<script>
export default {
    name: "QuestionComponentCheckbox",
    data() {
        return {
            form_check_1: false,
            form_check_2: false,
            form_check_3: false,
            form_check_4: false,
        };
    },
    computed: {
        question_results: function() {
            return {
                questions: {
                    co2_values: {
                        answer_1: this.form_check_1 * 1,
                        answer_2: this.form_check_2 * 1,
                        answer_3: this.form_check_3 * 1,
                        answer_4: this.form_check_4 * 1,
                    },
                    human_friendly: {
                        answer_1: this.form_check_1 * 1,
                        answer_2: this.form_check_2 * 1,
                        answer_3: this.form_check_3 * 1,
                        answer_4: this.form_check_4 * 1,
                    },
                },
                total_question_co2:
                    this.form_check_1 * 1 +
                    this.form_check_2 * 1 +
                    this.form_check_3 * 1 +
                    this.form_check_4 * 1,
            };
        },
    },
    methods: {
        updateResult: function() {
            this.$emit("question_co2_total", this.question_results);
        },
    },
};
</script>

<style lang="css" scoped>
#question-container {
    border: solid black;
    padding: 1em;
    margin: 1em;
}
</style>
