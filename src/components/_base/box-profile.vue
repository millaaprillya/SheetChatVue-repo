<template>
  <div class="headind_srch">
    <div class="recent_heading">
      <h4>SheetChat</h4>
    </div>
    <div class="srch_bar">
      <div>
        <b-dropdown
          variant="link"
          toggle-class="text-decoration-none"
          no-caret
          right
        >
          <template v-slot:button-content class="btn-menu">
            <b-img :src="require('../../assets/burger-menu.png')"></b-img>
          </template>
          <b-dropdown-item to="/profile">Settings</b-dropdown-item>
          <b-dropdown-item to="/contact">Contacts</b-dropdown-item>
          <b-dropdown-item v-b-modal.modal-search-friend
            >Invite friends</b-dropdown-item
          >
          <b-dropdown-item href="#"> Settingss</b-dropdown-item>
          <b-dropdown-item href="#" @click="logout">Logout</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>

    <template>
      <b-container>
        <b-row class="bv-example-row">
          <b-col lg="2">
            <div v-if="!profile.profileImage">
              <img
                src="../../assets/user.png"
                class="rounded-circle "
                height="50"
              />
            </div>
            <div v-else>
              <img
                :src="`${url}/${profile.profileImage}`"
                class="rounded-circle "
                height="50"
              />
            </div>
          </b-col>
          <b-col>
            <p class="teks">
              {{ this.form.user_name }}
            </p>
            <p class="user-phone">(62+){{ this.form.user_phone }}</p>
          </b-col>
        </b-row>
      </b-container>
    </template>

    <b-row class="searchadd">
      <b-col md="9">
        <b-form-input
          placeholder="Search..."
          v-model="search"
          @keydown.enter.prevent="searching"
        ></b-form-input>
      </b-col>
    </b-row>
    <div class="friend-chat">
      <span><b-button class="select-type">All</b-button></span>
      <span><b-button class="select-type">Important</b-button></span>
      <span><b-button class="select-type">Unread </b-button></span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      url: 'http://localhost:3000',
      search: '',
      form: {
        user_name: '',
        user_phone: '',
        user_email: '',
        user_bio: '',
        profileImage: ''
      }
    }
  },
  created() {
    this.getUserProfile(this.user.user_id)
      .then(response => {
        console.log(response)
        this.form = {
          user_name: response.user_name,
          user_phone: response.user_phone,
          user_email: response.user_email,
          user_bio: response.user_bio,
          profileImage: response.profileImage
        }
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    ...mapMutations(['setSearchedUser']),
    ...mapActions(['getUserProfile', 'logout', 'getListRoom']),
    searching() {
      this.setSearchedUser(this.search)
      const data = { id: this.user.user_id, searchUser: this.search }
      this.getListRoom(data)
    }
  },
  computed: {
    ...mapGetters({ profile: 'setProfile', user: 'setUser' })
  }
}
</script>
>
<style scoped>
.teks {
  margin-left: 4%;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.165px;
}
.overflowTest {
  background: #4caf50;
  color: white;
  padding: 15px;
  width: 50%;
  height: 100px;
  overflow: scroll;
  border: 1px solid #ccc;
}
.friend-chat {
  padding-left: 13%;
  align-content: center;
}
.select-type {
  margin-top: 20px;
  margin-right: 20px;
  border-radius: 10px;
  background-color: transparent;
  font-weight: 500;
  font-size: 20px;
  border: none;
  font-weight: 500;
  color: black;
}
.select-type:focus {
  background-color: #7e98df !important;
}
.focus {
  background-color: #7e98df;
}
.select-type:hover {
  background-color: #7e98df;
}
.header-menu li {
  margin-top: 1%;
  margin-left: 5%;
  font-family: Poppins;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
}
.headind_srch {
  padding: 0px 15px 6px 16px;
  overflow: hidden;
  border-bottom: 1px solid #c4c4c4;
}

.recent_heading h4 {
  font-size: 21px;
  margin: auto;
  width: 128px;
  height: 34px;
  left: 30px;
  top: 43px;

  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 29px;
  line-height: 34px;
  text-align: center;
  letter-spacing: -0.165px;

  color: #7e98df;
}
.recent_heading,
.srch_bar {
  float: left;
  width: 40%;
  padding: 8%;
}
.srch_bar {
  display: inline-block;
  text-align: right;
  width: 60%;
  padding: ;
}
.searchadd {
  margin-bottom: 1rem;
  margin-top: 5%;
}
.searchadd img {
  width: 22px;
  height: 22px;
}
.searchadd .btn-secondary {
  border: transparent;
  background-color: transparent;
}
.searchadd .form-control {
  border: transparent;
  background-color: #fafafa;
  border-radius: 15px;
  padding: 1rem 2rem;
}
.user-phone {
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
