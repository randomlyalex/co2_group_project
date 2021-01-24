<template>
    <div id="app">
        <transport-component></transport-component>
    </div>
</template>

<script>
import TransportComponent from './components/TransportComponent.vue';

export default {
    name: "App",
    components: {
        "transport-component": TransportComponent
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
