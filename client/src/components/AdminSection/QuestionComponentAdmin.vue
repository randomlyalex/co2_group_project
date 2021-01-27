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
				<span>
					<input
						type="text"
						placeholder="section id"
						:value="question.section_id"
					/>
				</span>

				<span>
					<input type="text" placeholder="type" :value="question.type" />
					<input
						type="text"
						placeholder="Question Heading"
						:value="question.questionHeading"
					/>
					<input
						type="text"
						placeholder="Question Heading"
						:value="question.questionSubHeading"
					/>
					<div v-for="(answer, index) in question.answers" v-bind:key="index">
						<input type="text" placeholder="text" :value="answer.text" />
						<input
							type="text"
							placeholder="co2amount"
							:value="answer.co2amount"
						/>
						<button
							v-on:click.prevent="
								{
									question.answers.splice(index);
								}
							"
						>
							X
						</button>
					</div>
					<button
						v-on:click.prevent="
							{
								question.answers.push({ text: null, co2amount: null });
							}
						"
					>
						Add answer
					</button>
				</span>
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
		deleteQuestion: function() {
			QuestionsService.deleteQuestion(this.question._id).then(() =>
				this.$emit('delete-question', this.question._id)
			);
		},
		updateQuestion: function(event) {
			//FIX THE UPDATE FUNCTION
			const question = {
				section_id: event.target.elements.section_id.value, ///FIX THIS
				type: event.target.elements.type.value,
				questionHeading: event.target.elements.questionHead.value,
				questionSubHeading: null,
				answers: [{ text: null, co2amount: null }],
			};

			const id = this.question._id;
			QuestionsService.updateQuestion(question, id).then(() => {
				question._id = id;
				this.question = question;
			});
			this.editQuestion = false;
		},
		mounted() {
			this.questionForm = this.question;
		},
	},
};
</script>

<style lang="css" scoped></style>
