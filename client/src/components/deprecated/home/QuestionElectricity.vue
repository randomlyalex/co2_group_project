<template>
  <div>
    <h2>Electricity</h2>
    <br>
            <p>How much electricity is used in your household?</p>
            <form v-on:input="handleChange">
                <label for="eating-amount1">Enter amount:</label>
                <input type="number" id="electricity-amount1" name="custom-electricity" v-model="electricityAmount"><br>
          
            <br>
        <p>Or select one of the following options:</p>
            
            <input type="radio" id="electricity-amount2" name="electricity-radio" value="3000" v-model="electricityAmount">
            <label for="small">Small house / flat (3,000 kWh)</label><br>
            <input type="radio" id="lelectricity-amount3" name="electricity-radio" value="4800" v-model="electricityAmount">
            <label for="medium">Medium (4,800 kWh)</label><br>
            <input type="radio" id="electricity-amount4" name="electricity-radio" value="7000" v-model="electricityAmount">
            <label for="large">Large house (7,000 kWh)</label><br>
            <input type="radio" id="electricity-amount5" name="electricity-radio" value="2000" v-model="electricityAmount">
            <label for="hall">Hall of residence (2,000 kWh)</label><br>
            </form> 
        

  </div>
</template>

<script>
export default {
name: "question-electricity",

data(){
    return{
  electricityAmount: 0,
  emissionFactor: 1,
  }
},
methods:{
handleChange: function(){
  this.$emit('electricityTotal', this.electricityCo2Total)
  }
},
computed:{
  electricityCo2Total: function() {
    return parseInt(this.electricityAmount) * this.emissionFactor
  }
  },
};
</script>

<style>

</style>