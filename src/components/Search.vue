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
                    </div>
                    <input type="button" value="Add to your favorite">
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
                </div>
                <input type="button" value="Add to your favorite">
                </div>
            </li>
        </ul>
        </div>
        
    </div>
</template>
<script>

export default {
    name : "Search",
    props :["searchShowsDetails","searchMoviesDetails"]
}
</script>
<style scoped>

.search{
    display: grid;
    grid-column: 1;
    grid-row: 2;
}
</style>