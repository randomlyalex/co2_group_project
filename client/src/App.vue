<template>
	<div id="app">
		<button v-on:click="selectedSection = 'diet'">Diet</button>
		<button v-on:click="selectedSection = 'transport'">Transport</button>
		<button v-on:click="selectedSection = 'stuff'">Stuff</button>
		<button v-on:click="selectedSection = 'home'">Home</button>
		<button v-on:click="selectedSection = 'results'">Results</button>
		<diet-section
			v-if="selectedSection === 'diet'"
			v-on:diet_questions="diet_questions = $event"
		></diet-section>
		<transport-section
			v-if="selectedSection === 'transport'"
			v-on:transport_questions="transport_questions = $event"
		></transport-section>
		<stuff-section
			v-if="selectedSection === 'stuff'"
			v-on:stuff_questions="stuff_questions = $event"
		></stuff-section>
		<home-section v-if="selectedSection === 'home'"></home-section>
		<result-section
			v-if="selectedSection === 'results'"
			v-bind:diet_questions="diet_questions"
			v-bind:transport_questions="transport_questions"
			v-bind:home_questions="home_questions"
			v-bind:stuff_questions="stuff_questions"
		></result-section>
	</div>
</template>

<script>
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
		};
	},
	components: {
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
