<template>
    <div class="show">
        <h1>Shows to Discover</h1>
        <br>
        <li v-for="show in shows" :key="show.id">
            
            <img v-bind:src="show.images.poster"/>
            <p class="title"> Title : {{show.title}}</p>
            <p> Description : {{show.description}}</p>
            <p> Seasons : {{show.seasons}}</p>
            <p> Network : {{show.network}}</p>
        </li>
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