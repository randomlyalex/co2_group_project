<template>
	<div id="app">
		<landing-page
			v-if="sectionCounter === 0">
		</landing-page>
		<button
		class="startbutton"
			v-if="sectionCounter === 0"
			v-on:click="sectionCounter = 1"
		>Start</button>
		<div class="breadcrumbs" v-if="sectionCounter !== 0">
			<button class="navbutton" v-on:click="sectionCounter = 1">Diet</button>
			<button class="navbutton" v-on:click="sectionCounter = 2">Transport</button>
			<button class="navbutton" v-on:click="sectionCounter = 3">Stuff</button>
			<button class="navbutton" v-on:click="sectionCounter = 4">Home</button>
			<button class="navbutton" v-on:click="sectionCounter = 5">Results</button>
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
		<br>
		<button
		class="buttonBackToStart"
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

.body {
	background-color: yellowgreen;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}










.breadcrumbs {
	content: '';
	display: -webkit-box;
	display: -moz-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	-moz-flex-direction: row;
	/* flex: 2; */
	flex-direction: row;
	justify-content: space-around;
	align-items: stretch;
	flex-wrap: wrap;
	top: calc(-1 * var(--borderWidth));
	left: calc(-1 * var(--borderWidth));
	height: calc(100% + var(--borderWidth) * 2);
	width: calc(100% + var(--borderWidth) * 2);
	background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
	border-radius: calc(2 * var(--borderWidth));
	z-index: -1;
	animation: animatedgradient 6s ease alternate infinite;
	background-size: 300% 300%;
	} 
	@keyframes animatedgradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}










.navbutton {
	text-align: center;
	text-transform: uppercase;
	cursor: pointer;
	font-size: 20px;
	letter-spacing: 4px;
	position: relative;
	/* background-color: rgb(122, 194, 50); */
	background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
	border: none;
	color: #fff;
	padding: 20px;
	margin: 5px;
	width: 200px;
	text-align: center;
	transition-duration: 0.4s;
	overflow: hidden;
	box-shadow: 0 5px 15px #8bafd2;
	border-radius: 4px;
	width:auto;
	background:transparent;
}
.navbutton:hover {
	background: linear-gradient(120deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
	animation: animatedgradient 6s ease alternate infinite;
	background-size: 300% 300%;
	box-shadow: 0px 2px 10px 5px rgb(255, 255, 255);
	outline:0; 
}
.navbutton:after {
	content: "";
	background:#00ffaa;
	display: block;
	position: absolute;
	padding-top: 300%;
	padding-left: 350%;
	margin-left: -20px !important;
	margin-top: -120%;
	opacity: 0;
	transition: all 0.8s
}
.navbutton:active:after {
	padding: 0;
	margin: 0;
	opacity: 1;
	transition: 0s;
}
.navbutton:focus { 
	background: linear-gradient(120deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
	animation: animatedgradient 6s ease alternate infinite;
	background-size: 300% 300%;
	box-shadow: 0px 2px 10px 5px rgb(255, 255, 255);
	outline:0; 
	}










.buttonBackToStart {
	text-align: center;
	text-transform: uppercase;
	cursor: pointer;
	font-size: 20px;
	letter-spacing: 4px;
	position: relative;
	background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
	border: none;
	color: #fff;
	padding: 20px;
	margin: 5px;
	width: 200px;
	text-align: center;
	transition-duration: 0.4s;
	overflow: hidden;
	box-shadow: 0 5px 15px #8bafd2;
	border-radius: 4px;
	background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
	animation: animatedgradient 6s ease alternate infinite;
	background-size: 300% 300%;
}
@keyframes animatedgradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.buttonBackToStart:hover {
	background: linear-gradient(120deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
	animation: animatedgradient 6s ease alternate infinite;
	background-size: 300% 300%;
	box-shadow: 0px 2px 10px 5px rgb(255, 255, 255);
	outline:0; 
}

.buttonBackToStart:after {
	content: "";
	background:#ffffff;
	display: block;
	position: absolute;
	padding-top: 300%;
	padding-left: 350%;
	margin-left: -20px !important;
	margin-top: -120%;
	opacity: 0;
	transition: all 0.8s
}

.buttonBackToStart:active:after {
	padding: 0;
	margin: 0;
	opacity: 1;
	transition: 0s
}
.buttonBackToStart:focus { outline:0; }










.startbutton {
	text-align: center;
	text-transform: uppercase;
	cursor: pointer;
	font-size: 20px;
	letter-spacing: 4px;
	position: relative;
	/* background-color: rgb(122, 194, 50); */
	background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
	border: none;
	color: #fff;
	padding: 20px;
	margin: 5px;
	width: 200px;
	text-align: center;
	transition-duration: 0.4s;
	overflow: hidden;
	box-shadow: 0 5px 15px #8bafd2;
	border-radius: 4px;
	background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
	animation: animatedgradient 6s ease alternate infinite;
	background-size: 300% 300%;
	}
	@keyframes animatedgradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
.startbutton:hover {
	background: linear-gradient(120deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
	animation: animatedgradient 6s ease alternate infinite;
	background-size: 300% 300%;
	box-shadow: 0px 2px 10px 5px rgb(255, 255, 255);
	outline:0; 
}
.startbutton:after {
	content: "";
	background:#ffffff;
	display: block;
	position: absolute;
	padding-top: 300%;
	padding-left: 350%;
	margin-left: -20px !important;
	margin-top: -120%;
	opacity: 0;
	transition: all 0.8s
}
.startbutton:active:after {
	padding: 0;
	margin: 0;
	opacity: 1;
	transition: 0s
}
.startbutton:focus { outline:0; }


</style>
