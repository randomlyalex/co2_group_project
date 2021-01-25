<template>
  <div>
    <h2>Water</h2>
      <br>
            <p>How much water used in your household??</p>
                <form>
                    <label for="waste-amount">Enter amount:</label>
                    <input type="number" id="waste-amount1" name="quantity" v-model="waterAmount"><br>
                </form> 
  </div>
</template>

<script>


export default {
name: "question-water",
data() {
  return {
    waterAmount: null,
    totalWater: 0,
    emissionFactor: 0.2532,
  }
},
props: [],
methods:{
calculateEmissionWater(value){
return value * this.emissionFactor
},

calculateTotalWater(){
  const emission = this.calculateEmissionWater(this.waterAmount); 
  this.totalWater = emission

    },
  },
  computed:{
    callCalculateTotalWater: function (){
    return this.calculateTotalWater()
      }
    },


}
</script>

<style>

</style>
