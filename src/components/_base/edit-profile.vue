<template>
  <div class="headind_srch">
    <p to="/Home">
      <img src="../../assets/back.png" alt="" />
    </p>
    <div class="recent_heading">
      <center>
        <div>
          <div>
            <img
              class="rounded-circle "
              :src="`${url}/${profile.profileImage}`"
              width="150"
              height="150"
            />
          </div>
          <label>
            <input @change="handleFile" type="file" />
          </label>
        </div>

        <div>
          <input type="text" v-model="profile.user_name" class="biodata" />
          <br />
          <input type="text" v-model="profile.user_email" class="biodata" />
        </div>
      </center>
      <p class="user-account">Account</p>
      <div>
        <input
          type="number"
          v-model="profile.user_phone"
          class="biodata"
        /><br />
      </div>
      <p class="change">Tap to change phone number</p>
    </div>
    <div>
      <p class="user-phone">{{ profile.user_name }}</p>
    </div>
    <div>
      <p class="user-phone">Bio</p>
      <input type="text" v-model="profile.user_bio" class="biodata" /><br />
      <br />
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
import alert from '../../mixins/alert'
export default {
  name: 'Profile',
  mixins: [alert],
  components: {},
  data() {
    return {
      url: 'http://localhost:3000',
      form: {
        profileImage: '',
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
    this.getUserProfile(this.user.user_id)
      .then(response => {
        const {
          profileImage,
          user_name,
          user_phone,
          user_email,
          user_bio,
          user_lat,
          user_lng
        } = response.data.data[0]
        this.form = {
          profileImage,
          user_name,
          user_phone,
          user_email,
          user_bio,
          user_lat,
          user_lng
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
    handleFile(event) {
      if (event.target.files[0].size > 2000000) {
        this.makeToast('Failed', `File too large`, 'danger')
      } else {
        console.log('file oke')
        this.profile.profileImage = event.target.files[0]
        const img = this.profile.profileImage
        this.url = URL.createObjectURL(img)
        const { profileImage } = this.profile
        const data = new FormData()
        data.append('profileImage', profileImage)
        const pacthuserImg = { id: this.profile.user_id, image: data }
        this.patchProfilePict(pacthuserImg)
          .then(result => {
            this.makeToast(
              `Profile Image Updated`,
              'Success update profile image',
              'success'
            )
            this.getUserProfile(this.user.userId)
            console.log(result)
            console.log('berhasil patching')
          })
          .catch(error => {
            this.makeToast('Failed', `Update Image Fail`, 'danger')
            console.log(error)
            console.log('error patching')
          })
      }
    },
    updateProfile() {
      const data = new FormData()
      data.append('user_name', this.profile.user_name)
      data.append('use_phone', this.profile.user_phone)
      data.append('user_email', this.profile.user_email)
      data.append('user_bio', this.profile.user_bio)
      data.append('user_lat', this.profile.user_lat)
      data.append('user_lng', this.profile.user_lng)
      for (var pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1])
      }

      const dataUser = { id: this.user.user_id, updateData: this.profile }
      console.log(dataUser)
      this.patchUserProfile(dataUser)
        .then(response => {
          console.log(response)
          this.getUserProfile(this.user.user_id)
          this.$router.push('/profile')
        })
        .catch(() => {
          this.$router.push('/profile')
        })
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
