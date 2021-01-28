<template>
	<div id="app">
		<div class="top-container-menu">
			<button v-on:click="sectionCounter = 7">Admin</button>
			<landing-page v-if="sectionCounter === 0"> </landing-page>
			<button v-if="sectionCounter === 0" v-on:click="sectionCounter = 1">
				Start
			</button>
			<div v-if="sectionCounter !== 0">
				<button v-on:click="sectionCounter = 1">Diet</button>
				<button v-on:click="sectionCounter = 2">Transport</button>
				<button v-on:click="sectionCounter = 3">Stuff</button>
				<button v-on:click="sectionCounter = 4">Home</button>
				<button
					v-on:click="
						{
							sectionCounter = 5;
							resultsVisted = true;
						}
					"
				>
					Results
				</button>
			</div>
		</div>
		<div class="main-container">
			<!-- <div class="left-container"> -->
			<diet-section
				v-if="sectionCounter === 1"
				v-on:diet_questions="
					{
						diet_questions = $event;
						if (!resultsVisted) {
							sectionCounter += 1;
						} else sectionCounter = 5;
					}
				"
			></diet-section>
			<transport-section
				v-if="sectionCounter === 2"
				v-on:transport_questions="
					{
						transport_questions = $event;
						if (!resultsVisted) {
							sectionCounter += 1;
						} else sectionCounter = 5;
					}
				"
			></transport-section>
			<stuff-section
				v-if="sectionCounter === 3"
				v-on:stuff_questions="
					{
						stuff_questions = $event;
						if (!resultsVisted) {
							sectionCounter += 1;
						} else sectionCounter = 5;
					}
				"
			></stuff-section>
			<home-section
				v-if="sectionCounter === 4"
				v-on:home_questions="
					{
						home_questions = $event;
						if (!resultsVisted) {
							sectionCounter += 1;
						} else sectionCounter = 5;
						resultsVisted = true;
					}
				"
			></home-section>
			<admin-section v-if="sectionCounter === 7"></admin-section>
			<!-- </div>
			<div class="right-container"> -->
			<result-section
				v-if="sectionCounter === 5"
				v-bind:diet_questions="diet_questions"
				v-bind:transport_questions="transport_questions"
				v-bind:stuff_questions="stuff_questions"
				v-bind:home_questions="home_questions"
			></result-section>
			<!-- </div> -->
		</div>
		<!-- <button v-if="sectionCounter === 5" v-on:click="sectionCounter = 0">
			Back to Start
		</button> -->
	</div>
</template>

<script>
import LandingPage from './components/LandingPage.vue';
import HomeSection from './components/HomeSection.vue';
import TransportSection from './components/TransportSection.vue';
import StuffSection from './components/StuffSection.vue';
import DietSection from './components/DietSection';
import ResultSection from './components/ResultSection';
import AdminSection from './components/AdminSection/AdminSectionIndex.vue';
// import QuestionsService from './services/QuestionsService.js';

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
			resultsVisted: false,
		};
	},
	components: {
		'landing-page': LandingPage,
		'home-section': HomeSection,
		'stuff-section': StuffSection,
		'diet-section': DietSection,
		'transport-section': TransportSection,
		'result-section': ResultSection,
		'admin-section': AdminSection,
	},
	// mounted() {
	// 	this.fetchSectionData(3);
	// },
	// methods: {
	// 	fetchSectionData: function(section_id) {
	// 		QuestionsService.getQuestionsBySection(section_id).then((questions) => {
	// 			this.stuff_questions = questions;
	// 		});
	// 	},
	// },
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
/* .main-container {
	display: flex;
}
.right-container {
	width: 200em;
}
.left-container {
	width: 200em;
} */
</style>
