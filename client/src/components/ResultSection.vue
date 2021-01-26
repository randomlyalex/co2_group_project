<template lang="html">
	<div>
		<div>Your carbon footprint is {{ diet_questions[0].co2total }}</div>
		<apexchart
			width="500"
			type="donut"
			v-bind:options="this.chartOptions"
			v-bind:series="this.series"
		></apexchart>
	</div>
</template>
<script>
import VueApexCharts from 'vue-apexcharts';
export default {
	name: 'ResultSection',
	components: {
		apexchart: VueApexCharts,
	},
	data: function() {
		return {
			chartOptions: {
				labels: ['Diet', 'Transport', 'Stuff', 'Home'],
			},
		};
	},
	props: [
		'diet_questions',
		'transport_questions',
		'home_questions',
		'stuff_questions',
	],
	computed: {
		series: function() {
			return [
				this.total_diet_co2,
				this.total_stuff_co2,
				this.total_transport_co2,
				14,
			];
		},
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
