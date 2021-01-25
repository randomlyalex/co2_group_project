<template>
  <div>
    <h2>Heating</h2>
      <br>    
      
            <p>How much gas is used in your household?</p>
                <form>
                    <label for="heating-amount1">Enter amount:</label>
                    <input 
                    v-model="heatingAmount" 
                    type="number" id="heating-amount1" name="custom-heating" value="">
                    <br>
                    <!-- <input @click="heatingAmount1" type="submit" value="Submit"> -->
                </form> 
                <br>
            <p>Or select one of the following options:</p>
                <form>
                <input type="radio" id="heating-amount2" name="heating-radio" value="12000" v-model="heatingAmount">
                <label for="heating-amount2">Small house / flat (12,000 kWh)</label><br>
                <input type="radio" id="heating-amount3" name="heating-radio" value="18000" v-model="heatingAmount">
                <label for="heating-amount3">Medium (18,000 kWh)</label><br>
                <input type="radio" id="heating-amount4" name="heating-radio" value="27000" v-model="heatingAmount">
                <label for="heating-amount4">Large house (27,000 kWh)</label><br>
                <input type="radio" id="heating-amount5" name="heating-radio" value="5000" v-model="heatingAmount">
                <label for="heating-amount5">Hall of residence (5,000 kWh)</label><br>
                </form> 
                <br>
            <p>Is heating oil, coal, wood or bottled gas used in your household?</p>
                <input type="radio" id="other-amount1" name="yes-no" value="true" v-model="otherHeatingAmount">
                <label for="yes">Yes</label><br>
                <input type="radio" id="other-amount2" name="yes-no" value="false" v-model="otherHeatingAmount">
                <label for="no">No</label><br>

                <div v-if="otherHeatingAmount">
            <!-- <p>Please select one of the following options:</p>
            
                <input type="radio" id="heating-amount2" name="heating-radio" value="12000" v-model="heatingAmount">
                <label for="heating-amount2">Small house / flat (12,000 kWh)</label><br>
                <input type="radio" id="heating-amount3" name="heating-radio" value="18000" v-model="heatingAmount">
                <label for="heating-amount3">Medium (18,000 kWh)</label><br>
                <input type="radio" id="heating-amount4" name="heating-radio" value="27000" v-model="heatingAmount">
                <label for="heating-amount4">Large house (27,000 kWh)</label><br>
                <input type="radio" id="heating-amount5" name="heating-radio" value="5000" v-model="heatingAmount">
                <label for="heating-amount5">Hall of residence (5,000 kWh)</label><br>
              
                <br> --> 
                </div>
     

                <!-- <button v-on:click="calculateTotalHeating">Submit</button> -->
                </form> 
  </div>
</template>

<script>

export default {
name: "question-heating",
data() {
  return {
    heatingAmount: null,
    emissionFactor: 0.2532,
  }
},
props: [],
methods:{

  },
  computed:{
    heatingCo2Total: function() {
      return this.heatingAmount * this.emissionFactor
    }
    },
  };

</script>

<style>

</style>