<template>
  <div class="container">
    <div class="messaging">
      <div class="inbox_msg">
        <div>
          <ListContact />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ListContact from '../_base/list-contact'
export default {
  components: {
    ListContact
  }
}
</script>
