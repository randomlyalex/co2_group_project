<template>
    <div id="app">
        <diet-section
            v-on:stuff_questions="diet_questions = $event"
        ></diet-section>
        <transport-section
            v-on:transport_questions="transport_questions = $event"
        ></transport-section>
        <stuff-section
            v-on:stuff_questions="stuff_questions = $event"
        ></stuff-section>
    </div>
</template>

<script>
import TransportSection from "./components/TransportSection.vue";
import StuffSection from "./components/StuffSection.vue";
import DietSection from "./components/DietSection";

export default {
    name: "App",
    data() {
        return {
            transport_questions: [],
            stuff_questions: [],
            diet_questions: []
        };
    },
    components: {
        "stuff-section": StuffSection,
        "diet-section": DietSection,
        "transport-section": TransportSection,
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
