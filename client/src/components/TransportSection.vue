<template>
	<div>
		<question-component
			v-for="(question, index) in questions"
			:key="index"
			v-bind:data="question"
			v-on:question_co2_total="questions[index].co2total = $event"
			v-on:question_answers="questions[index].answers = $event"
		>
		</question-component>
		<button v-on:click="saveSection">Save Section</button>
	</div>
</template>

<script>
import QuestionComponent from './QuestionComponent.vue';

export default {
	name: 'TransportSection',
	components: {
		'question-component': QuestionComponent,
	},
	methods: {
		saveSection: function() {
			this.$emit('transport_questions', this.questions);
		},
	},
	data() {
		return {
			questions: [
				{
					id: 1,
					type: 'range',
					questionHeading: 'In a week, roughly how far do you travel by car?',
					questionSubHeading: '',
					answers: [
						{ text: "I don't drive", co2amount: 0 },
						{ text: 'under 100', co2amount: 0.229 },
						{ text: '100+', co2amount: 0.668 },
						{ text: '200+', co2amount: 1.15 },
						{ text: '300+', co2amount: 1.6 },
						{ text: '400+', co2amount: 2.05 },
						{ text: '500+', co2amount: 2.75 },
					],
				},
				{
					id: 2,
					type: 'range',
					questionHeading:
						'How many miles do you travel on a motorbike per week?',
					questionSubHeading: '',
					answers: [
						{ text: "I don't own a motorbike", co2amount: 0 },
						{ text: 'Under 100', co2amount: 0.208 },
						{ text: '100+', co2amount: 0.6 },
						{ text: '200+', co2amount: 1 },
						{ text: '300+', co2amount: 1 },
						{ text: '400+', co2amount: 1 },
						{ text: '500+', co2amount: 2 },
					],
				},
				{
					id: 3,
					type: 'radio',
					questionHeading:
						'How long do you spend on the bus in an average week?',
					questionSubHeading: '',
					answers: [
						{ text: "I don't take the bus", co2amount: 0 },
						{ text: 'Half an hour', co2amount: 0.035 },
						{ text: 'Up to 2 hours', co2amount: 0.1 },
						{ text: 'Between 2 and 5 hours', co2amount: 0.3 },
						{ text: '5-10 hours', co2amount: 0.6 },
						{ text: 'more than 10 hours', co2amount: 1 },
					],
				},
				{
					id: 4,
					type: 'radio',
					questionHeading: 'How many miles do you travel by train in a month?',
					questionSubHeading: '',
					answers: [
						{ text: "I don't take the train", co2amount: 0 },
						{ text: 'Less than 100', co2amount: 0.015 },
						{ text: '100+', co2amount: 0.046 },
						{ text: '250+', co2amount: 0.115 },
						{ text: '500+', co2amount: 0.229 },
						{ text: '1000+', co2amount: 0.365 },
					],
				},
				{
					id: 5,
					type: 'radio',
					questionHeading: 'How far do you fly in an average year?',
					questionSubHeading: '',
					answers: [
						{ text: "I don't fly anywhere", co2amount: 0 },
						{ text: 'Up to 200 miles', co2amount: 0.011 },
						{ text: '200-500 miles', co2amount: 0.1 },
						{ text: '500-1000 miles', co2amount: 0.3 },
						{ text: '1000+ miles', co2amount: 0.6 },
						{ text: '2000+ miles', co2amount: 1 },
					],
				},
				{
					id: 6,
					type: 'radio',
					questionHeading:
						'Do you travel by ferry at all during the year and if so, how far?',
					questionSubHeading: '',
					answers: [
						{ text: "I haven't recently taken a ferry", co2amount: 0 },
						{ text: 'Up to 50 miles', co2amount: 0.035 },
						{ text: '50+ miles', co2amount: 0.1 },
						{ text: '100+ miles', co2amount: 0.3 },
						{ text: '250+ miles', co2amount: 0.6 },
						{ text: '500+ miles', co2amount: 1 },
					],
				},
				{
					id: 7,
					type: 'checkbox',
					questionHeading:
						'Have you bought any of these vehicles in the past year?',
					questionSubHeading: '',
					answers: [
						{ text: 'New car', co2amount: 14 },
						{ text: 'New motorbike', co2amount: 9 },
						{ text: 'New boat', co2amount: 16 },
						{ text: 'New bus', co2amount: 18 },
						{ text: 'New private jet', co2amount: 20 },
						{ text: 'New train', co2amount: 25 },
						{ text: 'New rocket', co2amount: 100 },
					],
				},
			],
		};
	},
	computed: {
		total_transport_co2: function() {
			return this.questions.reduce((total, question) => {
				if (question.co2total >= 0) {
					return total + question.co2total;
				}
			}, 0);
		},
	},
};
</script>

<style></style>>

<style></style>
