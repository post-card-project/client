<template>
  <div>
    <Navbar @changePage="changePage" />
    <Upload v-if="page == 'home'" />
    <Postcart v-else-if="page == 'user'" />
  </div>
</template>

<script>
import Navbar from '../components/navbar'
import Postcart from './UserPostCard'
import Upload from '../components/UploadForm'

export default {
  data() {
    return {
      page: 'home'
    }
  },
  components: {
    Navbar, Upload, Postcart
  },
  methods: {
    changePage(value) {
      this.page = value
    }
  },
  created() {
    // if(localStorage.getItem('token')) this.isLogin = true
    // else this.isLogin = false
  }
}
</script>

<style>

</style>