<template>
    <div id="app">
        <!-- <transport-component></transport-component> -->
        <stuff-section
            v-on:stuff_questions="stuff_questions = $event"
        ></stuff-section>
    </div>
</template>

<script>
// import TransportComponent from './components/TransportComponent.vue';
import StuffSection from "./components/StuffSection.vue";

export default {
    name: "App",
    data() {
        return {
            stuff_questions: [],
        };
    },
    components: {
        "stuff-section": StuffSection,
        // "transport-component": TransportComponent
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
