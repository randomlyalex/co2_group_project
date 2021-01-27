<template>
	<div id="app">
		<add-question v-on:added-question="addToQuestions"></add-question>
		<questions-list
			v-bind:questions="questions"
			v-on:delete-question="deleteQuestion"
			v-on:update-question="updateQuestion"
		></questions-list>
	</div>
</template>

<script>
import QuestionsService from '../../services/QuestionsService.js';
import AddQuestion from './AddQuestion.vue';
import QuestionsList from './QuestionsList.vue';

export default {
	name: 'AdminSection',
	data() {
		return {
			questions: [],
			sections: [],
		};
	},
	components: {
		'questions-list': QuestionsList,
		'add-question': AddQuestion,
	},
	mounted() {
		this.fetchQuestions();
	},
	methods: {
		fetchQuestions: function() {
			QuestionsService.getQuestions().then((questions) => {
				this.questions = questions;
			});
		},
		getSections: function() {},
		addToQuestions: function(question) {
			this.questions.push(question);
		},
		deleteQuestion: function(id) {
			let index = this.questions.findIndex((question) => question._id === id);
			this.questions.splice(index, 1);
		},
		updateQuestion: function(question) {
			let index = this.questions.findIndex(
				(question) => question._id === question.id
			);
			this.questions[index] = question;
		},
	},
};
</script>

<style lang="css" scoped></style>
