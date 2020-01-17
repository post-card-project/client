<template>
  <div>
    <UploadForm />
    <LandingPage />
    <navbar @goHome="changeToHome($event)" @goUser="changeToUser($event)"></navbar>
    <UserPostCard v-if="page === 'user'"></UserPostCard>
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
<<<<<<< HEAD
  },
  components: {
    UploadForm,
    LandingPage
  },
  methods: {}
=======
  }
>>>>>>> 67fb4fc28a839a53d6880d830114d378d1ce77e9
};
</script>

<style>
</style>