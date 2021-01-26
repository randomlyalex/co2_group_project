<template lang="html">
	<div>Your carbon footprint is {{ diet_questions[0].co2total }}</div>
</template>

<script>
export default {
	name: 'ResultSection',
	props: [
		'diet_questions',
		'transport_questions',
		'home_questions',
		'stuff_questions',
	],
	computed: {
		total_diet_co2: function() {
			return this.diet_questions.reduce((total, question) => {
				if (question.co2total) {
					return total + question.co2total;
				} else {
					return total;
				}
			}, 0);
		},
		total_stuff_co2: function() {
			return this.stuff_questions.reduce((total, question) => {
				if (question.co2total) {
					return total + question.co2total;
				} else {
					return total;
				}
			}, 0);
		},
		total_transport_co2: function() {
			return this.transport_questions.reduce((total, question) => {
				if (question.co2total) {
					return total + question.co2total;
				} else {
					return total;
				}
			}, 0);
		},
	},
};
</script>

<style lang="css" scoped></style>
