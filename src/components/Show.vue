<template>
    <div class="show">
        <h1>Shows to Discover</h1>
        <br>
        <ul class="grid">
            <li v-for="show in shows" :key="show.id" >
                <!-- <img v-bind:src="show.images.poster"/>
                <p class="title"> Title : {{show.title}}</p>
                <p> Description : {{show.description}}</p>
                <p> Seasons : {{show.seasons}}</p>
                <p> Network : {{show.network}}</p> -->
                <div class="card">
                <img :src="show.images.poster" alt="Avatar" style="width:100%">
                <div class="container">
                    <h4>{{show.title}}</h4>
                    <p>{{show.network}}</p>
                </div>
                <input type="button" value="Add to your favorite">
                </div>
            </li>
        </ul>
        
        <br>
        
    </div>
</template>
<script>

export default {
    name : "Show",
    props :["shows"],
}
</script>
<style scoped>





</style>