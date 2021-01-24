<template>
    <div id="question-container">
        <form
            v-if="data.type === 'checkbox'"
            v-bind:id="data.id"
            v-on:change="updateResult"
        >
            <h1>{{ data.questionHeading }}</h1>
            <h2>{{ data.questionSubHeading }}</h2>
            <div v-for="(answer, index) in data.answers" :key="index">
                <!-- v-model below is the only thing i cant make work for both-->
                <input
                    v-bind:type="data.type"
                    v-bind:id="'question-answer-' + index"
                    v-model="form_check[index]"
                    v-bind:name="data.id"
                />
                <label v-bind:id="'question-answer-' + index">
                    {{ answer.text }}
                </label>
            </div>
        </form>

        <form
            v-if="data.type === 'radio'"
            v-bind:id="data.id"
            v-on:change="updateResult"
        >
            <h1>{{ data.questionHeading }}</h1>
            <h2>{{ data.questionSubHeading }}</h2>
            <div v-for="(answer, index) in data.answers" :key="index">
                <input
                    v-bind:type="data.type"
                    v-bind:id="'question-answer-' + index"
                    v-model="form_radio"
                    v-bind:value="index"
                    v-bind:name="data.id"
                />
                <label v-bind:id="'question-answer-' + index">
                    {{ answer.text }}
                </label>
            </div>
        </form>

        <form
            v-if="data.type === 'range'"
            v-bind:id="data.id"
            v-on:change="updateResult"
        >
            <h1>{{ data.questionHeading }}</h1>
            <h2>{{ data.questionSubHeading }}</h2>
            <div v-for="(answer, index) in data.answers" :key="index">
                <input
                    v-bind:type="data.type"
                    v-bind:id="'question-answer-' + index"
                    v-model="form_radio"
                    v-bind:value="index"
                    v-bind:name="data.id"
                />
                <label v-bind:id="'question-answer-' + index">
                    {{ answer.text }}
                </label>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "QuestionComponentCheckbox",
    data() {
        return {
            form_check: [],
            form_radio: null,
        };
    },
    computed: {
        question_results: function() {
            if (this.form_radio != null) {
                const answers = this.data.answers;
                return {
                    answers: answers,
                    total_question_co2: this.data.answers[this.form_radio]
                        .co2amount,
                };
            } else if (this.form_check.length > 0) {
                let answered = this.data.answers.map((answer, index) => {
                    answer.isChecked = this.form_check[index];
                    return answer;
                });
                const total_question_co2 = answered.reduce(
                    (total_co2, answer) => {
                        if (answer.isChecked === true) {
                            return total_co2 + answer.co2amount;
                        } else return total_co2;
                    },
                    0
                );
                const results = {
                    answers: answered,
                    total_question_co2: total_question_co2,
                };
                return results;
            } else return null;
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
    props: { data: Object },
};
</script>

<style lang="css" scoped>
#question-container {
    border: solid black;
    padding: 1em;
    margin: 1em;
}
</style>
