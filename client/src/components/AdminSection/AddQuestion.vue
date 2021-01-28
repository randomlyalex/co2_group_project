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
				type="number"
				placeholder="section id"
				v-model="questionForm.section_id"
			/>
			<select v-model="questionForm.type" required>
				<option value="" selected disabled hidden>Choose Type</option>
				<option value="checkbox">Checkbox</option>
				<option value="radio">Radio</option>
				<option value="range">Range</option>
			</select>
			<input
				type="text"
				placeholder="Question Heading"
				v-model="questionForm.questionHeading"
				required
			/>
			<input
				type="text"
				placeholder="Question Sub Heading"
				v-model="questionForm.questionSubHeading"
			/>
			<div v-for="(answer, index) in questionForm.answers" v-bind:key="index">
				<input type="text" placeholder="answer choice" v-model="answer.text" />
				<input
					type="number"
					step=".001"
					placeholder="co2amount"
					v-model="answer.co2amount"
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
				section_id: 1,
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
