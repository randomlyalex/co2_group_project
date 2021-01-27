<template>
  <div>
    <h2>Heating</h2>
      <br>    
      
            <p>How much gas is used in your household?</p>
                <form v-on:input="handleChange">
                        <label for="heating-amount1">Enter amount:</label>
                        <input 
                        v-model="heatingAmount" 
                        type="number" id="heating-amount1" name="custom-heating">
                        <br>


                    <p>Or select one of the following options:</p>
                        
                        <input type="radio" id="heating-amount2" name="heating-radio" value=12000 v-model="heatingAmount">
                        <label for="heating-amount2">Small house / flat (12,000 kWh)</label><br>
                        <input type="radio" id="heating-amount3" name="heating-radio" value=18000 v-model="heatingAmount">
                        <label for="heating-amount3">Medium (18,000 kWh)</label><br>
                        <input type="radio" id="heating-amount4" name="heating-radio" value=27000 v-model="heatingAmount">
                        <label for="heating-amount4">Large house (27,000 kWh)</label><br>
                        <input type="radio" id="heating-amount5" name="heating-radio" value=5000 v-model="heatingAmount">
                        <label for="heating-amount5">Hall of residence (5,000 kWh)</label><br>
                      
<!--                         
                        <br>
                    <p>Is heating oil, coal, wood or bottled gas used in your household?</p>
                        <input type="radio" id="other-amount1" name="yes-no" value="true" v-model="otherHeatingAmount">
                        <label for="yes">Yes</label><br>
                        <input type="radio" id="other-amount2" name="yes-no" value="false" v-model="otherHeatingAmount">
                        <label for="no">No</label><br>

                        <div v-if="otherHeatingAmount">
                    <p>Please select one of the following options:</p>
                            <input type="radio" id="other-amount1" name="otherHeatingAmount" value="heatingOil" v-model="heatingOil">
                            <label for="yes">Heating oil</label><br>
                              <div v-if="heatingOil">
                                <label for="other-heating-amount">Enter amount:</label>
                                <input 
                                v-model="heatingAmount" 
                                type="number" id="heating-amount1" name="otherHeatingAmount">
                              </div>
                            <br> 
                            <input v-on:change="displayQuestion(this.value)" type="radio" id="other-amount1" name="otherHeatingAmount">
                            <label for="yes">Coal</label><br>
                              <div v-if="coalVisible">
                                <label for="other-heating-amount">Enter amount:</label>
                                <input 
                                v-model="coalAmount" 
                                type="number" id="heating-amount1" name="otherHeatingAmount">
                              </div>
                            <br> 
                            <input type="radio" id="other-amount1" name="otherHeatingAmount" value="wood" v-model="wood">
                            <label for="yes">Wood</label><br>
                              <div v-if="wood">
                                <label for="other-heating-amount">Enter amount:</label>
                                <input 
                                v-model="heatingAmount" 
                                type="number" id="heating-amount1" name="otherHeatingAmount">
                              </div>
                            <br> 
                            <input type="radio" id="other-amount1" name="otherHeatingAmount" value="bottledGas" v-model="bottledGas">
                            <label for="yes">Bottled gas</label><br>
                              <div v-if="bottledGas">
                                <label for="other-heating-amount">Enter amount:</label>
                                <input 
                                v-model="heatingAmount" 
                                type="number" id="heating-amount1" name="otherHeatingAmount">
                              </div>
                            <br> 
                        </div> -->
                </form> 
  </div>
</template>

<script>

export default {
name: "question-heating",
data() {
  return {
    heatingAmount: 0,
    emissionFactor: 1,

    // otherHeatingAmount: null,
    // heatingOil: null,
    // coalAmount: null,
    // coalVisible: false,
    // wood: null,
    // bottledGas: null,
  }
},
props: [],
methods:{
handleChange: function(){
  this.$emit('heatingTotal', this.heatingCo2Total)
}
  },
computed:{
  heatingCo2Total: function() {
    return parseInt(this.heatingAmount) * this.emissionFactor
  }
  },
};
    // heatingCo2Total: function() {
    //   return (parseInt(this.heatingAmount) + parseInt(this.coalAmount)) * this.emissionFactor
    // }

</script>

<style>

</style>