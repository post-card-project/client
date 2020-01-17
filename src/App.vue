<template>
  <div>
    <!-- <UploadForm />
    <LandingPage />
    <navbar @goHome="changeToHome($event)" @goUser="changeToUser($event)"></navbar>
    <UserPostCard v-if="page === 'user'"></UserPostCard>-->
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
    navbar
  },
  methods: {
    changeToHome: function(event) {
      this.page = event;
      console.log(this.page);
    },
    changeToUser: function(event) {
      this.page = event;
    }
  },
  components: {
    UploadForm,
    LandingPage
  },
  methods: {}
};
</script>

<style>
</style>