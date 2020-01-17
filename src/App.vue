<template>
  <div>
    <LandingPage v-if="!isLogin" @set-login="setLogin" />
    <HomePage v-if="isLogin" />
    <!-- <LandingPage /> -->
    <!-- <navbar @goHome="changeToHome($event)" @goUser="changeToUser($event)"></navbar> -->
    <!-- <UserPostCard v-if="page === 'user'" /> -->
  </div>
</template>

<script>
import HomePage from "./views/HomePage";
import LandingPage from "./components/LandingPage";

export default {
  data: function() {
    return {
      page: "user",
      isLogin: false
    };
  },
  components: {
    HomePage,
    LandingPage
  },
  methods: {
    changeToHome: function(event) {
      this.page = event;
    },
    changeToUser: function(event) {
      this.page = event;
    },
    setLogin() {
      this.isLogin = true
    }
  },
  created() {
    if(localStorage.getItem('access_token')) this.isLogin = true
    else this.isLogin = false
  }
};
</script>

<style>
</style>