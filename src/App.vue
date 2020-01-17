<template>
  <div>
<<<<<<< HEAD
    <!-- <UploadForm />
    <LandingPage />-->
    <!-- <navbar @goHome="changeToHome($event)" @goUser="changeToUser($event)"></navbar>
    <UserPostCard v-if="page === 'user'" />
    <UploadForm /> -->
=======
    <UploadForm />
>>>>>>> 11375d56c7d67d621677b63b3d5676b222eab453
    <!-- <LandingPage /> -->
  </div>
</template>

<script>
import UploadForm from "./components/UploadForm";
import LandingPage from "./components/LandingPage";
import UserPostCard from "./views/UserPostCard";
import navbar from "./components/navbar";

export default {
  data: function() {
    return {
      page: "user"
    };
  },
  components: {
    UserPostCard,
    navbar,
    UploadForm,
    LandingPage
  },
  methods: {
    changeToHome: function(event) {
      this.page = event;
    },
    changeToUser: function(event) {
      this.page = event;
    }
  }
};
</script>

<style>
</style>