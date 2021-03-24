<template>
  <b-row>
    <b-col md="12">
      <h3 mt="5">My Contact</h3>
    </b-col>
    <b-col class="searchadd" md="9">
      <b-row>
        <div mr="5">
          <b-form-input
            placeholder="Search friends @"
            v-model="search"
            @keyup.enter.prevent="searchFriends"
          ></b-form-input>
        </div>
        <div>
          <b-col>
            <button
              type="button"
              class="btn btn-outline-secondary"
              @click="addfriends()"
            >
              +Invate Friends
            </button>
          </b-col>
        </div>
      </b-row>
    </b-col>

    <div class="card-list">
      <b-row>
        <b-col md="4" v-for="(item, index) in listFriend" :key="index">
          <b-card no-body style="padding: 32px">
            <b-row no-gutters align-v="center">
              <b-col md="6" class="text-center" align-self="center">
                <img :src="`${url}/${item.profileImage}`" alt="sunil" />
                <b-card-text class="name"> {{ item.user_name }} </b-card-text>
                <b-card-text class="email">
                  {{ item.user_email }}
                </b-card-text>
                <b-card-text class="phone">
                  {{ item.user_phone }}
                </b-card-text>
              </b-col>
              <b-col class="button-md" md="3">
                <b-card-body>
                  <b-button size="sm" @click="showModalLocation(item)"
                    >Show Location</b-button
                  >
                  <br />
                  <br />
                  <b-button
                    v-if="item.friends_id"
                    @click="creatingRoom(item.friends_id)"
                    >Chatt {{ item.user_name }}
                  </b-button>
                  <br />
                  <b-button
                    v-if="!item.friends_id"
                    @click="InvateFriends(item.user_id)"
                    >Add Friends
                  </b-button>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </div>
    <b-modal id="open-location" title="Location" hide-footer centered>
      <GmapMap :center="coordinate" :zoom="15">
        <GmapMarker :position="coordinate" />
      </GmapMap>
    </b-modal>
    <b-modal id="open-friends" title="Invate Friends" hide-footer centered>
      <div class="row g-3 align-items-center">
        <div class="col-auto">
          <label for="inputPassword6" class="col-form-label">ID : </label>
        </div>
        <div class="col-auto">
          <input
            type="number"
            id=""
            v-model="add"
            class="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div class="col-auto btn-secondary">
          <button
            type="button"
            class="btn"
            @click="InvateFriends(item.user_id)"
          >
            ADD request Friends
          </button>
        </div>
        <div class="col-auto">
          <span id="passwordHelpInline" class="form-text">
            We try to find your friendss
          </span>
        </div>
      </div>
    </b-modal>
  </b-row>
</template>

<style>
.card-list {
  width: 100%;
  border-radius: 50% !important;
  height: 50%;
}
.searchadd {
  margin-bottom: 5rem;
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
.contact {
  overflow: auto;
  padding: 2rem;
  height: 100vh;
}
.col-md-12 {
  margin: 10px;
}
.card {
  border-radius: 30px;
  border: transparent;
  box-shadow: 0px 20px 20px rgba(223, 222, 222, 0.288);
  margin: 10px;
}
.col-md-6 img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 15px;
}
.name {
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: -0.165px;
  color: #232323;
}
.email,
.phone {
  font-size: 16px;
  line-height: 19px;
  color: #848484;
}
.location {
  font-size: 16px;
  line-height: 19px;
  color: #232323;
}
.vue-map-container {
  width: 250px;
  height: 180px;
  margin: auto;
}
.btn-secondary {
  background-color: #7e98df;
  border-radius: 30px;
  border: transparent;
  font-weight: 500;
  font-size: 14px;
  padding: 0.6em;
}
@media screen and (max-width: 425px) {
  .card {
    padding: 14px !important;
  }
  .card .col-md-6 {
    text-align: center;
  }
}
</style>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Contact',
  data() {
    return {
      url: 'http://localhost:3000',
      search: '',
      add: '',
      form: {
        friends_id: '',
        user_email: '',
        user_image: '',
        user_name: '',
        user_phone: ''
      },
      coordinate: { lat: 0, lng: 0 }
    }
  },
  methods: {
    ...mapMutations(['setSearchedUser']),
    ...mapActions(['getListFriend', 'createRoom', 'addFriend']),
    searchFriends() {
      const findUser = { id: this.user.user_id, find: this.search }
      console.log(findUser)
      this.getListFriend(findUser)
    },
    creatingRoom(index) {
      const setData = {
        sender_id: this.user.user_id,
        receiver_id: index
      }
      console.log(setData)
      this.createRoom(setData)
        .then(response => {
          console.log(response)
          this.$router.push('/')
        })
        .catch(() => {
          this.$router.push('/')
        })
    },
    addfriends() {
      this.$bvModal.show('open-friends')
    },
    showModalLocation(data) {
      this.coordinate = {
        lat: parseInt(data.user_lat),
        lng: parseInt(data.user_lng)
      }
      console.log(this.coordinate)
      this.$bvModal.show('open-location')
    },
    InvateFriends(add) {
      const setData = { user_id: this.user.user_id, friends_id: add }
      this.addFriend(setData)
        .then(response => {
          console.log(response)
          this.$router.push('/contact')
        })
        .catch(() => {
          this.$router.push('/contact')
        })
    }
  },
  created() {
    const findUser = { id: this.user.user_id, find: this.search }
    this.getListFriend(findUser)
  },
  computed: {
    ...mapGetters({
      friends: 'getListFriends',
      userId: 'getUserId',
      user: 'setUser',
      listFriend: 'getAlluser'
    })
  }
}
</script>
