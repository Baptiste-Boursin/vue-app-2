<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="bar">
                <input type="text" class="search" v-model="searchString" placeholder="Rechercher un film ou une série">
                <input type="button"  class="displaySearch" value="Search" v-on:click="searchResult">
                <input type="button" class="displayMovies" value="Movies" v-on:click="setDataForMovies">
                <input type="button" class="displayShows"  value="Shows" v-on:click="listType = 'shows'">
    </div>

    <li v-if="listType == 'movies'">
      <Movie :moviesDetails="moviesDetails"></Movie>
    </li>

    <li v-if="listType == 'shows'">
      <Show :shows="shows"></Show>
    </li>

    <li v-if="listType == 'search'">
      <Search :searchList="searchList"></Search>
    </li>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Movie from '@/components/Movie.vue'
import Show from '@/components/Show.vue'
import Search from '@/components/Search.vue'
import axios from 'axios';



export default {
  name: 'Home',
  components: {
    HelloWorld,
    Movie,
    Show,
    Search
  }, 
  data (){
    return {
      res:"",
      searchString: "",
      listType:'home',
      moviesDetails : [],
      movies : [],
      shows : [],
      searchList :[]
    }
  },
  methods:{
    searchResult : function(){
      let searchString = this.searchString,queryParams;
      if(!searchString){
          return null;
      }
      queryParams =searchString.trim().toLowerCase();

      axios
      .get('https://api.betaseries.com/search/all',{
          params :{
              query : queryParams,
              key : 'fcbaabfce695'
          }
      })
      .then(res => {
          this.searchList = res.data
      })
      this.getMovieDetails();
      return this.listType='search' 
    },
    getMovieDetails(){
      this.movies.forEach(movie => {
        axios
        .get('https://api.betaseries.com/movies/movie',{
            params :{
                id : movie.id,
                key : 'fcbaabfce695'
            }
        })
        .then(res=>{
            this.moviesDetails.push(res.data.movie)
        })
      });
    },setDataForMovies : function(){
        this.getMovieDetails();
        this.listType = 'movies';
    }
  },
  beforeMount(){
      axios
      .get('https://api.betaseries.com/movies/discover',{
          params :{
              type:'popular',
              key:'fcbaabfce695'
          }
      })
      .then(res => {
          this.movies = res.data.movies
      })
      
      axios
      .get('https://api.betaseries.com/shows/discover',{
          params:{
              key: 'fcbaabfce695'
          }
      })
      .then(res => {
          this.shows = res.data.shows
      })
  }
}
</script>
