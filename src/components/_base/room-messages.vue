<template>
  <div class="mesgs">
    <div class="msg_history">
      <div class="incoming_msg">
        <div class="incoming_msg_img">
          <img src="../../assets/mamah.png" alt="sunil" />
        </div>
        <div class="received_msg">
          <div class="received_withd_msg">
            <p>Test which is a new approach to have all solutions</p>
            <span class="time_date"> 11:01 AM | June 9</span>
          </div>
        </div>
      </div>
      <div class="outgoing_msg">
        <div class="user_img">
          <img src="../../assets/Rectangle 8.png" alt="sunil" />
        </div>
        <div class="sent_msg">
          <p>Test which is a new approach to have all solutions</p>
          <span class="time_date"> 11:01 AM | June 9</span>
        </div>
      </div>
      <div class="incoming_msg">
        <div class="incoming_msg_img">
          <img
            src="https://ptetutorials.com/images/user-profile.png"
            alt="sunil"
          />
        </div>
        <div class="received_msg">
          <div class="received_withd_msg">
            <p>Test, which is a new approach to have</p>
            <span class="time_date"> 11:01 AM | Yesterday</span>
          </div>
        </div>
      </div>
      <div class="outgoing_msg">
        <div class="user_img">
          <img src="../../assets/Rectangle 8.png" alt="sunil" />
        </div>
        <div class="sent_msg">
          <p>Apollo University, Delhi, India Test</p>
          <span class="time_date"> 11:01 AM | Today</span>
        </div>
      </div>
      <div class="incoming_msg">
        <div class="incoming_msg_img">
          <img
            src="https://ptetutorials.com/images/user-profile.png"
            alt="sunil"
          />
        </div>
        <div class="received_msg">
          <div class="received_withd_msg">
            <p>
              We work directly with our designers and suppliers, and sell direct
              to you, which means quality, exclusive products, at a price anyone
              can afford.
            </p>
            <span class="time_date"> 11:01 AM | Today</span>
          </div>
        </div>
      </div>
    </div>
    <div class="type_msg">
      <div class="input_msg_write">
        <input type="text" class="write_msg" placeholder="Type a message" />
        <button class="msg_send_btn" type="button">
          <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style>
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
  width: 40%;
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
.user_img {
  float: right;
  width: 8%;
}
.chat_ib {
  float: left;
  padding: 0 0 0 15px;
  width: 88%;
}

.chat_people {
  overflow: hidden;
  clear: both;
}
.chat_list {
  border-bottom: 1px solid #c4c4c4;
  margin: 0;
  padding: 18px 16px 10px;
}
.inbox_chat {
  height: 550px;
  overflow-y: scroll;
}

.active_chat {
  background: #ebebeb;
}

.incoming_msg_img {
  display: inline-block;
  width: 6%;
}
.received_msg {
  display: inline-block;
  padding: 0 0 0 10px;
  vertical-align: top;
  width: 92%;
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
  float: left;
  padding: 30px 15px 0 25px;
  width: 60%;
  background: #fafafa;
}

.sent_msg p {
  font-size: 14px;
  margin: 0;
  color: #fff;
  padding: 5px 10px 5px 12px;

  width: 247px;
  height: 65px;
  left: 1000px;
  top: 281px;

  background: #ffffff;
  border-radius: 35px 10px 35px 35px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 185.17%;
  /* identical to box height, or 28px */

  letter-spacing: -0.165px;

  color: #232323;
}
.outgoing_msg {
  overflow: hidden;
  margin: 26px 0 26px;
}
.sent_msg {
  float: right;
  width: 46%;
}
.input_msg_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  color: #4c4c4c;
  font-size: 15px;
  min-height: 48px;
  width: 100%;
}

.type_msg {
  border-top: 1px solid #c4c4c4;
  position: relative;
}
.msg_send_btn {
  background: #05728f none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 33px;
  position: absolute;
  right: 0;
  top: 11px;
  width: 33px;
}
.messaging {
  padding: 3% 0 50px 0;
}
.msg_history {
  height: 516px;
  overflow-y: auto;
}
</style>
