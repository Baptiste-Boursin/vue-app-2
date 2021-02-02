<template>
    <div class="movie">
        <h1> Last movies to discover</h1>
        <li v-for="movie in moviesDetails" :key="movie.id">
            <img v-bind:src="movie.poster"/> 
            <p> Title : {{movie.title}}</p>
            <p> Production year : {{movie.production_year}}</p>
            <p> Synopsis : {{movie.synopsis}}</p>
        </li>
        
    </div>
</template>
<script>

export default {
    name : "Movie",
    props :["moviesDetails"],
    
}
</script>
<style scoped>

</style>