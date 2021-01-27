<template>
  <div class="headind_srch">
    <p to="/Home">
      <img src="../../assets/back.png" alt="" />
    </p>
    <div class="recent_heading">
      <center>
        <img src="../../assets/Rectangle 8.png" alt="" />
        <!-- <p class="user-name">{{ this.form.user_name }}</p> -->
        <br />
        <input type="text" v-model="profile.user_name" class="biodata" /><br />
        <input type="text" v-model="profile.user_email" class="biodata" /><br />
      </center>
      <p class="user-account">Account</p>
      <!-- <p class="user-phone">{{ this.form.user_phone }}</p> -->
      <div>
        <input type="text" v-model="profile.user_phone" class="biodata" /><br />
      </div>
      <p class="change">Tap to change phone number</p>
    </div>
    <div>
      <!-- <p class="user_email-1">{{ this.form.user_email }}</p> -->
      <p class="user-phone">{{ form.user_name }}</p>
    </div>
    <div>
      <p class="user-phone">Bio</p>
      <input type="text" v-model="profile.user_bio" class="biodata" /><br />
      <br />
      <p class="change">see my location</p>
      <img src="../../assets/maps.png" class="img-maps" alt="" />
      <input type="text" v-model="profile.user_lat" class="biodata" />
      <input type="text" v-model="profile.user_lng" class="biodata" /><br />
    </div>
    <br />
    <div>
      <p>
        <img src="../../assets/lonceng.jpg" alt="" />Notification and Sounds
      </p>
      <p><img src="../../assets/privacy.jpg" alt="" />Privaty and Security</p>
      <p><img src="../../assets/dataStorage.jpg" alt="" />Data and Stronge</p>
      <p><img src="../../assets/chat.jpg" alt="" />Chat settings</p>
      <p><img src="../../assets/device.jpg" alt="" />Device</p>
    </div>
    <button class="button-1" @click="updateProfile">Update</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Profile',
  components: {},
  data() {
    return {
      form: {
        user_name: '',
        user_phone: '',
        user_email: '',
        user_bio: '',
        user_lat: '',
        user_lng: ''
      }
    }
  },
  created() {
    // var data = localStorage.getItem('vuex')
    // var get_id = JSON.parse(data).Auth.user.user_id
    // this.form = this.getUserProfile(get_id)
    this.getUserProfile(this.user.user_id)
      .then(response => {
        console.log(response)
        this.form = {
          user_name: response.user_name,
          user_phone: response.user_phone,
          user_email: response.user_email,
          user_bio: response.user_bio,
          user_lat: response.user_lat,
          user_lng: response.user_lng
        }
      })
      .catch(error => {
        console.log(error)
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
    ...mapMutations(['patchUser']),
    updateProfile() {
      console.log('connected to this function')
      console.log(this.form)
      this.form.user_name = this.profile.user_name
      this.form.user_phone = this.profile.user_phone
      this.form.user_email = this.profile.user_email
      this.form.user_bio = this.profile.user_bio
      this.form.user_lat = this.profile.user_lat
      this.form.user_lng = this.profile.user_lng
      this.patchUser(this.form)
      this.patchUserProfile(this.user.user_id)
      this.getUserProfile(this.user.user_id)
    }
  },
  computed: {
    ...mapGetters({
      user: 'setUser',
      profile: 'setProfile'
    })
  }
}
</script>
<style>
.img-maps {
  width: 10%;
  height: 10%;
}
.button-1 {
  border: none;
  background: #62959c;
  color: white;
  height: auto;
  width: 100%;
  padding: 10px;
}
.button-1:focus {
  outline: none;
  border: none;
  background: #03506f;
  border-radius: 10px;
}
.button-1:hover {
  transition-delay: 0.5s;
  border: none;
  background: #03506f;
  transition: 0.3s;
}
.biodata {
  border: none;
  text-align: center;
}
.biodata:focus {
  outline: none;
  border-bottom: 2px solid black;
  padding: 2px;
}
.headind_srch {
  padding-top: 5%;
}
.txt-user {
  width: 96px;
  height: 28px;
  left: 127px;
  top: 43px;

  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;

  color: #7e98df;
}
.change {
  width: 214px;
  height: 19px;
  left: 30px;
  top: 381.5px;

  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  letter-spacing: -0.17px;

  color: #7e98df;
}
.user-name,
.user-account,
.username {
  padding-top: 2%;
  width: 166px;
  height: 26px;
  left: 92px;
  top: 228px;

  font-family: Rubik;
  font-style: normal;
  font-weight: 550;
  font-size: 20px;
  line-height: 26px;
  /* identical to box height */

  letter-spacing: -0.165px;

  color: #232323;
}
.user-account,
.user-phone,
.change,
.user_email-1 {
  padding-left: 5%;
}
.user-email,
.user-phone,
.biodata {
  height: 19px;
  left: 140px;
  top: 261px;

  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  letter-spacing: 1.335px;

  color: #848484;
}
</style>
