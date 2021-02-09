<template>
    <div class="searchPage" v-if="searchMoviesDetails.length>0 && searchShowsDetails.length>0">
        <h1> Search Results</h1>
        <div>
            <h2>Movies</h2>
            <ul class="grid">
                <li v-for="movie in searchMoviesDetails" :key="movie.id">
                    <div class="card">
                        <router-link :to="'movie/'+movie.id"><img :src="movie.poster" alt="Logo film" style="width:100%"></router-link>
                        <div class="container">
                            <h4>{{movie.title}}</h4>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div>
            <h2>Shows</h2>
            <ul class="grid">
            <li v-for="search in searchShowsDetails" :key="search.id">
                <div class="card">
                    <router-link :to="'serie/'+search.id"><img :src="search.images.poster" alt="Logo of the show" style="width:100%"></router-link>
                    <div class="container">
                        <h4>{{search.title}}</h4>
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
    props :["searchShowsDetails","searchMoviesDetails"],
    
}
</script>
<style scoped>

.searchPage{
    display: grid;
    grid-column: 1;
    grid-row: 2;
}
</style>