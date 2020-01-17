<template>
    <div class="row ml-2" id="parentCard">
        <child-card 
            v-for="postcard in postcardList"
            v-bind:key="postcard._id"
            v-bind:post="postcard"
            :page="page"
            v-on:detailPost="onePostCard">
        </child-card>
        <detail-card 
            v-bind:post="postcardDetail"
            :page="page"
            v-on:allPostCards="allPostCards">
        </detail-card>
    </div> 
</template>

<script>
import ChildCard from '../components/ChildCard'
import DetailCard from '../components/DetailCard'
const htmlPort ='http://localhost:3000'

export default {
    name: 'parent-cards',
    data() {
        return {
            postcardList: '',
            postcardDetail: '',
            page: '',
        }
    },
    components: { ChildCard, DetailCard },
    methods: {
        allPostCards() {
            this.$axios({
                url: `${htmlPort}/postcards`,
                method: 'get',
                headers: {
                    access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMjA0OWI0NjM1YmEyODNhODJiYWJlYyIsImlhdCI6MTU3OTIzMTcyMywiZXhwIjoxNTc5MzE4MTIzfQ.iFqCt8IiBLmWwdB6eogRN72hzLL2OqOa4xM412k33vM'
                }
            })
            .then(({ data }) => {
                this.postcardList = data
                this.page = 'listCards'
            })
            .catch(err => {
                console.log('message: ', err.message)
            })
        },
        onePostCard(detail) {
            this.postcardDetail = detail;
            this.page = 'cardDetail'
        }
    },
    created(){
        this.allPostCards()
    }

}
</script>

<style scoped>
#parentCard {
    background-color: antiquewhite
}
</style>