<template>
  <div class="inbox_msg">
    <div class="inbox_people">
      <Box1 />

      <div class="inbox_chat">
        <div class="chat_list">
          <div
            class="chat_people"
            v-for="(item, index) in listroom"
            :key="index"
          >
            <div class="image_user">
              <img
                :src="`${url}/${item.profileImage}`"
                class="rounded-circle "
                height="50"
                width="50"
              />
            </div>
            <div class="chat_ib">
              <h5 @click="showRoomMessage(item)">
                {{ item.user_name }}
                <span class="chat_date"
                  ><div>
                    <b-button
                      variant="light"
                      v-b-modal.modal-1
                      class="buttom-list"
                      v-b-toggle.sidebar-right
                      >...</b-button
                    >
                  </div></span
                >
              </h5>
              <p class="lastMessage">hii</p>
            </div>
          </div>
        </div>
      </div>
      <b-sidebar id="sidebar-right" title="Profile" right shadow>
        <div class="px-3 py-2">
          <center>
            <b-img
              :src="`${url}/${friends.profileImage}`"
              class="rounded-circle "
              height="100"
              width="100"
              fluid
              thumbnail
            ></b-img>
          </center>
          <center>
            <p class="p-user">{{ friends.user_name }}</p>
            <p v-if="friends.user_phone" class="user-phone">
              {{ friends.user_phone }}
            </p>
            <p v-if="!friends.user_phone" class="user-phone">
              Tell Your Friend to add number phone
            </p>
            <br />
            <p class="user-phone">{{ friends.user_bio }}</p>
          </center>
        </div>
      </b-sidebar>
      <div>
        <span class="select-type"></span>
        <span class="select-type"></span>
        <span class="select-type"></span>
      </div>
    </div>
    <b-container v-if="!friends.profileImage">
      <b-row class="bv-example-row"> </b-row>
    </b-container>

    <b-container v-else>
      <b-row class="bv-example-row">
        <b-col lg="1">
          <div class="img">
            <img
              :src="`${url}/${friends.profileImage}`"
              alt="sunil"
              class="rounded-circle "
              height="50"
              width="50"
            />
          </div>
        </b-col>
        <b-col>
          <p class="teks">
            {{ friends.user_name }}
          </p>
          <p class="teks"></p>
          <p class="teks-online"></p
        ></b-col>
      </b-row>
    </b-container>
    <!-- <RoomsChat /> -->

    <div class="mesgs">
      <div v-for="(i, index) in message" :key="index">
        <div class="outgoing_msg" v-if="i.sender_id === user.user_id">
          <div class="user_img">
            <img
              :src="`${url}/${profile.profileImage}`"
              class="rounded-circle "
              height="50"
              width="50"
              alt="sunil"
            />
          </div>
          <div class="sent_msg">
            <p>{{ i.message }}</p>
            <span class="time_date">{{ i.msg_created_at }}</span>
          </div>
        </div>
        <div class="incoming_msg" v-if="i.receiver_id !== user.user_id">
          <div class="incoming_msg_img">
            <img
              :src="`${url}/${friends.profileImage}`"
              class="rounded-circle "
              height="50"
              width="50"
              alt="sunil"
            />
          </div>
          <div class="received_msg">
            <div class="received_withd_msg">
              <p>{{ i.message }}</p>
              <span class="time_date"> {{ i.msg_created_at }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!message">
      <p>Open room for chat</p>
    </div>
    <div v-else>
      <div class="input_msg_write">
        <input
          type="text"
          v-model="SendMessage"
          class="write_msg"
          placeholder="Type a message"
        />
        <button class="bt-messgae">
          <img src="../../assets/plus.png" alt="" />
        </button>
        <button class="msg_send_btn " type="button" @click="postMessage()">
          <p>Send</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Box1 from '../../components/_base/box-profile'

export default {
  name: 'dashboard',
  components: {
    Box1
  },
  data() {
    return {
      url: 'http://localhost:3000',
      SendMessage: '',
      coordinate: { lat: 0, lng: 0 },
      search: '',
      form: {
        user_id: ''
      }
    }
  },
  created() {
    const data = { id: this.user.user_id, searchUser: this.search }
    this.getListRoom(data)
    this.setidUser(this.user.user_id)
    var dataUser = localStorage.getItem('vuex')
    var get_id = JSON.parse(dataUser).Auth.user.user_id
    this.getListFriend(get_id)
      .then(response => {
        console.log(response[0])
        this.form = response
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    ...mapMutations(['setListFriend', 'setSearchedUser', 'setidUser']),
    ...mapActions([
      'getListRoom',
      'getMessageByRoom',
      'getDataMessage',
      'sendMessage'
    ]),
    showRoomMessage(item) {
      const setData = { room_id: item.room_id, sender_id: this.profile.user_id }
      this.getMessageByRoom(setData)
      this.getDataMessage(setData)
      this.postMessage(setData)
    },
    postMessage() {
      const setData = {
        room_id: this.friends.room_id,
        sender_id: this.user.user_id,
        receiver_id: this.friends.receiver_id,
        message: this.SendMessage
      }
      this.sendMessage(setData)
    }
  },
  computed: {
    ...mapGetters({
      user: 'setUser',
      profile: 'setProfile',
      listroom: 'getlistroom',
      message: 'getMessage',
      friends: 'getDataFriend'
    })
  }
}
</script>
<style scoped>
.lastMessage {
  padding-bottom: 4%;
}
.select-type {
  border-radius: 10px;
  background-color: transparent;
  font-weight: 500;
  font-size: 20px;
  border: none;
  font-weight: 500;
  color: black;
}
.p-user {
  margin-top: 6%;

  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 17px;
}
.user-phone {
  height: 19px;
  left: 140px;
  top: 261px;
  margin-bottom: 3%;

  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  letter-spacing: 1.335px;

  color: #848484;
}
.bt-messgae {
  border: 0 !important;
  background-color: white;
}
.my-4 {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
}
.buttom-list {
  font-size: x-large;
  background-color: white !important;
  font-weight: 100;
}
.image_user {
  width: 15%;

  float: left;
}
.txt-message {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  letter-spacing: -0.165px;

  color: #7e98df;
}
.container {
  max-width: 1170px;
  margin: auto;
}
img {
  max-width: 100%;
}
.inbox_people {
  background: #fafafa #f8f8f8 none repeat scroll 0 0;
  float: left;
  overflow: hidden;
  width: 25%;
  border-right: 1px solid white;
}
.inbox_msg {
  border: 1px solid #c4c4c4;
  clear: both;
  overflow: hidden;
}
.top_spac {
  margin: 20px 0 0;
}

.srch_bar input {
  border: 1px solid #cdcdcd;
  border-width: 0 0 1px 0;
  width: 80%;
  padding: 2px 0 4px 6px;
  background: none;
}
.srch_bar .input-group-addon button {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  padding: 0;
  color: #707070;
  font-size: 18px;
}
.srch_bar .input-group-addon {
  margin: 0 0 0 -27px;
}

.chat_ib h5 {
  font-family: Rubik;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 21px;
  letter-spacing: -0.165px;
  color: #232323;
}
.chat_ib h5 span {
  font-size: 13px;
  float: right;
}
.chat_ib p {
  font-size: 14px;
  color: #989898;
  margin: auto;
}
.chat_img {
  float: left;
  width: 11%;
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
.user_img {
  float: right;
  width: 8%;
  margin-left: 2%;
}
.chat_ib {
  float: left;
  padding: 0 0 0 15px;
  width: 80%;
  border-bottom: 1px solid #c4c4c4;
  margin-left: 3%;
  margin-bottom: 2%;
}

.chat_people {
  width: 100%;
  overflow: hidden;
}
.chat_list {
  margin: 0;
  padding: 18px 16px 10px;
}
.inbox_chat {
  height: 400px;
  overflow-y: scroll;
}

.active_chat {
  background: #ebebeb;
}

.incoming_msg_img {
  display: inline-block;
  width: 6%;
  margin-top: 2%;
  margin-left: 2%;
  margin-bottom: 2%;
}
.received_msg {
  display: inline-block;
  padding: 0 0 0 10px;
  vertical-align: top;
  width: 92%;
  margin-top: 2%;
}
.received_withd_msg p {
  background: #7e98df;
  border-radius: 35px 35px 35px 10px;
  color: #646464;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 185.17%;
  /* or 28px */

  letter-spacing: -0.165px;

  color: #ffffff;
}
.time_date {
  color: #747474;
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
}
.received_withd_msg {
  width: 57%;
}
.mesgs {
  background-color: #eee;
  width: 1180px;
  height: 570px;
  border: 1px;
  overflow: auto;
}

.sent_msg p {
  background: white;
  border-radius: 10px;
  color: #646464;
  font-size: 14px;
  margin-right: 2%;
  padding: 5px 10px 5px 12px;
  width: 100%;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 185.17%;
}
.outgoing_msg {
  overflow: hidden;
  margin: 26px 0 26px;
}
.sent_msg {
  float: right;
  width: 25%;
}
.input_msg_write input {
  color: #4c4c4c;
  font-size: 15px;
  margin-left: 1%;
  margin-top: 1%;
  margin-bottom: 1%;
  width: 65%;
  border-radius: 15px;
  border: transparent;
  background-color: transparent;
}

.type_msg {
  border-top: 1px solid #c4c4c4;
  position: relative;
}
.msg_send_btn {
  background: #05728f none repeat scroll 0 0;
  border: medium none;
  text-align: center;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 40px;
  margin-left: 1%;
  right: 0;
  top: 15px;
  width: 70px;
}
.messaging {
  padding: 3% 0 50px 0;
}

.bv-example-row {
  margin: 2%;
  margin-left: 2px;
}
.teks {
  font-family: Rubik;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  padding-left: 5px;
  letter-spacing: -0.165px;

  color: #232323;
}
.teks-online {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  letter-spacing: -0.165px;

  color: #7e98df;
}
</style>
