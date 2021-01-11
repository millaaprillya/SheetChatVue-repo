<template>
  <div class="product">
    <div class="centered">
      <Navbar />
      <div>
        <b-jumbotron class="bg-jb"
          ><p class="title-dashboard">
            Start Your Day with Coffee and Good Meals
          </p>
          <p class="title-dashboard-2">
            We provide high quality beans, good taste, and healthy meals made by
            love just for you. Start your day with us for a bigger smile!
          </p>
        </b-jumbotron>
      </div>
      <div></div>
      <b-container class="bv-example-row">
        <b-row>
          <b-col
            ><img src="../../assets/property/Capture.png" alt="" />
            <p>90+</p>
            <p>Staff</p></b-col
          >
          <b-col
            ><img src="../../assets/property/Capture.2.png" alt="" />
            <p>30+</p>
            <p>Store</p></b-col
          >
          <b-col
            ><img src="../../assets/property/Capture3.png" alt="" />
            <p>800+</p>
            <p>Constumers</p></b-col
          >
        </b-row>
      </b-container>
      <b-jumbotron class="bg-jb-2">
        <b-row>
          <b-col><img src="../../assets/property/dah.jpg" alt=""/></b-col>
          <b-col><img src="../../assets/property/bg-2.png" alt="" /> </b-col>
        </b-row>
      </b-jumbotron>
      <b-jumbotron class="bg-jb-2">
        <b-row>
          <b-col><img src="../../assets/property/map.jpg" alt="" /> </b-col>
        </b-row>
      </b-jumbotron>
      <b-jumbotron class="bg-jb-2">
        <b-row>
          <b-col><img src="../../assets/property/yaps.jpg" alt="" /> </b-col>
        </b-row>
      </b-jumbotron>
      <Footer />
    </div>
  </div>
</template>

<script>
// [1] step pertama import komponen
import Navbar from '../../components/_base/Navbar'
import Footer from '../../components/_base/Footer'

export default {
  name: 'Product',
  // [2] step 2 mendaftarkan komponen yang sudah kita import
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.bg-jb {
  background: url('../../assets/bg/bg-dashboard.png');
}
.bg-jb-2 {
  background: white;
}
.title-dashboard {
  width: 570px;
  height: 140px;
  left: 150px;
  top: 207px;

  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 70px;
  color: #ffffff;
}
.title-dashboard-2 {
  width: 555px;
  height: 90px;
  left: 150px;
  top: 366.77px;

  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  /* or 150% */

  color: #ffffff;
}
.getStarted {
  width: 250px;
  height: 60px;
  left: 150px;
  top: 489px;

  background: #ffba33;
  border-radius: 10px;
}
.col-info {
  position: absolute;
}
.centered {
  text-align: center;
}
.voucher-container {
  box-sizing: border-box;
  border-right: 5px;
}
.card-product {
  width: 160px;
  height: 300.5px;
  margin: 4%;
  padding: 2%;
  background: #ffffff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 150px;
}
.card-title {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: bold;
  text-align: center;
  color: #000000;
  font-style: normal;
  font-size: 20px;
}
.rounded-circle {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10%;
}
.card-title:hover {
  color: brown;
  font-weight: bold;
  font-size: 20px;
}
.text-muted {
  color: #6a4029;
}
.header-menu-li li {
  margin-left: 5%;
  font-family: Poppins;
}
.info-promo {
  margin: 10%;
  margin-left: 10%;

  font-family: 'Source Serif Pro', serif;
  font-size: 150%;
  padding-bottom: 5%;
  color: #6a4029;
}
.voucher-container {
  border-right: #f7f7f7;
  border-right: 1px solid;
  padding: 0px;
  box-shadow: 0px 5px 5px #f7f7f7;
}
.add-product {
  margin-left: 20%;
  margin-top: 5%;
  text-align: center;
  width: 600px;
  height: 70px;
  border-radius: 20px;
  background: #ffba33;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height, or 120% */

  text-align: center;

  color: #6a4029;
}
.pagination {
  margin-top: 5%;
}
@media only screen and (max-width: 1094px) {
  .voucher-container {
    display: none;
  }
  .bg-home {
    margin-left: 25%;
    margin-right: 25%;
  }
  .add-product {
    margin-top: 5%;
    text-align: center;
    width: 300px;
    height: 70px;
    border-radius: 20px;
    background: #ffba33;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;

    /* identical to box height, or 120% */

    text-align: center;

    color: #6a4029;
  }
  .edit-data {
    margin-left: 5px;
  }
}
.add-voucher {
  margin-top: 10%;
  width: 300px;
  height: 70px;
  left: 156px;
  top: 1110px;
  border-radius: 20px;
  background: #ffba33;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
}
</style>
