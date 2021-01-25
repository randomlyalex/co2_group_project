<template>
  <div>
    <h2>Electricity</h2>
    <br>
            <p>How much electricity is used in your household?</p>
            <form>
                <label for="eating-amount1">Enter amount:</label>
                <input type="number" id="electricity-amount1" name="custom-electricity" v-model="electricityAmount"><br>
            </form> 
            <br>
        <p>Or select one of the following options:</p>
            <form>
            <input type="radio" id="electricity-amount2" name="electricity-radio" value="3000" v-model="electricityAmount">
            <label for="small">Small house / flat (3,000 kWh)</label><br>
            <input type="radio" id="lelectricity-amount3" name="electricity-radio" value="4800" v-model="electricityAmount">
            <label for="medium">Medium (4,800 kWh)</label><br>
            <input type="radio" id="electricity-amount4" name="electricity-radio" value="7000" v-model="electricityAmount">
            <label for="large">Large house (7,000 kWh)</label><br>
            <input type="radio" id="electricity-amount5" name="electricity-radio" value="2000" v-model="electricityAmount">
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
  electricityAmount: null,
  totalElectricity: 0,
  emissionFactor: 0.2532,
  }
},
methods:{
calculateEmissionElectricity(value){
return value * this.emissionFactor
},

calculateTotalElectricity(){
  const emission = this.calculateEmissionElectricity(this.electricityAmount); 
  this.totalElectricity = emission

    },
  },
  computed:{
    callCalculateEmissionElectricity: function (){
    return this.calculateEmissionElectricity()
      }
    },
}
</script>

<style>

</style>