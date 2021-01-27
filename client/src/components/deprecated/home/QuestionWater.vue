<template>
  <div>
    <h2>Water</h2>
      <br>
            <p>How much water used in your household??</p>
                <form v-on:input="handleChange">
                    <label for="water-amount">Enter amount:</label>
                    <input type="number" id="water-amount" name="water" v-model="waterAmount"><br>
                </form> 
  </div>
</template>

<script>


export default {
name: "question-water",
data() {
  return {
    waterAmount: 0,
    emissionFactor: 1,
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
      return parseInt(this.waterAmount) * this.emissionFactor
    }
    },


}
</script>

<style>

</style>
