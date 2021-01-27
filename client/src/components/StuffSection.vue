<template>
	<div>
		<button v-on:click="saveSection">Save Section</button>
		<question-component
			v-for="(question, index) in questions"
			:key="index"
			v-bind:data="question"
			v-on:question_co2_total="questions[index].co2total = $event"
			v-on:question_answers="questions[index].answers = $event"
		>
		</question-component>
		<button v-on:click="saveSection">SaveSection</button>
	</div>
</template>

<script>
import QuestionComponent from './QuestionComponent.vue';
import QuestionsService from '../services/QuestionsService.js';

export default {
	name: 'StuffSection',
	components: {
		'question-component': QuestionComponent,
	},
	methods: {
		saveSection: function() {
			this.$emit('stuff_questions', this.questions);
		},
		fetchSectionData: function(section_id) {
			QuestionsService.getQuestionsBySection(section_id).then((questions) => {
				this.questions = questions;
			});
		},
	},
	mounted() {
		this.fetchSectionData(3);
	},

	data() {
		return {
			questions: null,
		};
	},
};
</script>

<style lang="css" scoped></style>
