<template>
  <div>
    <h2>Heating</h2>
      <br>    
            <p>How much gas is used in your household?</p>
                <form>
                    <label for="heating-amount1">Enter amount:</label>
                    <input 
                    type="number" id="heating-amount1" name="quantity" value="">
                    <br>
                    <input type="submit" value="Submit">
                </form> 
                <br>
            <p>Or select one of the following options:</p>
                <form>
                <input type="radio" id="heating-amount2" name="small" value="12000">
                <label for="heating-amount2">Small house / flat (12,000 kWh)</label><br>
                <input type="radio" id="heating-amount3" name="medium" value="18000">
                <label for="heating-amount3">Medium (18,000 kWh)</label><br>
                <input type="radio" id="heating-amount4" name="large" value="27000">
                <label for="heating-amount4">Large house (27,000 kWh)</label><br>
                <input type="radio" id="heating-amount5" name="large" value="5000">
                <label for="heating-amount5">Hall of residence (5,000 kWh)</label><br>
                </form> 
                <br>
            <p>Is heating oil, coal, wood or bottled gas used in your household?</p>
                <input type="radio" id="other-amount1" name="yes" value="yes">
                <label for="yes">Yes</label><br>
                <input type="radio" id="other-amount2" name="no" value="no">
                <label for="no">No</label><br>

  </div>
</template>

<script>

export default {
name: "question-heating",
data() {
  return {
    heatingAmount: null,

  }
},
props: [],


};
</script>

<style>

</style>