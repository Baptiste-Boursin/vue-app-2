<template>
    <div class="movie">
        <h1> Last movies to discover</h1>
        <ul class="grid">
            <li v-for="movie in moviesDetails" :key="movie.id">
                <div class="card">
                    <img :src="movie.poster" alt="" style="width:100%">
                    <div class="container">
                        <h4>{{movie.title}}</h4>
                        <div v-if="getIsinfavListMovies(movie)" class="like_button"> 
                        <button @click="changeFav(movie)"><img src="@/assets/like_heart.png"></button>
                    </div>
                     <div v-if="!getIsinfavListMovies(movie)" class="unlike_button"> 
                        <button @click="changeFav(movie)"><img src="@/assets/empty_heart.png"></button>
                    </div>
                    </div>
                    
                </div>
            </li>
        </ul>
        
    </div>
</template>
<script>

export default {
    name : "Movie",
    props :["moviesDetails","favListMovies"],
    methods : {
        changeFav(movie){
            this.$emit("changeFavori",movie);
        },
        getIsinfavListMovies(movie){
            if(this.favListMovies.includes(movie)){
                return true;
            }
            return false;
        }
    }
}
</script>
<style scoped>

</style>