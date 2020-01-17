<template>
    <div class="container" id="cardDetail" v-if="page=='cardDetail'">
        <img v-bind:src="post.image" class="card-img-top d-flex justify-content-center" alt="..." id="image1">
        <div id="overlay">
            <img v-bind:src="post.editedImage" class="card-img-top d-flex justify-content-center" alt="..." id="image2">
        </div>
        <h3 class="display-6">{{ post.name }}</h3>
        <p class="lead">{{ post.message }}</p>
        <hr class="my-2">
        <p>{{ post.location }}</p>
        <a class="btn btn-primary btn-lg" href="" role="button" v-on:click.prevent="allpostcards">Back...</a>
    </div>
</template>

<script>
export default {
    name: 'detail-card',
    props: [
        'post', 'page'
    ],
    methods: {
        allpostcards() {
            this.$emit('allPostCards')
        }
    }
}
</script>

<style scoped>
#cardDetail {
  position: relative;
}

#image1 {
  width: 100%;
  height: auto;
}

#overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 96%;
  width: 100%;
  opacity: 0;
  transition: .3s ease;
}

#cardDetail:hover #overlay {
  opacity: 1;
}

#image2 {
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

</style>