<template>
  <div class="lifecycle">
    <div class="centered">
      <img alt="Vue logo" src="../assets/logo.png" />
      <Navbar />
      <h1>This is Page Lifecycle</h1>
      <h3 id="message">{{data}</h3>
    </div>
  </div>
</template>

<script>
// [1] step pertama import komponen
import Navbar from '../components/_base/Navbar'

export default {
  name: 'Lifecycle',
  // [2] step 2 mendaftarkan komponen yang sudah kita import
  components: {
    Navbar
  },
  data() {
    return {
      dataTesting: 'Vue Data'
    }
  },
  beforeCreate() {
    console.log('Before is running ' + this.dataTesting)
  },
  created() {
    console.log('Create is running')
  },
  beforeMount() {
    console.log('Before Monted is running ' + this.dataTesting)
    console.log(document.getElementById('message'))
  },
  mounted() {
    console.log(' Monted is running ' + this.dataTesting)
  }
}
</script>

<style scoped>
.centered {
  text-align: center;
}
</style>
