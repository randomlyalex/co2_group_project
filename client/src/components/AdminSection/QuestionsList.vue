<template>
	<div>
		<question-component-admin
			v-on="$listeners"
			v-bind:question="question"
			v-for="(question, index) in questions"
			:key="index"
		></question-component-admin>
	</div>
</template>

<script>
import QuestionComponentAdmin from './QuestionComponentAdmin.vue';
export default {
	name: 'QuestionsList',
	components: {
		'question-component-admin': QuestionComponentAdmin,
	},
	props: ['questions'],
};
</script>

<style lan QuestionComponentg="css" scoped></style>
