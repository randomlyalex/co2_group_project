<template>
  <div>
    <h2>Water</h2>
      <br>
            <p>How much water used in your household??</p>
                <form v-on:change="handleChange">
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
    emissionFactor: 0.2532,
  }
},
props: [],
methods:{
handleChange: function(){
  this.$emit('waterTotal', this.waterCo2Total)
}
  },
  computed:{
    waterCo2Total: function() {
      return this.waterAmount * this.emissionFactor
    }
    },


}
</script>

<style>

</style>
