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
  name: "TransportSection",
  components: {
    "question-component": QuestionComponent
  },
  methods: {
    saveSection: function() {
      this.$emit("transport_questions", this.questions)
    }
  },
  data() {
    return {
      questions: [
        {
          id: 1,
          type: "range",
          questionHeading: "In a week, roughly how far do you travel by car?",
          questionSubHeading: "carqsub",
          answers: [
            {text: "I don't drive", co2amount: 0},
            {text: "under 100", co2amount: 229000},
            {text: "100+", co2amount: 668000},
            {text: "200+", co2amount: 1150000},
            {text: "300+", co2amount: 1600000},
            {text: "400+", co2amount: 2050000},
            {text: "500+", co2amount: 2750000},
          ]
        },
        {
          id: 2,
          type: "range",
          questionHeading: "Roughly how many miles do you travel on a motorbike per week?",
          questionSubHeading: "sub heading",
          answers: [
            {text: "I don't own a motorbike", co2amount: 0},
            {text: "Under 100", co2amount: 208000},
            {text: "100+", co2amount: 600000},
            {text: "200+", co2amount: 1000000},
            {text: "300+", co2amount: 1400000},
            {text: "400+", co2amount: 1800000},
            {text: "500+", co2amount: 2400000},
          ]
        },
        {
          id: 3,
          type: "radio",
          questionHeading: "How long do you spend on the bus in an average week?",
          questionSubHeading: "sub heading",
          answers: [
            {text: "I don't take the bus", co2amount: 0},
            {text: "Half an hour", co2amount: 35000},
            {text: "Up to 2 hours", co2amount: 100000},
            {text: "Between 2 and 5 hours", co2amount: 300000},
            {text: "5-10 hours", co2amount: 600000},
            {text: "more than 10 hours", co2amount: 1000000},
          ]
        },
        {
          id: 4,
          type: "radio",
          questionHeading: "How many miles do you travel by train in a month?",
          questionSubHeading: "sub heading",
          answers: [
            {text: "I don't take the train", co2amount: 0},
            {text: "Less than 100", co2amount: 15000},
            {text: "100+", co2amount: 46000},
            {text: "250+", co2amount: 115000},
            {text: "500+", co2amount: 229000},
            {text: "1000+", co2amount: 365000},
          ]
        },
        {
          id: 5,
          type: "radio",
          questionHeading: "How far do you fly in an average year?",
          questionSubHeading: "sub heading",
          answers: [
            {text: "I don't fly anywhere", co2amount: 0},
            {text: "Up to 200 miles", co2amount: 11000},
            {text: "200-500 miles", co2amount: 100000},
            {text: "500-1000 miles", co2amount: 300000},
            {text: "1000+ miles", co2amount: 600000},
            {text: "2000+ miles", co2amount: 1000000},
          ]
        },
        {
          id: 6,
          type: "radio",
          questionHeading: "Do you travel by ferry at all during the year? If so, how far?",
          questionSubHeading: "sub heading",
          answers: [
            {text: "I haven't recently taken a ferry", co2amount: 0},
            {text: "Up to 50 miles", co2amount: 35000},
            {text: "50+ miles", co2amount: 100000},
            {text: "100+ miles", co2amount: 300000},
            {text: "250+ miles", co2amount: 600000},
            {text: "500+ miles", co2amount: 1000000},
          ]
        },
      ]
    }
  },
  computed: {
      total_transport_co2: function() {
          return this.questions.reduce((total, question) => {
              if (question.co2total > 0) {
                  return total + question.co2total;
              }
          }, 0);
      },
  },
}
</script>

<style>

</style>