<template>
<div id="body">
<div class="container">
  <h1>Create a postcard!</h1><br><br>
<div class="row">
  <div class="col-sm-6">
  <form @submit.prevent="submit">
  Sender:<br>
    <input v-model="sender" type="text" name="sender" value="Jane">
  </div>
  <div class="col-sm-6">
  Reciever:<br>
    <input v-model="name" type="text" name="name" value="Hanson">
  </div>
</div>
<div class="row">
  <div class="col-sm-12">
    Address:<br>
    <input v-model="address" type="text" name="address" value="Jl. Beringin III no. 5A, Jakarta, 12952, Indonesia">
  </div>
</div>
<div class="row">
  <div class="col-sm-12">
    Message:<br>
    <input v-model="message" type="text" name="message" value="Happy holiday, Jane">
  </div>
</div>
<div class="row">
  <div class="col-sm-6">
    Image:<br>
    <input type="file" name="image" value="">
  </div>
  <div class="col-sm-6">
    <input type="submit" value="Submit" class="submit">
</form>
  </div>
</div>
</div>
  </div>
</template>
<script>
import axios from 'axios'
const baseUrl = 'http://localhost:3000'
export default {
    data: function() {
      return {
        form: {
          name: '',
          address: '',
          message: '',
          sender: '',
          image: ''
        }
      }
    },
    methods: {
      submit() {
        axios({
          url: `baseUrl/postcards`,
          method: 'POST',
          data: {
            name: this.name,
            address: this.address,
            message: this.message,
            sender: this.sender,
            image: this.image
          },
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
          .then(({ data }) => {
            this.resetForm()
            Swal.fire({
              icon: 'success',
              title: 'Success:',
              text: 'Your postcard successfully created!'
            })
            // this.$emit('findAll')
          })
          .catch(err => {
            Swal.fire({
              icon: 'error',
              title: 'Error:',
              text: err
            })
          })
      },
      resetForm() {
        this.name = ''
        this.address = ''
        this.message = ''
        this.sender = ''
        this.image = ''
      }
    }
  }
</script>
<style scoped>
#body {
  background-color: #DDF0FF;
  font-family: "tenso", sans-serif;
  color: #586791;
}
.container {
  max-width:700px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 80px;
}
h1{
  color:#55648E;
  font-family: Lato;
  font-weight: 300;
  text-align:center;
  font-size: 35px;
}
input {
  width:100%;
  font-family:tenso;
}
select {
  width:100%;
  font-family:tenso;
  color:#586791;
  letter-spacing:.04em;
  padding: 15px 30px;
  border-radius:360px;
  background: white;
  border:none;
 -webkit-box-shadow: 2px 1px 39px 16px rgba(198,225,244,0.86);
-moz-box-shadow: 2px 1px 39px 16px rgba(198,225,244,0.86);
box-shadow: 2px 1px 39px 16px rgba(198,225,244,0.86);
  -webkit-appearance: none;
  -moz-appearance: none;
}
option{
  padding:20px 30px;
  font-family:tenso;
}
.dropdown {
  margin: 40px 20px;
}
select:hover {
  cursor:pointer;
}
select:focus {
 outline:none;
}
select.minimal {
  background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #fff, #fff);
  background-position:
    calc(100% - 30px) calc(1.4em + 2px),
    calc(100% - 25px) calc(1.4em + 2px),
    calc(100% - 2.5em) 0.9em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;
}
input {
  margin:10px 0 40px 0;
  background:transparent;
border:none;
  border-bottom: 1px solid #C2DCF3;
  color:#ABC7E8;
}
input:focus {
  border-bottom: 1px solid #596790;
  outline: none;
  color:#596790;
}
.submit {
  border:none;
  background-color: #ADCAE8;
  color:#E4EDF7;
  border-radius:360px;
  height:50px;
     transition: background 0.3s;
  -webkit-transition: background 0.3s;
}
.close-what {
    color: #586790;
  font-size:50px;
  font-weight:100;
  text-align:right;
  padding-right:19px;
  line-height:69px;
  border-radius:360px;
    height: 85px;
    width: 85px;
    background-color: #C8E6FE;
    border-radius: 5px;
    position: fixed;
  top:0;
  right:0;
  border-radius: 0px 0px 0px 360px;
}
.close-what:hover {
  color:white;
  cursor:pointer;
}
.submit:hover {
  background: white;
  color:#5B6B93;
  cursor:pointer;
}
</style>