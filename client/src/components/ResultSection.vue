<template lang="html">
	<div>
		<div>
			Your carbon footprint is
			{{
				this.total_diet_co2 + this.total_stuff_co2 + this.total_transport_co2 + this.total_home_co2
			}}
		</div>
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
				labels: ['Diet', 'Transport', 'Home', 'Stuff'],
			},
		};
	},
	props: [
		'diet_questions',
		'transport_questions',
		'stuff_questions',
		'home_questions'
	],
	computed: {
		series: function() {
			return [
				this.total_diet_co2,
				this.total_transport_co2,
				this.total_stuff_co2,
				this.total_home_co2,
				this.total_stuff_co2,
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
		total_home_co2: function() {
<<<<<<< HEAD
      		return this.home_questions.reduce((total, question) => {
				if (question.co2total) {
					return total + question.co2total;
				} else {
					return total;
				}
			}, 0);
		},
	}
}
=======
			return this.home_questions.reduce((a, b) => a + b, 0);
		},
	},
};
>>>>>>> develop
</script>

<style lang="css" scoped></style>
