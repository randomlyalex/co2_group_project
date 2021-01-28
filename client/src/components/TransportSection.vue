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
		<button 
		class="sectionButton"
		v-on:click="saveSection">Save Section</button>
	</div>
</template>

<script>
import QuestionComponent from './QuestionComponent.vue';
import TransportQuestions from '../static/transport_questions.json';

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
			questions: TransportQuestions,
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

<style>
.sectionButton {
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
.sectionButton :hover {
	background: #fff;
	box-shadow: 0px 2px 10px 5px rgb(255, 117, 37);
	color: #000;
}

.sectionButton :after {
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

.sectionButton :active:after {
	padding: 0;
	margin: 0;
	opacity: 1;
	transition: 0s
}

.sectionButton :focus { outline:0; }



/* .button {
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
  animation: ring 1.5s infinite;
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


} */

</style>
