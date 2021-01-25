<template>
    <div class="question-container">
        <!-- <h1>This is where the question would go</h1>
        <h2>this could be a sub question</h2>
        <form
            v-if="data.type === 'range'"
            v-bind:id="data.id"
            v-on:change="updateResult"
        >
            <input
                type="range"
                id="question-answer-1"
                name="question-form"
                v-model="form_range"
            />
            <label for="question-answer-1">Label</label>
        </form> -->

        <form
            v-if="data.type === 'range'"
            v-bind:id="data.id"
            v-on:change="updateResult"
        >
            <h1>{{ data.questionHeading }}</h1>
            <h2>{{ data.questionSubHeading }}</h2>

            <input
                v-bind:type="data.type"
                id="question-answer"
                v-model="form_range"
                v-bind:name="data.id"
            />
            <div v-for="(answer, index) in data.answers" :key="index">
                <p v-if="form_range_computed == index">{{ answer.text }}</p>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "QuestionComponentRange",
    data() {
        return {
            form_range: null,
            data: {
                id: 1,
                type: "range",
                questionHeading: "This is where the question would go?",
                questionSubHeading: "this could be a sub question",
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
                ],
            },
        };
    },
    computed: {
        form_range_computed: function() {
            return (
                (this.form_range / 100) *
                (this.data.answers.length - 1)
            ).toFixed(0);
        },
        question_results: function() {
            const answers = this.data.answers;
            return {
                answers: answers,
                total_question_co2: this.data.answers[this.form_range_computed]
                    .co2amount,
            };
        },
    },
    methods: {
        updateResult: function() {
            this.$emit(
                "question_co2_total",
                this.question_results.total_question_co2
            );
            this.$emit("question_answers", this.question_results.answers);
        },
    },
    props: {},
};
</script>

<style lang="css" scoped>
.question-container {
    border: solid black;
    padding: 1em;
    margin: 1em;
}
</style>
