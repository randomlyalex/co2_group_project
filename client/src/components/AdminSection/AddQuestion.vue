<template>
	<div>
		<button v-on:click="showForm = !showForm" v-if="!showForm">
			∨ Add Question ∨
		</button>
		<button v-on:click="showForm = !showForm" v-if="showForm">
			∧ Cancel ∧
		</button>
		<form v-if="showForm" v-on:submit.prevent="addQuestion">
			<input
				type="text"
				placeholder="section id"
				v-model.number="questionForm.section_id"
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
				<input
					type="text"
					placeholder="co2amount"
					v-model.number="answer.co2amount"
				/><button
					v-if="index + 1 === questionForm.answers.length"
					v-on:click.prevent="
						{
							questionForm.answers.push({ text: null, co2amount: null });
						}
					"
				>
					+
				</button>
				<button
					v-if="index + 1 === questionForm.answers.length"
					v-on:click.prevent="removeAnswerFromForm"
				>
					-
				</button>
			</div>

			<button v-on:click.prevent="resetForm">
				Clear
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
			this.showForm = false;
		},
		resetForm: function() {
			this.questionForm = {
				section_id: null,
				type: null,
				questionHeading: null,
				questionSubHeading: null,
				answers: [{ text: null, co2amount: null }],
			};
		},
		removeAnswerFromForm: function() {
			if (this.questionForm.answers.length > 1) {
				this.questionForm.answers.pop();
			}
		},
	},
};
</script>

<style lang="css" scoped></style>
