<template>
    <div id="app">
        <diet-component></diet-component>
    </div>

</template>

<script>
import Diet from "./components/Diet.vue"


export default {
    name: "App",
    components: {
        'diet-component': Diet
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
