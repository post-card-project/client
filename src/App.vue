<template>
  <div>
    <navbar @goHome="changeToHome($event)" @goUser="changeToUser($event)"></navbar>
    <UserPostCard v-if="page === 'user'"></UserPostCard>
  </div>
</template>

<script>
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
  }
};
</script>

<style>
</style>