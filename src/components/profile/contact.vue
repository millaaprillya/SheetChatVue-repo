<template>
  <div class="container">
    <div class="messaging">
      <div class="inbox_msg">
        <div class="inbox_people">
          <Profile />
        </div>
        <ListContact />
      </div>
    </div>
  </div>
</template>
<script>
import Profile from '../_base/edit-profile'
import ListContact from '../_base/list-contact'
export default {
  components: {
    Profile,
    ListContact
  }
}
</script>
