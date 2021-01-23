<template>
  <div>
    <h2>Water</h2>
      <br>
            <p>How much water used in your household?</p>
                <form>
                    <label for="water-amount1">Enter amount:</label>
                    <input type="number" id="water-amount1" name="quantity" v-model="waterAmount"><br>
                    <input type="submit" value="Submit">
                </form> 
  </div>
</template>

<script>


export default {
name: "question-water",
data() {
  return {

  }
},
props: [],



}
</script>

<style>

</style>