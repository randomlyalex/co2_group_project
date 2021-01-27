<template>
	<div>
		<div v-if="!editQuestion">
			<span>{{ question.questionHeading }}</span>
			><span></span>
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
				<span>
					<input
						type="text"
						name="name"
						:value="this.question.questionHeading"
					/>
				</span>
				<span>
					<input type="text" name="email" :value="this.question.co2"
				/></span>
				<span
					><button
						v-on:click="
							{
								editQuestion = !editQuestion;
							}
						"
					>
						Cancel</button
					><button type="submit">
						Save
					</button>
				</span>
			</form>
		</div>
	</div>
</template>

<script>
import QuestionsService from '../../services/QuestionsService.js';
export default {
	name: 'QuestionComponentAdmin',
	props: ['question'],
	data() {
		return {
			editQuestion: false,
		};
	},
	methods: {
		deleteQuestion: function() {
			QuestionsService.deleteQuestion(this.question._id).then(() =>
				this.$emit('delete-question', this.question._id)
			);
		},
		updateQuestion: function(event) {
			const question = {
				tbc: event.target.elements.heading.value,
				tbc1: event.target.elements.answers.value,
				tbc2: event.target.elements.co2.value,
			};
			const id = this.question._id;
			QuestionsService.updateQuestion(question, id).then(() => {
				question._id = id;
				this.question = question;
			});
			this.editQuestion = false;
		},
	},
};
</script>

<style lang="css" scoped></style>
