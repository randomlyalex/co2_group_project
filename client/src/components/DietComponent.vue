<template lang="html">
<div class="form-item">
    <div class="slider-wrapper">
        <label for="diet">How often do you eat animal products (meat, fish, dairy, eggs)?</label>
        <input type="range" id="diet" name="diet" list="diet-types" v-model="sliderValue">
        <p v-if="sliderValue < 25 && sliderValue > 0 ">The slider is {{ sliderValue }}</p>
        <p v-if="sliderValue < 25 && sliderValue > 0 ">The slider is {{ sliderValue }}</p>
        <p v-if="sliderValue < 25 && sliderValue > 0 ">The slider is {{ sliderValue }}</p>
        <p v-if="sliderValue < 25 && sliderValue > 0 ">The slider is {{ sliderValue }}</p>

    </div>
</div>

</template>

<script>
export default {
    data() {
        return {
            "sliderValue": null
        }
    },

}
</script>

<style lang="css" scoped>
.form-item  {
    border: solid black;
    padding: 1em;
    margin: 1em;
}

input[type=range] {
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
}
input[type=range]:focus {
    outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 12.8px;
    cursor: pointer;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    background: linear-gradient(21deg, chartreuse, black);
    border-radius: 25px;
    border: 0px solid #000101;
}
input[type=range]::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    border: 0px solid #000000;
    height: 20px;
    width: 39px;
    border-radius: 7px;
    background: #3AA7A3;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -3.6px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
    background: linear-gradient(21deg, chartreuse black);
}
input[type=range]::-moz-range-track {
    width: 100%;
    height: 12.8px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    background: linear-gradient(21deg, chartreuse black);
    border-radius: 25px;
    border: 0px solid #000101;
}
input[type=range]::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    border: 0px solid #000000;
    height: 20px;
    width: 39px;
    border-radius: 7px;
    background: #3AA7A3;
    cursor: pointer;
}
input[type=range]::-ms-track {
    width: 100%;
    height: 12.8px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    border-width: 39px 0;
    color: transparent;
}
input[type=range]::-ms-fill-lower {
    background: linear-gradient(21deg, chartreuse black);
    border: 0px solid #000101;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
}
input[type=range]::-ms-fill-upper {
    background: linear-gradient(21deg, chartreuse black);
    border: 0px solid #000101;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
}
input[type=range]::-ms-thumb {
    box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
    border: 0px solid #000000;
    height: 20px;
    width: 39px;
    border-radius: 7px;
    background: #3AA7A3;
    cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
    background: linear-gradient(21deg, chartreuse black);
}
input[type=range]:focus::-ms-fill-upper {
    background: linear-gradient(21deg,  chartreuse black);
}

</style>