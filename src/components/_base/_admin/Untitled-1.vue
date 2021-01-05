<template>
  <div>
    <h1>Halaman Login</h1>
    <h2>{{ dataName }}</h2>
    <h2>{{ name }}</h2>
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
      <input
        type="email"
        v-model="form.user_email"
        placeholder="Input Your Email ..."
      /><br />
      <input
        type="password"
        v-model="form.user_password"
        placeholder="Input Your Password ..."
      />
      <br />
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'login',
  data() {
    return {
      form: {
        user_email: '',
        user_password: ''
      }
    }
  },
  computed: {
    // // //  1
    // // // name nya ngambil dari index.js di store yang ada di state
    // // dataName() {
    // //   return this.$store.state.name
    // }
    ...mapState(['name']),
    ...mapState({ dataName: 'name' })
  },
  methods: {
    // mapAction & mapMutation
    ...mapActions(['login']),
    onSubmit() {
      this.login(this.form)
        .then(result => {
          console.log(result)
          this.$router.push('/')
        })
        .catch(error => {
          // console.log(error.response)
          alert(error.data.msg)
        })
    },
    onReset() {
      this.form = {
        user_email: '',
        user_password: ''
      }
    }
  }
}
</script>
