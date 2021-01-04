<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'app',
  created() {
    this.interceptionRequest()
    this.interceptorResponse()
  },
  methods: {
    ...mapActions(['intercaptionRequest', 'interceptorResponse'])
  }
}
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
}
</style>
