<template>
    <div class="favorites">
        <div>
             <h1> Your favorites movies</h1>
            <ul class="grid">
                <li v-for="movie in favListMovies" :key="movie.id">
                        <div class="card">
                       <router-link :to="'movie/'+movie.id"><img :src="movie.poster" alt="Logo film" style="width:100%"></router-link> 
                        <div class="container">
                            <h4>{{movie.title}}</h4>
                            <button @click="changeFavMovie(movie)"><img src="@/assets/like_heart.png"></button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div>
            <h1>Your favorites shows</h1>
            <ul class="grid">
                <li v-for="show in favListShow" :key="show.id">
                    <div class="card">
                        <router-link :to="'serie/'+show.id"><img :src="show.images.poster" alt="" style="width:100%"></router-link>
                        <div class="container">
                            <h4>{{show.title}}</h4>
                            <button @click="changeFavShow(show)"><img src="@/assets/like_heart.png"></button>
                        </div>
                    </div> 
                </li>
            </ul>
        </div>
        
    </div>
</template>
<script>

export default {
    name : "Favorites",
    props :["favListShow","favListMovies"],
    methods:{
        changeFavMovie : function(movie){
            this.$emit("changeFavoritesMovie",movie);
        },
        changeFavShow : function(show){
            this.$emit("changeFavoritesShow",show);
        }
    }
}
</script>
<style scoped>

.favorites{
    display: grid;
    grid-column: 1;
    grid-row: 2;
}

.card{
    margin-top: 2%;
}
</style>