<template>
  <div class="register">
    <b-alert
      show
      variant="danger"
      v-if="isError"
      dismissible
      @dismissed="closeAlert"
      >{{ error }}</b-alert
    >
    <b-row align-v="center" align-h="center">
      <b-col>
        <b-card border-variant="white">
          <b-card-header
            header-bg-variant="white"
            header-border-variant="white"
          >
            <b-card-text>
              <h1>Register</h1>
            </b-card-text>
            <b-card-text>
              <p class="text-left">Let's create your account!</p>
            </b-card-text>
          </b-card-header>
          <b-card-body>
            <b-form @submit.prevent="onSubmit">
              <b-form-group id="input-group-1">
                <label for="input-1">Name</label>
                <b-form-input
                  id="input-1"
                  type="text"
                  size="sm"
                  required
                  v-model="form.user_name"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2">
                <label for="input-2">Email</label>
                <b-form-input
                  id="input-2"
                  type="email"
                  size="sm"
                  required
                  v-model="form.user_email"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-3">
                <label for="input-3">Password</label>
                <b-form-input
                  id="input-3"
                  type="password"
                  size="sm"
                  required
                  v-model="form.user_password"
                ></b-form-input>
              </b-form-group>

              <b-card-text>
                <p class="text-right">Forgot Password?</p>
              </b-card-text>

              <b-button type="submit" block>Submit</b-button>
            </b-form>
          </b-card-body>
          <b-card-footer
            footer-bg-variant="white"
            footer-border-variant="white"
          >
            <b-card-text>
              <p class="text-center">
                Already have an account?
                <router-link to="/login">Sign In</router-link>
              </p>
            </b-card-text>
          </b-card-footer>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
.register {
  overflow: hidden;
}
.row {
  height: 100vh;
  background: #f6f6f6;
}
.col {
  max-width: 30rem;
}
.card {
  border-radius: 30px;
  box-shadow: 0px 20px 20px rgba(126, 152, 223, 0.05);
}
.card-header h1 {
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  color: #7e98df;
}
.card-header .text-left {
  font-size: 14px;
  color: #232323;
  margin: 0;
}
.card-body .text-right {
  font-size: 16px;
  color: #7e98df;
}
.form-control {
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: #232323;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: transparent;
}
.form-group label {
  font-size: 14px;
  color: #848484;
  opacity: 0.75;
}
.btn-secondary {
  background-color: #7e98df;
  border-radius: 30px;
  border: transparent;
  font-weight: 500;
  font-size: 16px;
  padding: 0.8em;
}
.card-footer .text-center {
  font-size: 14px;
  color: #313131;
}
@media screen and (max-width: 768px) {
  .card-header h1 {
    font-size: 20px;
  }
  .card-header .text-left {
    font-size: 12px;
  }
  .card-body .text-right {
    font-size: 14px;
  }
  .form-group label {
    font-size: 12px;
  }
  .btn-secondary {
    font-size: 14px;
    padding: 0.6em;
  }
  .card-footer .text-center {
    font-size: 12px;
  }
}
@media screen and (max-width: 425px) {
  .col {
    max-width: 20rem;
  }
  .card-header h1 {
    font-size: 18px;
  }
  .card-header .text-left {
    font-size: 10px;
  }
  .card-body .text-right {
    font-size: 12px;
  }
  .form-group label {
    font-size: 10px;
  }
  .btn-secondary {
    font-size: 12px;
    padding: 0.4em;
  }
  .card-footer .text-center {
    font-size: 10px;
  }
}
</style>

<script>
import { mapActions } from 'vuex'
import alert from '../../mixins/alert'
export default {
  name: 'Register',
  mixins: [alert],
  data: () => ({
    form: {
      user_name: '',
      user_email: '',
      user_password: ''
    },
    isError: false,
    error: ''
  }),
  methods: {
    ...mapActions(['register']),
    onSubmit() {
      this.register(this.form)
        .then(result => {
          this.makeToast(
            'Congratulations',
            `${result} Login successfully`,
            'success'
          )
          this.$router.push('/login')
        })
        .catch(error => {
          this.isError = true
          this.error = error
          this.makeToast('Failed', `${error}`, 'danger')
        })
    },
    closeAlert() {
      this.isError = false
    }
  }
}
</script>
