<template>
    <div id="app">
<<<<<<< HEAD
        <diet-component></diet-component>
=======
        <stuff-section
            v-on:stuff_questions="stuff_questions = $event"
        ></stuff-section>
>>>>>>> dd478efc6e3ade7ac02e734b7041fc4496a8abc6
    </div>
</template>

<script>
<<<<<<< HEAD
import DietComponent from './components/DietComponent.vue';

export default {
    name: "App",
    components: {DietComponent},
=======
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
    },
>>>>>>> dd478efc6e3ade7ac02e734b7041fc4496a8abc6
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
