<template>
	<div id="app">
		<landing-page
			v-if="sectionCounter === 0">
		</landing-page>
		<button
		class="button"
			v-if="sectionCounter === 0"
			v-on:click="sectionCounter = 1"
		>Start</button>
		<div class="breadcrumbs" v-if="sectionCounter !== 0">
			<button class="button" v-on:click="sectionCounter = 1">Diet</button>
			<button class="button" v-on:click="sectionCounter = 2">Transport</button>
			<button class="button" v-on:click="sectionCounter = 3">Stuff</button>
			<button class="button" v-on:click="sectionCounter = 4">Home</button>
			<button class="button" v-on:click="sectionCounter = 5">Results</button>
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
			"
			></home-section>
		<result-section
			v-if="sectionCounter === 5"
			v-bind:diet_questions="diet_questions"
			v-bind:transport_questions="transport_questions"
			v-bind:stuff_questions="stuff_questions"
			v-bind:home_questions="home_questions"
		></result-section>
		<button
		class="button"
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

.breadcrumbs {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  flex: 2;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  background-color: #4FD1C5;;
}

.button {
  min-width: 50px;
  min-height: 10px;
  font-family: 'Nunito', sans-serif;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  color: #313133;
  background: #4FD1C5;
background: linear-gradient(90deg, rgba(129,230,217,1) 0%, rgba(79,209,197,1) 100%);
  border: none;
  border-radius: 1000px;
  box-shadow: 12px 12px 24px rgba(79,209,197,.64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;
  }

button::before {
content: '';
  border-radius: 1000px;
  min-width: calc(300px + 12px);
  min-height: calc(60px + 12px);
  border: 6px solid #00FFCB;
  box-shadow: 0 0 60px rgba(0,255,203,.64);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all .3s ease-in-out 0s;
}

.button:hover, .button:focus {
  color: #313133;
  transform: translateY(-6px);
}

button:hover::before, button:focus::before {
  opacity: 1;
}

button::after {
  content: '';
  width: 30px; height: 30px;
  border-radius: 100%;
  border: 6px solid #00FFCB;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring 3s infinite;
}

button:hover::after, button:focus::after {
  animation: none;
  display: none;
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }


}

</style>
