<template>
	<div>
		<button v-on:click="showForm = !showForm">Add Question</button>
		<!-- <form>
			<input
				type="text"
				placeholder="section id"
				v-model="questionForm.section_id"
			/>
			<input type="text" placeholder="type" v-model="questionForm.type" />
			<input
				type="text"
				placeholder="Question Heading"
				v-model="questionForm.questionHeading"
			/>
			<input
				type="text"
				placeholder="Question SubHeading"
				v-model="questionForm.questionSubHeading"
			/>
			<input
				type="text"
				placeholder="text"
				v-model="questionForm.answers[0].text"
			/>
			<input
				type="text"
				placeholder="co2amount"
				v-model="questionForm.answers[0].co2amount"
			/>
		</form> -->
		<form v-if="showForm" v-on:submit.prevent="addQuestion">
			<input
				type="text"
				placeholder="section id"
				v-model="questionForm.section_id"
			/>
			<input type="text" placeholder="type" v-model="questionForm.type" />
			<input
				type="text"
				placeholder="Question Heading"
				v-model="questionForm.questionHeading"
			/>
			<input
				type="text"
				placeholder="Question Heading"
				v-model="questionForm.questionSubHeading"
			/>
			<div v-for="(answer, index) in questionForm.answers" v-bind:key="index">
				<input type="text" placeholder="text" v-model="answer.text" />
				<input type="text" placeholder="co2amount" v-model="answer.co2amount" />
			</div>
			<button
				v-on:click.prevent="
					{
						questionForm.answers.push({ text: null, co2amount: null });
					}
				"
			>
				Add answer
			</button>

			<input type="submit" value="Save Question" />
		</form>
	</div>
</template>

<script>
import QuestionsService from '../../services/QuestionsService.js';
export default {
	name: 'AddQuestion',
	data() {
		return {
			showForm: false,
			questionForm: {
				section_id: null,
				type: null,
				questionHeading: null,
				questionSubHeading: null,
				answers: [{ text: null, co2amount: null }],
			},
		};
	},
	methods: {
		addQuestion: function() {
			QuestionsService.addQuestion(this.questionForm).then((res) =>
				this.$emit('added-question', res)
			);
			this.resetForm();
		},
		resetForm: function() {
			this.questionForm = {
				section_id: null,
				type: null,
				questionHeading: null,
				questionSubHeading: null,
				answers: [{ text: null, co2amount: null }],
			};
			this.showForm = false;
		},
	},
};
</script>

<style lang="css" scoped></style>
