<template>
    <div class="show">
        <h1>Shows to Discover</h1>
        <br>
        <ul class="grid">
            <li v-for="show in shows" :key="show.id" >
                <div class="card">
                    <a><img :src="show.images.poster" alt="" style="width:100%"></a>
                    <div class="container">
                        <h4>{{show.title}}</h4>
                        <p>{{show.network}}</p>
                    </div>
                    <div v-if="getIsinFavList(show)"> 
                        <button @click="changeFav(show)"><img src="@/assets/like_heart.png"></button>
                    </div>
                     <div v-if="!getIsinFavList(show)"> 
                        <button @click="changeFav(show)"><img src="@/assets/empty_heart.png"></button>
                    </div>

                </div>
            </li>
        </ul>
        <br> 
    </div>
</template>
<script>

export default {
    name : "Show",
    props :["shows","favList"],
    data (){
        return {
            showDetails :[]
        }
        
    },
    methods :{
        changeFav(show){
            this.$emit("changeFavori",show);
        },
        getIsinFavList(show){
            if(this.favList.includes(show)){
                return true;
            }
            return false;
        }
    }
}
</script>
<style scoped>
button{
    color: white;
    border: none;
    background-color: white;
}




</style>