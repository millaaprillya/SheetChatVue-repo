<template>
  <div>
    <Navbar />

    <b-container fluid class="bg-user">
      <b-col class="txt-user-profile"> <p>USER PROFILE</p></b-col>
      <b-container class="card">
        <b-row>
          <b-col>
            <div class="colum-user-1 ">
              <div class="image-view-user">
                <center>
                  <img
                    src="../../assets/nav/image 39.png"
                    class="rounded-circle"
                  />
                </center>
              </div>
              <div class="button-set-profile">
                <button type="file" class="set-photo ">Choose photo</button
                ><br />
                <button class="remote-photo ">Remove photo</button><br />
                <button class="set-password ">Set Password</button>
                <p class="title-doyouwanna ">
                  Do you want to save the change?
                </p>
                <button class="save-user ">Save Changes</button><br />
                <button class="cancel-user ">Cancel</button>

                <button class="logout ">LOGOUT</button>
              </div>
            </div></b-col
          >
          <b-col>
            <b-container class="card-contact">
              <p class="contact">CONTACT</p>
              <p></p>
              <form>
                <label for="fname" class="contact-1">Email adress:</label><br />
                <input type="text" v-model="form.user_email" /><br />
                <label for="lname" class="contact-1">Delivery adress:</label
                ><br />
                <input type="text" v-model="form.user_address" /><br /><br />

                <p class="contact">Details</p>
                <label for="lname" class="contact-1">First Name:</label><br />
                <input type="text" v-model="form.user_name" /><br /><br />
                <label for="lname" class="contact-1">Last Name:</label><br />
                <input
                  type="text"
                  v-model="form.user_lastname"
                /><br /><br /></form
            ></b-container>
          </b-col>
        </b-row>
      </b-container>
      <br />
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Footer from '../../components/_base/Footer'
import Navbar from '../../components/_base/Navbar'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'login',
  components: {
    Footer,
    Navbar
  },
  data() {
    return {
      register: [],
      form: {
        user_name: '',
        user_lastname: '',
        user_birth: '',
        user_gender: '',
        user_phone: '',
        user_address: '',
        user_img: '',
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
    postRegister() {
      console.log(this.form)
      const {
        // user_name,
        // user_lastname,
        // user_birth,
        // user_gender,
        user_phone,
        // user_address,
        // user_img,
        user_email,
        user_password
      } = this.form
      const data = new FormData()
      // data.append('user_name', user_name)
      // data.append('user_lastname', user_lastname)
      // data.append('user_birth', user_birth)
      // data.append('user_gender', user_gender)
      data.append('user_phone', user_phone)
      // data.append('user_address', user_address)
      // data.append('user_img', user_img)
      data.append('user_email', user_email)
      data.append('user_password', user_password)
      data.append('data', JSON.stringify(data))
      // untuk pengecekan saja
      // for (var pair of data.entries()) {
      //   console.log(pair[0] + ', ' + pair[1])
      // }
      console.log(data)
      // axios
      //   .post('http://localhost:3000/user/register', data)
      //   .then(response => {
      //     console.log(`submit success ${response} `)
      //     // console.log(response)
      //     // this.alert = truec
      //     // this.isMsg = response.data.msg
      //   })
      //   .catch(error => {
      //     console.log(`submit fail ${error}`)
      //   })
    },

    loginUser() {
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>

<style scoped>
.txt-user-profile {
  color: white;
}
.bg-user {
  background: url('../../assets/bg/bg-user-edit.png');
}
.card {
  background: white;
  border-radius: 20px;
}
.card-contact {
  margin-top: 5%;
  background: #f8f8f8;
}
.button-set-profile {
  margin-left: 8%;
}

.set-photo,
.remote-photo,
.set-password,
.save-user,
.cancel-user,
.logout {
  border-radius: 10px;
  width: 100%;
  height: 50px;
  text-align: center;
}

.set-photo,
.cancel-user {
  background: #ffba33;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 22px;
  /* identical to box height */

  text-align: center;

  color: #6a4029;
}
.remote-photo,
.save-user {
  background: #6a4029;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 22px;
}

.set-password,
.logout {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  color: #6a4029;
}
.colum-user-1 {
  margin-top: 5%;
}

.set-photo,
.remote-photo,
.set-password,
.save-user,
.cancel-user,
.logout {
  margin-top: 5%;
}
.contact {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 37px;
  /* identical to box height */

  color: #4f5665;
}
</style>
