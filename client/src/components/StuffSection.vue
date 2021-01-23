<template>
    <div>
        <question-component-checkbox></question-component-checkbox>
        <question-component-radio></question-component-radio>
    </div>
</template>

<script>
import QuestionComponentCheckbox from "./QuestionComponentCheckbox.vue";
import QuestionComponentRadio from "./QuestionComponentRadio.vue";
export default {
    name: "StuffSection",
    components: {
        "question-component-checkbox": QuestionComponentCheckbox,
        "question-component-radio": QuestionComponentRadio,
    },
};
</script>

<style lang="scss" scoped></style>
