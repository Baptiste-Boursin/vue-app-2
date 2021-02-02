<template>
    <div class="search">
        <h1> Search Results</h1>
        <h2>Movies</h2>
        <li v-for="search in searchList.movies" :key="search.id">
            <p>Title : {{search.title}}</p>
            <p>Production year : {{search.production_year}}</p>
        </li>
        <h2>Show</h2>
        <li v-for="search in searchList.shows" :key="search.id">
            <p> TItle : {{search.title}}</p>
            <p> Seasons : {{search.seasons}}</p>
        </li>        
    </div>
</template>
<script>

export default {
    name : "Search",
    props :["searchList"]
}
</script>
<style scoped>

</style>