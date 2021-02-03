<template>
  <div class="home">
    <div class="bar">
      <input type="text" class="search" v-model="searchString" placeholder="Rechercher un film ou une série">
      <input type="button"  class="displaySearch" value="Search" v-on:click="searchResult">
      <input type="button" class="displayMovies" value="Movies" v-on:click="setDataForMovies">
      <input type="button" class="displayShows"  value="Shows" v-on:click="listType = 'shows'">
      <input type="button" class="displayFavList"  value="Favorites" v-on:click="listType = 'favorites'">
    </div>

    <li v-if="listType == 'movies'">
      <Movie :moviesDetails="moviesDetails"></Movie>
    </li>

    <li v-if="listType == 'shows'">
      <Show :shows="shows" :favList="favList" @changeFavori="changeFavori" ></Show>
    </li>

    <li v-if="listType == 'search'">
      <Search :searchShowsDetails="searchShowsDetails" :searchMoviesDetails="searchMoviesDetails"></Search>
    </li>

    <li v-if="listType == 'favorites'">
      <Favorites :favList="favList"></Favorites>
    </li>

  </div>
</template>

<script>
// @ is an alias to /src
import Movie from '@/components/Movie.vue'
import Show from '@/components/Show.vue'
import Search from '@/components/Search.vue'
import Favorites from '@/components/Favorites.vue'
import axios from 'axios';


export default {
  name: 'Home',
  components: {
    Movie,
    Show,
    Search,
    Favorites
  }, 
  data (){
    return {
      res:"",
      searchString: "",
      listType:'home',
      moviesDetails : [],
      movies : [],
      shows : [],
      searchList :[],
      searchMoviesDetails :[],
      searchShowsDetails:[],
      favList : []
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
      this.getSearchMoviesDetails();
      this.getSearchShowsDetails();
      return this.listType='search' 
    },
    getSearchShowsDetails(){
       this.searchList.shows.forEach(show => {
        axios
        .get('https://api.betaseries.com/shows/display',{
            params :{
                id : show.id,
                key : 'fcbaabfce695'
            }
        })
        .then(res=>{
            this.searchShowsDetails.push(res.data.show)
        })
      });
    },
    getSearchMoviesDetails(){
      this.searchList.movies.forEach(movie => {
        axios
        .get('https://api.betaseries.com/movies/movie',{
            params :{
                id : movie.id,
                key : 'fcbaabfce695'
            }
        })
        .then(res=>{
            this.searchMoviesDetails.push(res.data.movie)
        })
      });
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
    },
    changeFavori(newShow){
      if(this.favList.includes(newShow)){
        this.favList.pop(newShow);
      }else{
        this.favList.push(newShow);
      }
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
