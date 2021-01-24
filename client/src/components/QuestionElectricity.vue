<template>
  <div>
    <h2>Electricity</h2>
    <br>
            <p>How much electricity is used in your household?</p>
            <form>
                <label for="eating-amount1">Enter amount:</label>
                <input type="number" id="electricity-amount1" name="quantity" v-model="electricityAmount1"><br>
                <input type="submit" value="Submit">
            </form> 
            <br>
        <p>Or select one of the following options:</p>
            <form>
            <input type="radio" id="electricity-amount2" name="small" value="3000" v-model="electricityAmount2">
            <label for="small">Small house / flat (3,000 kWh)</label><br>
            <input type="radio" id="lelectricity-amount3" name="medium" value="4800" v-model="electricityAmount3">
            <label for="medium">Medium (4,800 kWh)</label><br>
            <input type="radio" id="electricity-amount4" name="large" value="7000" v-model="electricityAmount4">
            <label for="large">Large house (7,000 kWh)</label><br>
            <input type="radio" id="electricity-amount5" name="large" value="2000" v-model="electricityAmount5">
            <label for="hall">Hall of residence (2,000 kWh)</label><br>
            </form> 
            <br>

  </div>
</template>

<script>
export default {
name: "question-electricity",

data(){
    return{

    }
},

}
</script>

<style>

</style>