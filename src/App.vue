<template>
  <div>
    <!-- <UploadForm />
    <LandingPage />-->
    <!-- <navbar @goHome="changeToHome($event)" @goUser="changeToUser($event)"></navbar>
    <UserPostCard v-if="page === 'user'" />
    <UploadForm /> -->
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