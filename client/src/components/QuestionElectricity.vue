<template>
  <div>
    <h2>Electricity</h2>
    <br>
            <p>How much electricity is used in your household?</p>
            <form>
                <label for="eating-amount">Enter amount:</label>
                <input type="number" id="electricity-amount1" name="quantity"><br>
                <input type="submit" value="Submit">
            </form> 
            <br>
        <p>Or select one of the following options:</p>
            <form>
            <input type="radio" id="electricity-amount2" name="small" value="small">
            <label for="small">Small house / flat (3,000 kWh)</label><br>
            <input type="radio" id="lelectricity-amount3" name="medium" value="medium">
            <label for="medium">Medium (4,800 kWh)</label><br>
            <input type="radio" id="electricity-amount4" name="large" value="large">
            <label for="large">Large house (7,000 kWh)</label><br>
            <input type="radio" id="electricity-amount5" name="large" value="large">
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