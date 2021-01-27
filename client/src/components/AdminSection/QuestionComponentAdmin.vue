<template>
	<div>
		<div v-if="!editQuestion">
			<span>{{ question.questionHeading }}</span>
			<span></span>
			<span>
				<button v-on:click="deleteQuestion">
					Delete
				</button>
				<button
					v-on:click="
						{
							editQuestion = !editQuestion;
						}
					"
				>
					Edit
				</button>
			</span>
		</div>
		<div v-if="editQuestion">
			<form v-on:submit.prevent="updateQuestion">
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
					/>
					<button
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
				<input type="submit" value="Save Question" />
				<button
					v-on:click="
						{
							editQuestion = !editQuestion;
						}
					"
				>
					Cancel
				</button>
			</form>
		</div>
	</div>
</template>

<script>
import QuestionsService from '../../services/QuestionsService.js';
export default {
	name: 'QuestionComponentAdmin',
	data() {
		return {
			editQuestion: false,
			questionForm: this.question,
		};
	},
	props: ['question'],
	methods: {
		deleteQuestion: function() {
			QuestionsService.deleteQuestion(this.question._id).then(() =>
				this.$emit('delete-question', this.question._id)
			);
		},
		updateQuestion: function() {
			const id = this.questionForm._id;
			delete this.questionForm._id;
			QuestionsService.updateQuestion(this.questionForm, id);
			this.questionForm._id = id;
			this.editQuestion = false;
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
