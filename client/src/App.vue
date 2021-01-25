<template>
    <div id="app">
        <!-- <stuff-section
            v-on:stuff_questions="stuff_questions = $event"
        ></stuff-section> -->
        <home-section></home-section>
    </div>
</template>

<script>
// import StuffSection from "./components/StuffSection.vue";
import HomeSection from './components/HomeSection.vue';
export default {
    name: "App",
    data() {
        return {
            stuff_questions: [],
        };
    },
    components: {
        // "stuff-section": StuffSection,
         "home-section": HomeSection,
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
