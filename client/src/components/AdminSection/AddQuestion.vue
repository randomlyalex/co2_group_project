<template>
	<div>
		<button v-on:click="showForm = !showForm">Add Question</button>

		<form v-if="showForm === true" v-on:submit.prevent="addQuestion">
			<input type="text" placeholder="test" />
			<input type="email" placeholder=" test" />
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
		};
	},
	methods: {
		addQuestion() {
			const booking = {
				guestName: this.name,
				email: this.email,
				checkedIn: this.checkedIn,
			};
			QuestionsService.addQuestion(booking).then((res) =>
				this.$emit('added-question', res)
			);
		},
	},
};
</script>

<style lang="css" scoped></style>
