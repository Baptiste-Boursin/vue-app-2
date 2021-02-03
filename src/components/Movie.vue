<template>
    <div class="movie">
        <h1> Last movies to discover</h1>
        <ul class="grid">
            <li v-for="movie in moviesDetails" :key="movie.id">
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
</template>
<script>

export default {
    name : "Movie",
    props :["moviesDetails"],
    
}
</script>
<style scoped>

</style>