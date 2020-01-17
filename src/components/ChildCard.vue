<template>
    <div class="card col-3 m-2" style="width: 18rem;" id="listCards" v-if="page=='listCards'">
        <img v-bind:src="post.image" class="card-img-top" alt="..." id="image1">
        <div class="card-body">
            <h5 class="card-title">{{ post.name }}</h5>
            <p class="card-text">{{ post.message }}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ post.address }}</li>
            <li class="list-group-item">{{ post.location }}</li>
        </ul>
        <div class="card-body">
            <a href="" class="card-link" v-on:click.prevent="detailPost(post)">Detail</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'child-card',
    props: [
        'post', 'page'
    ],
    methods: {
        detailPost(post) {
            this.$emit('detailPost', post)
        }
    }
}
</script>

<style scoped>

</style>