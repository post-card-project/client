<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#" @click="goCreate">Home</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" @click="goHome">Postcard</b-nav-item>
          <b-nav-item href="#" @click="goAll">All Postcard</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    goHome: function() {
      this.$emit("changePage", "user");
    },
    goAll: function() {
      this.$emit("changePage", "all");
    },
    goCreate: function() {
      this.$emit("changePage", "home");
    }
  },
  data: function() {
    return {};
  }
};
</script>

<style>
</style>