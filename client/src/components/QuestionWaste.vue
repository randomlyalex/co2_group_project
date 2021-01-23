<template>
  <div>
    <h2>Waste</h2>
      <br>
            <p>How much waste is produced in your household in a week?</p>
                <form>
                    <label for="waste-amount1">Enter amount:</label>
                    <input type="number" id="waste-amount1" name="quantity" v-model="wasteAmount"><br>
                    <input type="submit" value="Submit">
                </form> 
  </div>
</template>

<script>


export default {
name: "question-waste",
data() {
  return {
    wasteAmount: null,
    totalWaste: null,
  }
},
props: [],



}
</script>

<style>

</style>