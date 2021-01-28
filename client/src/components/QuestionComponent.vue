<template>
	<div class="question-container">
		<form
			v-if="data.type === 'checkbox'"
			v-bind:id="data.id"
			v-on:change="updateResult"
		>
			<h1>{{ data.questionHeading }}</h1>
			<h2>{{ data.questionSubHeading }}</h2>
			<div v-for="(answer, index) in data.answers" :key="index">
				<!-- v-model below is the only thing i cant make work for both-->
				<input
					v-bind:type="data.type"
					v-bind:id="'question-answer-' + index"
					v-model="form_check[index]"
					v-bind:name="data.id"
				/>
				<label v-bind:id="'question-answer-' + index">
					{{ answer.text }}
				</label>
			</div>
		</form>

		<form
			v-if="data.type === 'radio'"
			v-bind:id="data.id"
			v-on:change="updateResult"
		>
			<h1>{{ data.questionHeading }}</h1>
			<h2>{{ data.questionSubHeading }}</h2>
			<div v-for="(answer, index) in data.answers" :key="index">
				<input
					v-bind:type="data.type"
					v-bind:id="'question-answer-' + index"
					v-model="form_radio"
					v-bind:value="index"
					v-bind:name="data.id"
				/>
				<label v-bind:id="'question-answer-' + index">
					{{ answer.text }}
				</label>
			</div>
		</form>

		<form
			v-if="data.type === 'range'"
			v-bind:id="data.id"
			v-on:change="updateResult"
		>
			<h1>{{ data.questionHeading }}</h1>
			<h2>{{ data.questionSubHeading }}</h2>

			<input
			class="range"
				v-bind:type="data.type"
				id="question-answer"
				v-model="form_range"
				v-bind:name="data.id"
				v-bind:value="data.range"
			/>
			<div v-for="(answer, index) in data.answers" :key="index">
				<p v-if="form_range_computed == index">
					{{ answer.text }}
				</p>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: 'QuestionComponent',
	data() {
		return {
			form_check: [],
			form_radio: null,
			form_range: null,
		};
	},
	mounted: function() {
		if (this.data.type === 'checkbox') {
			this.form_check = this.data.answers.map((answer) => answer.isChecked);
		} else if (this.data.type === 'radio') {
			this.form_radio = this.data.answers
				.map(function(answer) {
					return answer.isChecked;
				})
				.indexOf(true);
		} else if (this.data.type === 'range') {
			const index = this.data.answers
				.map(function(answer) {
					return answer.isChecked;
				})
				.indexOf(true);
			this.form_range = (100 / this.data.answers.length) * index;
		}
	},
	computed: {
		form_range_computed: function() {
			if (this.form_range != null) {
				return (
					(this.form_range / 100) *
					(this.data.answers.length - 1)
				).toFixed(0);
			} else return null;
		},
		question_results: function() {
			if (this.form_radio != null) {
				const answers = this.data.answers;
				answers.forEach((answer) => {
					answer.isChecked = false;
				});
				answers[this.form_radio].isChecked = true;
				return {
					answers: answers,
					total_question_co2: this.data.answers[this.form_radio].co2amount,
				};
			} else if (this.form_range != null) {
				const answers = this.data.answers;
				answers.forEach((answer, index) => {
					if (index == this.form_range_computed) {
						answer.isChecked = true;
						answers.range = this.form_range;
					} else {
						answer.isChecked = false;
					}
				});
				return {
					answers: answers,
					total_question_co2: this.data.answers[this.form_range_computed]
						.co2amount,
				};
			} else if (this.form_check.length > 0) {
				let answered = this.data.answers.map((answer, index) => {
					answer.isChecked = this.form_check[index];
					return answer;
				});
				const total_question_co2 = answered.reduce((total_co2, answer) => {
					if (answer.isChecked === true) {
						return total_co2 + answer.co2amount;
					} else return total_co2;
				}, 0);
				const results = {
					answers: answered,
					total_question_co2: total_question_co2,
				};
				return results;
			} else return null;
		},
	},
	methods: {
		updateResult: function() {
			this.$emit(
				'question_co2_total',
				this.question_results.total_question_co2
			);
			this.$emit('question_answers', this.question_results.answers);
		},
	},
	props: { data: Object },
};
</script>

<style lang="css" scoped>
.question-container  {
  --borderWidth: 3px;
  color: white;
  position: relative;
  border-radius: var(--borderWidth);
}
.question-container :after {
  content: '';
  position: absolute;
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


.question-container {
	
	padding: 1em;
	margin: 1em;
}
input[type='range'] {
	-webkit-appearance: none;
	margin: 10px 0;
	width: 60%;
	background: white;
	border-radius: 25px;
}
input[type='range']:focus {
	outline: none;
}
input[type='range']::-webkit-slider-runnable-track {
	width: 100%;
	height: 12.8px;
	cursor: pointer;
	box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
	background: white;
	border-radius: 25px;
	border: 0px solid #000101;
}
input[type='range']::-webkit-slider-thumb {
	box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
	border: 0px solid #000000;
	height: 20px;
	width: 39px;
	border-radius: 60px;
	background: linear-gradient(60deg, #f79533, #f37055);
	cursor: pointer;
	-webkit-appearance: none;
	margin-top: -3.6px;
}
input[type='range']:focus::-webkit-slider-runnable-track {
	background: white;
	border-radius: 25px;
}
input[type='range']::-moz-range-track {
	width: 100%;
	height: 12.8px;
	cursor: pointer;
	/* animate: 0.2s; */
	box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
	background: white;
	border-radius: 25px;
	border: 0px solid #000101;
}
input[type='range']::-moz-range-thumb {
	box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
	border: 0px solid #000000;
	height: 20px;
	width: 39px;
	border-radius: 7px;
	background: #3aa7a3;
	cursor: pointer;
}
input[type='range']::-ms-track {
	width: 100%;
	height: 12.8px;
	cursor: pointer;
	/* animate: 0.2s; */
	background: transparent;
	border-color: transparent;
	border-width: 39px 0;
	color: transparent;
}
input[type='range']::-ms-fill-lower {
	background: white;
	border: 0px solid #000101;
	border-radius: 50px;
	box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
}
input[type='range']::-ms-fill-upper {
	background: white;
	border: 0px solid #000101;
	border-radius: 50px;
	box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
}
input[type='range']::-ms-thumb {
	box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
	border: 0px solid #000000;
	height: 20px;
	width: 39px;
	border-radius: 7px;
	background: #3aa7a3;
	cursor: pointer;
}
input[type='range']:focus::-ms-fill-lower {
	background: white;
}
input[type='range']:focus::-ms-fill-upper {
	background: white;
}</style>
