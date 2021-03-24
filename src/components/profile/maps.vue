<template>
  <div class="bg">
    <center>
      <div class="maps">
        <h1>You Location on Here</h1>
        <GmapMap
          :center="coordinate"
          :zoom="10"
          map-type-id="terrain"
          style="width: 500px; height: 300px"
        >
          <GmapMarker
            :position="coordinate"
            :clickable="true"
            :draggable="true"
            @click="clickMarker"
            icon="https://img.icons8.com/color/48/000000/map-pin.png"
          />
        </GmapMap>
      </div>
    </center>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Maps',
  data() {
    return {
      coordinate: {
        lat: 20,
        lng: 20
      }
    }
  },
  created() {
    this.$getLocation()
      .then(coordinates => {
        this.coordinate = {
          lat: coordinates.lat,
          lng: coordinates.lng
        }
        console.log(coordinates)
        const updateLoc = { id: this.profile.user_id, updateData: coordinates }
        if (this.coordinates < 300) {
          this.patchUserProfile(updateLoc)
        }
      })
      .catch(error => {
        alert(error)
      })
  },
  methods: {
    ...mapActions(['patchUserProfile']),
    clickMarker(position) {
      console.log('clicked marker')
      console.log(position)
      console.log(position.latLng.lat())
      console.log(position.latLng.lng())
      this.coordinate = {
        lat: position.latLng.lat(),
        lng: position.latLng.lng()
      }
    }
  },
  computed: {
    ...mapGetters({ profile: 'setProfile', user: 'setUser' })
  }
}
</script>

<style>
.bg {
  float: left;
  padding: 30px 15px 0 25px;
  width: 60%;
  background: url('../../assets/maps3.png');
}
.maps {
  margin-top: 15%;
}
</style>
