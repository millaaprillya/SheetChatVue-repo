<template>
  <div class="container">
    <div class="messaging">
      <div class="inbox_msg">
        <div class="inbox_people">
          <Box1 />
          <div class="inbox_chat">
            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img">
                  <img src="../../assets/mamah.png" alt="sunil" />
                </div>
                <div class="chat_ib">
                  <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                  <p>
                    Test, which is a new approach to have all solutions
                    astrology under one roof.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Contact />
        <RoomsChat />
      </div>
    </div>
  </div>
</template>

<script>
import Box1 from '../../components/_base/box-profile'
import Contact from '../../components/_base/nav-contact'
import RoomsChat from '../../components/_base/room-messages'
export default {
  name: 'dashboard',
  components: {
    Box1,
    Contact,
    RoomsChat
  }
}
</script>
<style scoped></style>
