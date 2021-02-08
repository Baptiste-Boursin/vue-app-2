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
                        <div v-if="getIsinfavListShow(show)" class="like_button"> 
                        <button @click="changeFav(show)"><img src="@/assets/like_heart.png"></button>
                    </div>
                     <div v-if="!getIsinfavListShow(show)" class="unlike_button"> 
                        <button @click="changeFav(show)"><img src="@/assets/empty_heart.png"></button>
                    </div>
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
    props :["shows","favListShow"],
    data (){
        return {
            
        }   
    },
    methods :{
        changeFav(show){
            this.$emit("changeFavori",show);
        },
        getIsinfavListShow(show){
            if(this.favListShow.includes(show)){
                return true;
            }
            return false;
        }
    }
}
</script>
<style scoped>
</style>