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
		<button v-on:click="saveSection">Save Section</button>
	</div>
</template>

<script>
import QuestionComponent from './QuestionComponent.vue';
import TransportQuestions from '../static/transport_questions.json';

export default {
	name: 'TransportSection',
	components: {
		'question-component': QuestionComponent,
	},
	methods: {
		saveSection: function() {
			this.$emit('transport_questions', this.questions);
		},
	},
	data() {
		return {
			questions: TransportQuestions,
		};
	},
	computed: {
		total_transport_co2: function() {
			return this.questions.reduce((total, question) => {
				if (question.co2total >= 0) {
					return total + question.co2total;
				}
			}, 0);
		},
	},
};
</script>

<style></style>
