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
        <h3>{{ coordinate }}</h3>
      </div>
    </center>
  </div>
</template>

<script>
export default {
  name: 'Maps',
  data() {
    return {
      coordinate: {
        lat: 10,
        lng: 10
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
      })
      .catch(error => {
        alert(error)
      })
  },
  methods: {
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
