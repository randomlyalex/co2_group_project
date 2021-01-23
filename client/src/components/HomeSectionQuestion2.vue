<template>
  <div>
    <h2>Electricity</h2>
    <br>
    
        <p>How much electricity is used in your household?</p>
            <form>
                <label for="eating-amount">Enter amount:</label>
                <input type="number" id="heating-amount" name="quantity"><br>
                <input type="submit" value="Submit">
            </form> 
            <br>
        <p>Or select one of the following options:</p>
            <form>
            <input type="radio" id="home-section" name="small" value="small">
            <label for="small">Small house / flat (3,000 kWh)</label><br>
            <input type="radio" id="home-section" name="medium" value="medium">
            <label for="medium">Medium (4,800 kWh)</label><br>
            <input type="radio" id="home-section" name="large" value="large">
            <label for="large">Large house (7,000 kWh)</label><br>
            <input type="radio" id="home-section" name="large" value="large">
            <label for="hall">Hall of residence (2,000 kWh)</label><br>
            <input type="radio" id="home-section" name="hall" value="hall">
            </form> 
            <br>

  </div>
</template>

<script>
export default {
name: "home-section-question",
// data(){
//     return{
//         valueOfQuestion: null,
//     }
// },
// methods: {
//     getValueOfQuestion: function() {
//         return 
//     } 
// },
}
</script>

<style>

</style>