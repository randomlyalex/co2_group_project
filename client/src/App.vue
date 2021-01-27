<template>
	<div id="app">
		<landing-page
			v-if="sectionCounter === 0">
		</landing-page>
		<button
			v-if="sectionCounter === 0"
			v-on:click="sectionCounter = 1"
		>Start</button>
		<div v-if="sectionCounter !== 0">
			<button v-on:click="sectionCounter = 1">Diet</button>
			<button v-on:click="sectionCounter = 2">Transport</button>
			<button v-on:click="sectionCounter = 3">Stuff</button>
			<button v-on:click="sectionCounter = 4">Home</button>
			<button v-on:click="sectionCounter = 5">Results</button>
		</div>
		<br>
		<diet-section
			v-if="sectionCounter === 1"
			v-on:diet_questions="
				{
					diet_questions = $event;
					sectionCounter += 1;
				}
			"
		></diet-section>
		<transport-section
			v-if="sectionCounter === 2"
			v-on:transport_questions="
				{
					transport_questions = $event;
					sectionCounter += 1;
				}
			"
		></transport-section>
		<stuff-section
			v-if="sectionCounter === 3"
			v-on:stuff_questions="
				{
					stuff_questions = $event;
					sectionCounter += 1;
				}
			"
		></stuff-section>
		<home-section 
			v-if="sectionCounter === 4"
			v-on:home_questions="
				{
					home_questions = $event;
					sectionCounter += 1;
				}
			"></home-section>
		<result-section
			v-if="sectionCounter === 5"
			v-bind:diet_questions="diet_questions"
			v-bind:transport_questions="transport_questions"
			v-bind:home_questions="home_questions"
			v-bind:stuff_questions="stuff_questions"
		></result-section>
		<br>
		<button
			v-if="sectionCounter === 5"
			v-on:click="sectionCounter = 0"
		>Back to Start</button>
	</div>
</template>

<script>
import LandingPage from "./components/LandingPage.vue"
import HomeSection from './components/HomeSection.vue';
import TransportSection from './components/TransportSection.vue';
import StuffSection from './components/StuffSection.vue';
import DietSection from './components/DietSection';
import ResultSection from './components/ResultSection';

export default {
	name: 'App',
	data() {
		return {
			transport_questions: [],
			stuff_questions: [],
			diet_questions: [],
			home_questions: [],
			selectedSection: 'diet',
			sectionCounter: 0,
		};
	},
	components: {
		"landing-page": LandingPage,
		'home-section': HomeSection,
		'stuff-section': StuffSection,
		'diet-section': DietSection,
		'transport-section': TransportSection,
		'result-section': ResultSection,
	},
};
</script>

<style scoped>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
