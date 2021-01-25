<template>
  <div>
    <h2>Waste</h2>
      <br>
            <p>How much waste is produced in your household in a week?</p>
                <form>
                    <label for="waste-amount">Enter amount:</label>
                    <input type="number" id="waste-amount1" name="quantity" v-model="wasteAmount"><br>
                </form> 
  </div>
</template>

<script>


export default {
name: "question-waste",
data() {
  return {
    wasteAmount: null,
    totalWaste: 0,
    emissionFactor: 0.2532,
  }
},
props: [],
methods:{
calculateEmissionWaste(value){
return value * this.emissionFactor
},

calculateTotalWaste(){
  const emission = this.calculateEmissionWaste(this.wasteAmount); 
  this.totalWaste = emission

    },
  },
  computed:{
    callCalculateTotalWaste: function (){
    return this.calculateTotalWaste()
      }
    },


}
</script>

<style>

</style>
