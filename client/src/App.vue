<template>
    <div id="app">
        <stuff-section></stuff-section>
    </div>
</template>

<script>
import StuffSection from "./components/StuffSection.vue";

export default {
    name: "App",
    components: {
        "stuff-section": StuffSection,
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
