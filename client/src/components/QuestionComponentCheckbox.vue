<template>
    <div id="question-container">
        <h1>This is where the question would go</h1>
        <h2>this could be a sub question</h2>
        <form id="question-form">
            <input
                type="checkbox"
                id="question-answer-1"
                value="answer_1"
                v-model="radio_form_check_1"
            />
            <label for="question-answer-1">Answer 1</label>

            <input
                type="checkbox"
                id="question-answer-2"
                value="answer_2"
                v-model="radio_form_check_2"
            />
            <label for="question-answer-2">Answer 2</label>

            <input
                type="checkbox"
                id="question-answer-3"
                value="answer_3"
                v-model="radio_form_check_3"
            />
            <label for="question-answer-3">Answer 3</label>
            <input
                type="checkbox"
                id="question-answer-4"
                value="answer_4"
                v-model="radio_form_check_4"
            />
            <label for="question-answer-3">Answer 4</label>
        </form>
    </div>
</template>

<script>
export default {
    name: "QuestionComponentCheckbox",
    question_total_co2: null,
    radio_form_check_1: null,
    radio_form_check_2: null,
    radio_form_check_3: null,
    radio_form_check_4: null,
};
</script>

<style lang="css" scoped>
#question-container {
    border: solid black;
    padding: 1em;
    margin: 1em;
}
</style>
