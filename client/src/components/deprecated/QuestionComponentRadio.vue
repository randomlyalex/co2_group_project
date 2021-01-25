<template>
    <div id="question-container">
        <h1>This is where the question would go</h1>
        <h2>this could be a sub question</h2>
        <form id="question-form">
            <input
                type="radio"
                id="question-answer-1"
                name="question-form"
                value="answer_1"
                v-model="radio_form_choice"
            />
            <label for="question-answer-1">Answer 1</label>
            <input
                type="radio"
                id="question-answer-2"
                name="question-form"
                value="answer_2"
                v-model="radio_form_choice"
            />
            <label for="question-answer-2">Answer 2</label>

            <input
                type="radio"
                id="question-answer-3"
                value="answer_3"
                name="question-form"
                v-model="radio_form_choice"
            />
            <label for="question-answer-3">Answer 3</label>
            <input
                type="radio"
                id="question-answer-4"
                value="answer_4"
                name="question-form"
                v-model="radio_form_choice"
            />
            <label for="question-answer-3">Answer 4</label>
        </form>
    </div>
</template>

<script>
export default {
    name: "QuestionComponentRadio",
    data() {
        return {
            question_total_co2: null,
            radio_form_choice: null,
        };
    },
    computed: {
        totalco2: function() {
            return this.radio_form_choice;
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
