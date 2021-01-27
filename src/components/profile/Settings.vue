<template>
  <div>
    <b-button v-b-modal.modal-prevent-closing>Settings</b-button>

    <div class="mt-3 ml-3"></div>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title=""
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="username"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="profile.user_name"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="email"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="profile.user_email"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Bio"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="profile.user_bio"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      form: {
        user_name: '',
        user_phone: '',
        user_email: '',
        user_bio: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      user: 'setUser',
      profile: 'setProfile'
    })
  },
  methods: {
    ...mapActions([
      'getUserProfile',
      'logout',
      'patchUserProfile',
      'patchLocation',
      'patchProfilePict',
      'deleteProfilePict'
    ]),
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    resetModal() {
      this.name = ''
      this.nameState = null
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    }
  },
  updateProfile() {
    this.form.user_name = this.profile.user_name
    this.form.user_email = this.profile.user_email
    this.form.user_bio = this.profile.user_bio
    console.log(this.form)
    console.log(this.profile.user_email)
  }
}
</script>

<style>
.v-b-modal.modal-prevent-closing {
  background: white;
}
</style>
