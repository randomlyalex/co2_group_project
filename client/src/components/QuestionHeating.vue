<template>
  <div>
    <h2>Heating</h2>
      <br>    
            <p>How much gas is used in your household?</p>
                <form>
                    <label for="heating-amount1">Enter amount:</label>
                    <input 
                    v-model="heatingAmount1" 
                    type="number" id="heating-amount1" name="quantity" value="">
                    <br>
                    <input @click="heatingAmount1" type="submit" value="Submit">
                </form> 
                <br>
            <p>Or select one of the following options:</p>
                <form>
                <input type="radio" id="heating-amount2" name="small" value="12000" v-model="heatingAmount2">
                <label for="heating-amount2">Small house / flat (12,000 kWh)</label><br>
                <input type="radio" id="heating-amount3" name="medium" value="18000" v-model="heatingAmount3">
                <label for="heating-amount3">Medium (18,000 kWh)</label><br>
                <input type="radio" id="heating-amount4" name="large" value="27000" v-model="heatingAmount4">
                <label for="heating-amount4">Large house (27,000 kWh)</label><br>
                <input type="radio" id="heating-amount5" name="large" value="5000" v-model="heatingAmount5">
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
    heatingAmount1: null,
    heatingAmount2: null,
    heatingAmount3: null,
    heatingAmount4: null,
    heatingAmount5: null,
    totalHeating: 0,
    emissionFactor: 0.2532

  }
},
props: [],
methods:{
calculateEmissionHeating(value){
return value * this.emissionFactor
},

calculateTotalHeating(){
  emission1 = calculateEmissionHeating(heatingAmount1); 
  emission2 = calculateEmissionHeating(heatingAmount2); 
  emission3 = calculateEmissionHeating(heatingAmount3); 
  emission4 = calculateEmissionHeating(heatingAmount4); 
  emission5 = calculateEmissionHeating(heatingAmount5);
  this.totalHeating = emission1 + emission2 + emission3 + emission4 + emission5

    },
  },


};
</script>

<style>

</style>