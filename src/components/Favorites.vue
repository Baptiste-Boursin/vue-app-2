<template>
    <div class="favorites">
        <h1> Your favorites movies</h1>
        <div>
            <ul class="grid">
                <li v-for="movie in favListMovies" :key="movie.id">
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
            <h1>Your favorites shows</h1>
            <ul class="grid">
                <li v-for="show in favListShow" :key="show.id">
                    <div class="card">
                        <img :src="show.images.poster" alt="" style="width:100%">
                        <div class="container">
                            <h4>{{show.title}}</h4>
                        </div>
                         <!-- <input type="button" value="Add to your favorite"> -->
                    </div> 
                </li>
            </ul>
        </div>
        
    </div>
</template>
<script>

export default {
    name : "Favorites",
    props :["favListShow","favListMovies"]
}
</script>
<style scoped>

.favorites{
    display: grid;
    grid-column: 1;
    grid-row: 2;
}
</style>