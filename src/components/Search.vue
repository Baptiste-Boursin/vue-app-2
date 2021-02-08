<template>
    <div class="search">
        <h1> Search Results</h1>
        <div>
            <h2>Movies</h2>
            <ul class="grid">
                <li v-for="movie in searchMoviesDetails" :key="movie.id">
                    <div class="card">
                        <img :src="movie.poster" alt="Avatar" style="width:100%">
                        <div class="container">
                            <h4>{{movie.title}}</h4>
                            <div v-if="getIsinfavListMovies(movie)" class="like_button"> 
                                <button @click="changeFavMovie(movie)"><img src="@/assets/like_heart.png"></button>
                            </div>
                            <div v-if="!getIsinfavListMovies(movie)" class="unlike_button"> 
                                <button @click="changeFavMovie(movie)"><img src="@/assets/empty_heart.png"></button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div>
            <h2>Show</h2>
            <ul class="grid">
            <li v-for="search in searchShowsDetails" :key="search.id">
                <div class="card">
                    <img :src="search.images.poster" alt="" style="width:100%">
                    <div class="container">
                        <h4>{{search.title}}</h4>
                        <div v-if="getIsinfavListShow(search)" class="like_button"> 
                            <button @click="changeFavShow(search)"><img src="@/assets/like_heart.png"></button>
                        </div>
                        <div v-if="!getIsinfavListShow(search)" class="unlike_button"> 
                            <button @click="changeFavShow(search)"><img src="@/assets/empty_heart.png"></button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        </div>
        
    </div>
</template>
<script>

export default {
    name : "Search",
    props :["searchShowsDetails","searchMoviesDetails","favlistMovies","favListShow"],
    methods : {
        changeFavMovie(movie){
            this.$emit("changeFavoriMovie",movie);
        },
        getIsinfavListMovies(movie){
            console.log(movie);
            if(this.favListMovies.includes(movie)){
                return true;
            }
            return false;
        },
        changeFavShow(show){
            this.$emit("changeFavoriShow",show);
        },
        getIsinfavListShow(show){
            if(this.favListShow.includes(show)){
                return true;
            }
            return false;
        }
    }
}
</script>
<style scoped>

.search{
    display: grid;
    grid-column: 1;
    grid-row: 2;
}
</style>