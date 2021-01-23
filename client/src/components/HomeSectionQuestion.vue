<template>
  <div>

    <h3>Gas</h3>
    {{newData}}
    
        <p>How much gas is used in your household?</p>
            <form>
                <label for="heating-amount">Enter amount:</label>
                <input type="number" id="heating-amount" name="quantity" v-model="heatingAmount"><br>
                <input type="submit" value="Submit">
            </form> 
            <br>
        <p>Or select one of the following options:</p>
            <form>
            <input type="radio" id="home-section" name="small" value="small">
            <label for="small">Small house / flat (12,000 kWh)</label><br>
            <input type="radio" id="home-section" name="medium" value="medium">
            <label for="medium">Medium (18,000 kWh)</label><br>
            <input type="radio" id="home-section" name="large" value="large">
            <label for="large">Large house (27,000 kWh)</label><br>
            <input type="radio" id="home-section" name="large" value="large">
            <label for="hall">Hall of residence (5,000 kWh)</label><br>
            <input type="radio" id="home-section" name="hall" value="hall">
            </form> 
            <br>
        <p>Is heating oil, coal, wood or bottled gas used in your household?</p>
            <input type="radio" id="home-section" name="yes" value="yes">
            <label for="yes">Yes</label><br>
            <input type="radio" id="home-section" name="no" value="no">
            <label for="no">No</label><br>

  </div>
</template>

<script>

export default {
name: "home-section-question",
data() {
  return {
    heatingAmount: null,
  
  }
},
props: ['newData','newData2'],



}
</script>

<style>

</style>