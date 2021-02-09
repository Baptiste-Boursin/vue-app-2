<template>
    <div class="detail">
        <div id="nav">
            <router-link to="/?tab=shows">Back to home</router-link>
        </div>

        <div> 
            <h1>{{showDetail.title}}</h1>
            <img :src="showDetail.images.poster" alt="Show poster" style="width:20%">
            <p>Year of creation : {{showDetail.creation}}</p>
        </div>
        
        <div class="description"> 
            <h2>Description</h2>
            <p>{{showDetail.description}}</p>
            
        </div>

        <div class="genre">
            <h2>Genres</h2>
            <li v-for="genre in showDetail.genres" :key="genre">
                <p>{{genre}}</p>
            </li>
        </div>
        
        <div class="seasons_details">
            <h2>Seasons Details</h2>
            <p> Total : {{showDetail.seasons}} </p>
            
            <li v-for="seasons in showDetail.seasons_details" :key="seasons">
                <p>Season {{seasons.number}}</p>
                <p>Episodes : {{seasons.episodes}}</p>
            </li>
        </div>

        <div class="platforms">
            <h2>Where can you watch it</h2>
            <p>{{showDetail.platforms.svod.name}}</p>
            <img :src="showDetail.platforms.svod.logo" alt="logo platform" style="width:10%">
            <p><a :href="showDetail.platforms.svod.link_url">Link to see it on {{showDetail.platforms.svod.name}}</a></p>
        </div>
    </div>
</template>



<script>
import axios from 'axios';
export default {
    data(){
        return{
            showDetail :{}
        }
    },
    
    beforeMount(){
        axios
        .get('https://api.betaseries.com/shows/display',{
            params : {
                id : this.$route.params.id,
                key : 'fcbaabfce695'
            }
        }).then(res=>{
            this.showDetail = res.data.show
        })
    }
    
}
</script>
<style scoped>
</style>