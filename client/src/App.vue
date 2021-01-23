<template>
    <div id="app">
        <home-section></home-section>
    </div>

</template>

<script>
import HomeSection from './components/HomeSection.vue';
export default {
    name: "App",
    components: {
        "home-section": HomeSection,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
