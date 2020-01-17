<template>
  <b-container class="container">
    <b-row v-for="(card, i) in cards" :key="i" class="row">
      <Cards :kartu="card" @delete="deletePost($event)"></Cards>
    </b-row>
  </b-container>
</template>

<script>
import Cards from "../components/Cards";
import axios from "axios";
export default {
  data() {
    return {
      dariAnak: "",
      cards: []
    };
  },
  created() {
    this.findAll();
  },
  components: {
    Cards
  },
  methods: {
    mendengarkan: function(event) {
      this.dariAnak = event;
      console.log(this.dariAnak);
    },

    findAll: function() {
      axios({
        method: "get",
        url: "http://localhost:3000/postcards/all/own",
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
        .then(({ data }) => {
          this.cards = data;
        })
        .catch(err => {});
    },

    deletePost: function(id) {
      axios({
        method: "delete",
        url: `http://localhost:3000/postcards/${id}`,
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
        .then(({ data }) => {
          this.findAll();
          Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        })
        .catch(err => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data
          });
        });
    }
  }
};
</script>

<style scoped>
.container {
  min-height: 80vh;
  padding-top: 10px;
}
.row {
  min-height: 300px;
}
</style>