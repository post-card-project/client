<template>
  <div class="container">
	<form @submit.prevent="register" class="signUp">
		<h3>Create Account</h3>
		<p>Complete this form<br>
  to join.
		</p>
    <input v-model="name" type="text" placeholder="Enter Name" reqired />
		<input v-model="email" class="w100" type="email" placeholder="Enter Email" reqired autocomplete='off' />
		<input v-model="password" type="password" placeholder="Enter Password" reqired />
		<button @click="toLogin" class="form-btn sx log-in" type="button" id="toLogin-btn">Log In</button>
		<button class="form-btn dx" type="submit">Sign Up</button>
	</form>
	<form @submit.prevent="login" class="signIn">
		<h3>Welcome<br>Back !</h3>
		<button class="fb" type="button">Log In With Facebook</button>
		<p>- or -</p>
		<input v-model="email" type="email" placeholder="Enter Email" autocomplete='off' reqired />
		<input v-model="password" type="password" placeholder="Enter Password" reqired />
		<button @click="toRegister" class="form-btn sx log-in" type="button">Sign Up</button>
		<button class="form-btn dx" type="submit">Log In</button>
	</form>
</div>
</template>

<script>
import axios from 'axios'
const baseUrl = 'http://localhost:3000'

export default {
  data: function() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    resetForm: function() {
      this.name = '',
      this.email = '',
      this.password = ''
    },
    toLogin: function() {
      $(".signIn").addClass("active-dx");
      $(".signUp").addClass("inactive-sx");
      $(".signUp").removeClass("active-sx");
      $(".signIn").removeClass("inactive-dx");
      this.resetForm()
    },
    toRegister: function() {
      $(".signUp").addClass("active-sx");
      $(".signIn").addClass("inactive-dx");
      $(".signIn").removeClass("active-dx");
      $(".signUp").removeClass("inactive-sx");
      this.resetForm()
    },
    register: function() {
      axios({
          url: `${baseUrl}/users/register`,
          method: 'POST',
          data: {
            name: this.name,
            email: this.email,
            password: this.password
          }
        })
          .then(({ data }) => {
            Swal.fire({
              icon: 'success',
              title: 'Success:',
              text: 'Account successfully created! Please log in to continue!'
            })
            document.getElementById("toLogin-btn").click();
            this.resetForm();
          })
          .catch(err => {
            Swal.fire({
              icon: 'error',
              title: 'Error:',
              text: err
            })
          })
    },
    login: function() {
      axios({
          url: `${baseUrl}/users/login`,
          method: 'POST',
          data: {
            email: this.email,
            password: this.password
          }
        })
          .then(({ data }) => {
            Swal.fire({
              icon: 'success',
              title: 'Success:',
              text: 'Welcome!'
						})
						localStorage.setItem('access_token', data.access_token)
						this.$emit('set-login')
            this.resetForm()
          })
          .catch(err => {
            Swal.fire({
              icon: 'error',
              title: 'Error:',
              text: err
            })
          })
    } 
  }
}
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css?family=Dosis|Roboto:300,400';

* {
	margin: 0;
	padding: 0;
}

body {
	background: #ffc185;
}

.container{
	position:absolute;
	width: auto;
	height:auto;
	top: calc(50% - 240px);
	left: calc(50% - 160px);
}

form {
	position: absolute;
	text-align: center;
	background: #fff;
	width: 310px;
	height: 470px;
	border-radius: 5px;
	padding: 30px 20px 0 20px;
	box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.25);
	box-sizing: border-box;
}

p {
	font-family: 'Roboto', sans-serif;
	font-weight: 100;
	text-transform: uppercase;
	font-size: 12px;
	color: #87613d;
	margin-bottom: 40px;
}

p > span {
	padding-top: 3px;
	display: block;
	font-weight: 400;
	font-size: 9px;
}

h3 {
	font-family: 'Dosis';
	font-size: 35px;
	text-transform: uppercase;
	color: #87613d;
	margin-bottom: 30px;
}

input,
button{
	outline: none !important; 
}

button.fb {
	border: none;
	background: #3b5998;
	width: 160px;
	height: 25px;
	font-family: 'Roboto', sans-serif;
	font-size: 12px;
	color: #fff;
	text-transform: uppercase;
	border-radius: 4px;
	border: 1px solid #29487d;
	cursor: pointer;
	margin-bottom: 20px;
	transition:all 0.3s linear;
}
button.fb:hover {
	background: #fff;
	color: #3b5998;
}

