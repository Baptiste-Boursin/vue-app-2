<template>
    <div>
        <div id="nav">
            <router-link to="/">Back to the films list</router-link>
        </div>

        <div>
            <h1>{{movieDetail.title}}</h1>
            <img :src="movieDetail.poster" alt="logo film" style="width:20%">
            <p>Production year : {{movieDetail.production_year}}</p>
            <p>Duration : {{movieDetail.length}} secondes</p>
        </div>

        <div>
            <h2>Synopsis</h2>
            <p>{{movieDetail.synopsis}}</p>
        </div>

        <div class="genre">
            <h2>Genres</h2>
            <li v-for="genre in movieDetail.genres" :key="genre" >
                <p>{{genre}}</p>
            </li>
        </div>

        <div class="platforms">
            <h2>Where can you watch it</h2>
            <li v-for="platform in movieDetail.platform_links" :key="platform">
                <p>{{platform.platform}}</p>
                <a :href="platform.link">Link to watch this movie on {{platform.platform}}</a>
            </li>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            movieDetail :{}
        }
    },
    
    beforeMount(){
        axios
        .get('https://api.betaseries.com/movies/movie',{
            params : {
                id : this.$route.params.id,
                key : 'fcbaabfce695'
            }
        }).then(res=>{
            this.movieDetail = res.data.movie
        })
    }
    
}
</script>

<style scoped>
a{
    text-decoration: none;
    color: black;
}
</style>