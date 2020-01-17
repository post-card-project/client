<template>
  <b-col id="card" class="d-flex justify-content-center">
    <div class="flip-card mr-4">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img :src="kartu.frontCard" alt="Avatar" style="width:400px; heigth: 300px" />
        </div>
        <div class="flip-card-back">
          <img
            :src="kartu.backCard"
            class="img-fluid"
            alt="Responsive image"
            style="width:400px; heigth: 300px"
          />
        </div>
      </div>
    </div>
    <div class="article" style="heigth: 280px">
      <div class="pl-2" style="background-color: cornflowerblue; border-radius: 10px">
        <h3>From : {{kartu.sender}}</h3>
        <h3>To : {{kartu.name}}</h3>
        <p>Message : {{kartu.message}}</p>
        <p>Location : {{kartu.location}}</p>
      </div>
      <div
        style="background-color: red;border-radius: 10px"
        class="d-flex justify-content-center pt-2 pb-2"
      >
        <div style="background-color: blue; border-radius: 5px" class="pl-2 pt-2 mr-5">
          <a
            style="color: white"
            class="twitter-share-button mr-3"
            href="https://twitter.com/intent/tweet?text=MyPostCard&url=https://upload.wikimedia.org/wikipedia/commons/a/a7/Pharo_syntax_postcard.svg"
          >Twitter</a>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-light"
            @click.prevent="deletePostCard(kartu._id)"
          >Delete</button>
        </div>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    deletePostCard: function(id) {
      this.$emit("delete", id);
    }
  },
  props: ["kartu"]
};
</script>

<style scoped>
#card {
  min-height: 10vh;
}
.flip-card {
  background-color: transparent;
  width: 400px;
  height: 200px;
  /* border: 1px solid #f1f1f1; */
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

.flip-card-inner {
  position: relative;
  width: 400px;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: transparent;
  color: black;
}

.flip-card-back {
  background-color: transparent;
  color: white;
  transform: rotateY(180deg);
}

.article {
  position: relative;
  width: 400px;
  height: 94%;
}
</style>