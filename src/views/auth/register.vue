<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col class="col-1-picture">Column</b-col>
        <b-col class="col-1-login">
          <b-row>
            <b-col>
              <div class="logo">
                <b-col><img src="../../assets/logo.png" />CoffeShop </b-col>
              </div>
            </b-col>
            <b-col class="register">
              <b-button variant="warning" @click="loginUser()">LOGIN</b-button>
            </b-col>
          </b-row>
          <b-col class="login">
            <center class="login-text">SIGN UP</center>
            <b-form
              @submit.prevent="onSubmit"
              @reset.prevent="onReset"
              class="login-1"
            >
              <label for="fname" class="label-login">Email adress:</label><br />
              <input
                type="email"
                v-model="form.user_email"
                placeholder="Input Your Email ..."
                class="login-input"
              /><br />
              <label for="fname" class="label-login">Password :</label><br />
              <input
                type="password"
                v-model="form.user_password"
                placeholder="Input Your Password ..."
                class="login-input"
              />
              <br />
              <br />
              <p>Forgot Password !</p>
              <div class="button-login">
                <b-col
                  ><button type="buttom" class="login-buttom">
                    REGISTER
                  </button></b-col
                >
                <br />
                <b-col>
                  <button type="buttom" class="sign-login">
                    Login with Google
                  </button></b-col
                >
              </div>
            </b-form>
          </b-col>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Footer from '../../components/_base/Footer'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'login',
  components: {
    Footer
  },
  data() {
    return {
      form: {
        user_email: '',
        user_password: ''
      }
    }
  },
  computed: {
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
    },
    loginUser() {
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>

<style>
.col-1-picture {
  height: 700px;
  width: 500px;
  background: url('../../assets/bg/bg-login.png');
}
.col-1-login {
  margin: 2%;
}
.logo {
  font-family: 'Kalam', cursive;
  font-size: 100%;
  text-align: left;
}
.register {
  text-align: right;
}
.register-text {
  border-radius: 20px;
  background: violet;
}
.login {
  margin-top: 10%;
}
.login-text {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 41px;

  color: #6a4029;
}
.login-1 {
  margin-top: 3%;
  margin-left: 10%;
  margin-right: 10%;
}
.login-input {
  width: 100%;
  height: 10%;
  background: #ffffff;
  border: 1px solid #4f5665;
  box-sizing: border-box;
  border-radius: 20px;
}
.label-login {
  margin-top: 5%;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;

  color: #4f5665;
}
.button-login {
  margin-top: 5%;
}
.login-buttom {
  width: 550px;
  height: 70px;
  background: #ffba33;
  box-shadow: 0px 6px 20px rgba(255, 186, 51, 0.4);
  border-radius: 20px;
}
.sign-login {
  width: 550px;
  height: 70px;
  background: grey;
  box-shadow: 0px 6px 20px rgba(255, 186, 51, 0.4);
  border-radius: 20px;
}
</style>
