<template>
    <div id="app">
        <diet-component></diet-component>
    </div>
</template>

<script>
import DietComponent from './components/DietComponent.vue';

export default {
    name: "App",
    components: {DietComponent},
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