button.form-btn {
	position: absolute;
	width: 50%;
	height: 60px;
	bottom: 0;
	border: 0;
	font-family: 'Dosis';
	font-size: 24px;
	text-transform: uppercase;
	cursor: pointer;
}

button.form-btn.sx {
	left: 0;
	border-radius: 0 0 0 5px;
	background-color: rgba(255, 125, 0, 0.35);
	color: #fff;
	transition:all 0.3s linear;
}

button.form-btn.sx:hover {
	background-color:rgba(255, 125, 0, 0.65);
	color: #fff;
}

button.form-btn.sx.back {
	background-color: rgba(0, 0, 0, 0.15);
	transition:all 0.3s linear;
}

button.form-btn.sx.back:hover {
	background-color: rgba(0, 0, 0, 0.35);
}

button.form-btn.dx {
	right: 0;
	border-radius: 0 0 5px 0;
	background-color: #ff7d00;
	color: #fff;
}

input {
	border: none;
	border-bottom: 1px solid #ffc185;
	width: 85%;
	font-family: 'Roboto';
	color: #ff7d00;
	text-align: center;
	font-size: 21px;
	font-weight:100;
	margin-bottom:25px;
}

::-webkit-input-placeholder {
   color: #ffc185;
	font-family: 'Roboto';
	font-weight:100;
}

:-moz-placeholder {
   color: #ffc185;  
	font-family: 'Roboto';
	font-weight:100;
}

::-moz-placeholder {
   color: #ffc185;  
	font-family: 'Roboto';
	font-weight:100;
}

:-ms-input-placeholder {  
   color: #ffc185; 
	font-family: 'Roboto';
	font-weight:100;
}

.signIn input,
.signUp .w100 {
	width: 100%;
}

.signIn{
		z-index: 1;
		transform: perspective(100px) translate3d(100px, 0px, -30px);
		opacity: 0.5;
}

.signUp {
	z-index: 2;
}

.active-dx{
	animation-name: foregrounding-dx;
	animation-duration: 0.9s;
	animation-fill-mode: forwards;
}

.active-sx{
	animation-name: foregrounding-sx;
	animation-duration: 0.9s;
	animation-fill-mode: forwards;
}

.inactive-dx{
	animation-name: overshadowing-dx;
	animation-duration: 0.9s;
	animation-fill-mode: forwards;
}

.inactive-sx{
	animation-name: overshadowing-sx;
	animation-duration: 0.9s;
	animation-fill-mode: forwards;
}

@keyframes overshadowing-dx {
	0%{
		z-index:2;
		transform: perspective(100px) translate3d(0px, 0px, 0px);
		opacity: 1;
		box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.25);
	}
	100%{
		z-index: 1;
		transform: perspective(100px) translate3d(100px, 0px, -30px);
		opacity: 0.5;
		box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.25);
	}
}

@keyframes overshadowing-sx {
	0%{
		z-index:2;
		transform: perspective(100px) translate3d(0px, 0px, 0px);
		opacity: 1;
		box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.25);
	}
	100%{
		z-index: 1;
		transform: perspective(100px) translate3d(-100px, 0px, -30px);
		opacity: 0.5;
		box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.25);
	}
}

@keyframes foregrounding-dx {
	0%{
		z-index:1;
		transform: perspective(100px) translate3d(100px, 0px, -30px);
		opacity: 0.5;
	}
	50%{
		z-index:2;
		transform: perspective(100px) translate3d(400px, 0px, -30px);
	}
	100%{
		z-index:2;
		transform: perspective(100px) translate3d(0px, 0px, 0px);
		opacity: 1;
	}
}

@keyframes foregrounding-sx {
	0%{
		z-index:1;
		transform: perspective(100px) translate3d(-100px, 0px, -30px);
		opacity: 0.5;
	}
	50%{
		z-index:2;
		transform: perspective(100px) translate3d(-400px, 0px, -30px);
	}
	100%{
		z-index:2;
		transform: perspective(100px) translate3d(0px, 0px, 0px);
		opacity: 1;
	}
}
</style>