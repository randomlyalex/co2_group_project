<template>
  <div>
    <h2>Waste</h2>
      <br>
            <p>How much waste is produced in your household in a week?</p>
                <form v-on:input="handleChange">
                    <label for="waste-amount">Enter amount:</label>
                    <input type="number" id="waste-amount1" name="waste" v-model="wasteAmount"><br>
                </form> 
  </div>
</template>

<script>


export default {
name: "question-waste",
data() {
  return {
    wasteAmount: null,
    emissionFactor: 1,
  }
},
props: [],
methods:{
handleChange: function(){
  this.$emit('wasteTotal', this.wasteCo2Total)
}
  },
  computed:{
    wasteCo2Total: function() {
      return this.wasteAmount * this.emissionFactor
    },
  }
}
</script>

<style>

</style>
