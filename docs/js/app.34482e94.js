(function(t){function e(e){for(var i,r,l=e[0],n=e[1],c=e[2],u=0,v=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&v.push(a[r][0]),a[r]=0;for(i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);h&&h(e);while(v.length)v.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],i=!0,l=1;l<s.length;l++){var n=s[l];0!==a[n]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var i={},a={app:0},o=[];function r(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=i,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vue-app-2/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var h=n;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"05d6":function(t,e,s){},1102:function(t,e,s){"use strict";s("db66")},"110d":function(t,e){t.exports="data:image/png;base64,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"},"1f1e":function(t,e,s){},"38a5":function(t,e,s){"use strict";s("674d")},4347:function(t,e,s){"use strict";s("1f1e")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},o=[],r={},l=r,n=(s("034f"),s("2877")),c=Object(n["a"])(l,a,o,!1,null,null,null),h=c.exports,u=s("9483");Object(u["a"])("".concat("/vue-app-2/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var v=s("2106"),f=s.n(v),d=s("8c4f"),A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"navbar"},[s("div",{staticClass:"bar"},[s("input",{staticClass:"displayHome",attrs:{type:"button",value:"Home"},on:{click:function(e){t.listType="home"}}}),s("input",{staticClass:"displayMovies",attrs:{type:"button",value:"Films"},on:{click:t.setDataForMovies}}),s("input",{staticClass:"displayShows",attrs:{type:"button",value:"Series"},on:{click:t.setDataForShows}}),s("input",{staticClass:"displayFavList",attrs:{type:"button",value:"Favorites"},on:{click:function(e){t.listType="favorites"}}})]),s("div",{staticClass:"search-div"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchString,expression:"searchString"}],staticClass:"search",attrs:{type:"text",placeholder:"Rechercher un film ou une série"},domProps:{value:t.searchString},on:{input:function(e){e.target.composing||(t.searchString=e.target.value)}}}),s("input",{staticClass:"displaySearch",attrs:{type:"button",value:"Search"},on:{click:t.searchResult}})])]),"home"==t.listType?s("li",[s("h1",[t._v("Welcome")]),s("p",[t._v("You are on this website to search or discover films and series. ")]),s("p",[t._v("To discover 100 movies go "),s("a",{on:{click:t.setDataForMovies}},[t._v("here")])]),s("p",[t._v("To discover 100 series go "),s("a",{on:{click:t.setDataForShows}},[t._v("here")])]),s("p",[t._v("If you want to search a movie or a serie, make a search from the search bar")])]):t._e(),"movies"==t.listType?s("li",[s("Movie",{attrs:{moviesDetails:t.moviesDetails,favListMovies:t.favListMovies},on:{changeFavori:t.changeFavoritesMovies}})],1):t._e(),"shows"==t.listType?s("li",[s("Show",{attrs:{showsDetails:t.showsDetails,favListShow:t.favListShow},on:{changeFavori:t.changeFavoritesShows}})],1):t._e(),"search"==t.listType?s("li",[s("Search",{attrs:{searchShowsDetails:t.searchShowsDetails,searchMoviesDetails:t.searchMoviesDetails}})],1):t._e(),"favorites"==t.listType?s("li",[s("Favorites",{attrs:{favListShow:t.favListShow,favListMovies:t.favListMovies},on:{changeFavoritesMovie:t.changeFavoritesMovies,changeFavoritesShow:t.changeFavoritesShows}})],1):t._e()])},p=[],m=(s("4160"),s("caad"),s("c975"),s("a434"),s("2532"),s("498a"),s("159b"),s("96cf"),s("1da1")),g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"movie"},[i("h1",[t._v(" Last movies to discover")]),i("ul",{staticClass:"grid"},t._l(t.moviesDetails,(function(e){return i("li",{key:e.id},[i("div",{staticClass:"card"},[i("router-link",{attrs:{to:"movie/"+e.id}},[i("img",{staticStyle:{width:"100%"},attrs:{src:e.poster,alt:""}})]),i("div",{staticClass:"container"},[i("h4",[t._v(t._s(e.title))]),t.getIsinfavListMovies(e)?i("div",{staticClass:"like_button"},[i("button",{on:{click:function(s){return t.changeFav(e)}}},[i("img",{attrs:{src:s("110d")}})])]):t._e(),t.getIsinfavListMovies(e)?t._e():i("div",{staticClass:"unlike_button"},[i("button",{on:{click:function(s){return t.changeFav(e)}}},[i("img",{attrs:{src:s("5d98")}})])])])],1)])})),0)])},w=[],b={name:"Movie",props:["moviesDetails","favListMovies"],methods:{changeFav:function(t){this.$emit("changeFavori",t)},getIsinfavListMovies:function(t){return!!this.favListMovies.includes(t)}}},y=b,D=Object(n["a"])(y,g,w,!1,null,"40b5864f",null),S=D.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"show"},[i("h1",[t._v("Shows to Discover")]),i("br"),i("ul",{staticClass:"grid"},t._l(t.showsDetails,(function(e){return i("li",{key:e.id},[i("div",{staticClass:"card"},[i("router-link",{attrs:{to:"serie/"+e.id}},[i("img",{staticStyle:{width:"100%"},attrs:{src:e.images.poster,alt:""}})]),i("div",{staticClass:"container"},[i("h4",[t._v(t._s(e.title))]),i("p",[t._v(t._s(e.network))]),t.getIsinfavListShow(e)?i("div",{staticClass:"like_button"},[i("button",{on:{click:function(s){return t.changeFav(e)}}},[i("img",{attrs:{src:s("110d")}})])]):t._e(),t.getIsinfavListShow(e)?t._e():i("div",{staticClass:"unlike_button"},[i("button",{on:{click:function(s){return t.changeFav(e)}}},[i("img",{attrs:{src:s("5d98")}})])])])],1)])})),0),i("br")])},C=[],L={name:"Show",props:["showsDetails","favListShow"],data:function(){return{}},methods:{changeFav:function(t){this.$emit("changeFavori",t)},getIsinfavListShow:function(t){return!!this.favListShow.includes(t)}}},k=L,F=Object(n["a"])(k,M,C,!1,null,"61b1965d",null),R=F.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.searchMoviesDetails.length>0&&t.searchShowsDetails.length>0?s("div",{staticClass:"searchPage"},[s("h1",[t._v(" Search Results")]),s("div",[s("h2",[t._v("Movies")]),s("ul",{staticClass:"grid"},t._l(t.searchMoviesDetails,(function(e){return s("li",{key:e.id},[s("div",{staticClass:"card"},[s("router-link",{attrs:{to:"movie/"+e.id}},[s("img",{staticStyle:{width:"100%"},attrs:{src:e.poster,alt:"Logo film"}})]),s("div",{staticClass:"container"},[s("h4",[t._v(t._s(e.title))])])],1)])})),0)]),s("div",[s("h2",[t._v("Shows")]),s("ul",{staticClass:"grid"},t._l(t.searchShowsDetails,(function(e){return s("li",{key:e.id},[s("div",{staticClass:"card"},[s("router-link",{attrs:{to:"serie/"+e.id}},[s("img",{staticStyle:{width:"100%"},attrs:{src:e.images.poster,alt:"Logo of the show"}})]),s("div",{staticClass:"container"},[s("h4",[t._v(t._s(e.title))])])],1)])})),0)])]):t._e()},Y=[],x={name:"Search",props:["searchShowsDetails","searchMoviesDetails"]},O=x,B=(s("4347"),Object(n["a"])(O,_,Y,!1,null,"4f82a570",null)),E=B.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"favorites"},[i("div",[i("h1",[t._v(" Your favorites movies")]),i("ul",{staticClass:"grid"},t._l(t.favListMovies,(function(e){return i("li",{key:e.id},[i("div",{staticClass:"card"},[i("router-link",{attrs:{to:"movie/"+e.id}},[i("img",{staticStyle:{width:"100%"},attrs:{src:e.poster,alt:"Logo film"}})]),i("div",{staticClass:"container"},[i("h4",[t._v(t._s(e.title))]),i("button",{on:{click:function(s){return t.changeFavMovie(e)}}},[i("img",{attrs:{src:s("110d")}})])])],1)])})),0)]),i("div",[i("h1",[t._v("Your favorites shows")]),i("ul",{staticClass:"grid"},t._l(t.favListShow,(function(e){return i("li",{key:e.id},[i("div",{staticClass:"card"},[i("router-link",{attrs:{to:"serie/"+e.id}},[i("img",{staticStyle:{width:"100%"},attrs:{src:e.images.poster,alt:""}})]),i("div",{staticClass:"container"},[i("h4",[t._v(t._s(e.title))]),i("button",{on:{click:function(s){return t.changeFavShow(e)}}},[i("img",{attrs:{src:s("110d")}})])])],1)])})),0)])])},U=[],j={name:"Favorites",props:["favListShow","favListMovies"],methods:{changeFavMovie:function(t){this.$emit("changeFavoritesMovie",t)},changeFavShow:function(t){this.$emit("changeFavoritesShow",t)}}},V=j,H=(s("af1e"),Object(n["a"])(V,T,U,!1,null,"e82b539c",null)),I=H.exports,Q=s("bc3a"),W=s.n(Q),G={name:"Home",components:{Movie:S,Show:R,Search:E,Favorites:I},data:function(){return{res:"",searchString:"",listType:"home",moviesDetails:[],movies:[],showsDetails:[],shows:[],searchList:[],searchMoviesDetails:[],searchShowsDetails:[],favListShow:[],favListMovies:[]}},methods:{searchResult:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.searchList=[],t.searchMoviesDetails=[],t.searchShowsDetails=[],s=t.searchString,s){e.next=6;break}return e.abrupt("return",null);case 6:return e.next=8,W.a.get("https://api.betaseries.com/search/all",{params:{query:s.trim().toLowerCase(),key:"fcbaabfce695"}});case 8:return i=e.sent,t.searchList=i.data,e.next=12,t.getSearchMoviesDetails();case 12:return e.next=14,t.getSearchShowsDetails();case 14:t.listType="search";case 15:case"end":return e.stop()}}),e)})))()},getSearchShowsDetails:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.searchList.shows.forEach((function(e){W.a.get("https://api.betaseries.com/shows/display",{params:{id:e.id,key:"fcbaabfce695"}}).then((function(e){t.searchShowsDetails.push(e.data.show)}))}));case 2:case"end":return e.stop()}}),e)})))()},getSearchMoviesDetails:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.searchList.movies.forEach((function(e){W.a.get("https://api.betaseries.com/movies/movie",{params:{id:e.id,key:"fcbaabfce695"}}).then((function(e){t.searchMoviesDetails.push(e.data.movie)}))}));case 2:case"end":return e.stop()}}),e)})))()},getMovieDetails:function(){var t=this;this.movies.forEach((function(e){W.a.get("https://api.betaseries.com/movies/movie",{params:{id:e.id,key:"fcbaabfce695"}}).then((function(e){t.moviesDetails.push(e.data.movie)}))}))},setDataForMovies:function(){0==this.moviesDetails.length&&this.getMovieDetails(),this.listType="movies"},setDataForShows:function(){console.log(this.showsDetails.length),0==this.showsDetails.length&&this.getShowsDetails(),this.listType="shows"},getShowsDetails:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.shows.forEach((function(e){return W.a.get("https://api.betaseries.com/shows/display",{params:{id:e.id,key:"fcbaabfce695"}}).then((function(e){t.showsDetails.push(e.data.show)}))}));case 2:case"end":return e.stop()}}),e)})))()},changeFavoritesShows:function(t){if(this.favListShow.includes(t)){var e=this.favListShow.indexOf(t);e>-1&&this.favListShow.splice(e,1)}else this.favListShow.push(t)},changeFavoritesMovies:function(t){if(this.favListMovies.includes(t)){var e=this.favListMovies.indexOf(t);e>-1&&this.favListMovies.splice(e,1)}else this.favListMovies.push(t)},changeComponents:function(){return console.log(this.$route.query.tab),"shows"==this.$route.query$.tab&&(this.listType="shows"),!0}},beforeMount:function(){var t=this;W.a.get("https://api.betaseries.com/movies/discover",{params:{type:"popular",key:"fcbaabfce695"}}).then((function(e){t.movies=e.data.movies})).catch((function(t){alert("Erreur de chargement des données.")})),W.a.get("https://api.betaseries.com/shows/discover",{params:{key:"fcbaabfce695"}}).then((function(e){t.shows=e.data.shows})).catch((function(t){alert("Erreur de chargement des données.")}))}},P=G,Z=(s("38a5"),Object(n["a"])(P,A,p,!1,null,"2c319f65",null)),J=Z.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{attrs:{id:"nav"}},[s("router-link",{attrs:{to:"/"}},[t._v(" Back to home")])],1),s("div",[s("h1",[t._v(t._s(t.movieDetail.title))]),s("img",{staticStyle:{width:"20%"},attrs:{src:t.movieDetail.poster,alt:"logo film"}}),s("p",[t._v("Production year : "+t._s(t.movieDetail.production_year))]),s("p",[t._v("Duration : "+t._s(t.movieDetail.length)+" secondes")])]),s("div",[s("h2",[t._v("Synopsis")]),s("p",[t._v(t._s(t.movieDetail.synopsis))])]),s("div",{staticClass:"genre"},[s("h2",[t._v("Genres")]),t._l(t.movieDetail.genres,(function(e){return s("li",{key:e},[s("p",[t._v(t._s(e))])])}))],2),s("div",{staticClass:"platforms"},[s("h2",[t._v("Where can you watch it")]),t._l(t.movieDetail.platform_links,(function(e){return s("li",{key:e},[s("p",[t._v(t._s(e.platform))]),s("a",{attrs:{href:e.link}},[t._v("Link to watch this movie on "+t._s(e.platform))])])}))],2)])},N=[],K={data:function(){return{movieDetail:{}}},beforeMount:function(){var t=this;W.a.get("https://api.betaseries.com/movies/movie",{params:{id:this.$route.params.id,key:"fcbaabfce695"}}).then((function(e){t.movieDetail=e.data.movie}))}},q=K,z=(s("1102"),Object(n["a"])(q,X,N,!1,null,"6df9d9ca",null)),$=z.exports,tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail"},[s("div",{attrs:{id:"nav"}},[s("router-link",{attrs:{to:"/?tab=shows"}},[t._v("Back to home")])],1),s("div",[s("h1",[t._v(t._s(t.showDetail.title))]),s("img",{staticStyle:{width:"20%"},attrs:{src:t.showDetail.images.poster,alt:"Show poster"}}),s("p",[t._v("Year of creation : "+t._s(t.showDetail.creation))])]),s("div",{staticClass:"description"},[s("h2",[t._v("Description")]),s("p",[t._v(t._s(t.showDetail.description))])]),s("div",{staticClass:"genre"},[s("h2",[t._v("Genres")]),t._l(t.showDetail.genres,(function(e){return s("li",{key:e},[s("p",[t._v(t._s(e))])])}))],2),s("div",{staticClass:"seasons_details"},[s("h2",[t._v("Seasons Details")]),s("p",[t._v(" Total : "+t._s(t.showDetail.seasons)+" ")]),t._l(t.showDetail.seasons_details,(function(e){return s("li",{key:e},[s("p",[t._v("Season "+t._s(e.number))]),s("p",[t._v("Episodes : "+t._s(e.episodes))])])}))],2),s("div",{staticClass:"platforms"},[s("h2",[t._v("Where can you watch it")]),s("p",[t._v(t._s(t.showDetail.platforms.svod.name))]),s("img",{staticStyle:{width:"10%"},attrs:{src:t.showDetail.platforms.svod.logo,alt:"logo platform"}}),s("p",[s("a",{attrs:{href:t.showDetail.platforms.svod.link_url}},[t._v("Link to see it on "+t._s(t.showDetail.platforms.svod.name))])])])])},et=[],st={data:function(){return{showDetail:{}}},beforeMount:function(){var t=this;W.a.get("https://api.betaseries.com/shows/display",{params:{id:this.$route.params.id,key:"fcbaabfce695"}}).then((function(e){t.showDetail=e.data.show}))}},it=st,at=Object(n["a"])(it,tt,et,!1,null,"78a51279",null),ot=at.exports;i["a"].use(d["a"]),i["a"].use(f.a);var rt=[{path:"/",name:"Home",component:J},{path:"/movie/:id",name:"MovieDetail",component:$},{path:"/serie/:id",name:"ShowDetail",component:ot}],lt=new d["a"]({routes:rt}),nt=lt;i["a"].use(f.a,W.a),i["a"].config.productionTip=!1,new i["a"]({router:nt,render:function(t){return t(h)}}).$mount("#app")},"5d98":function(t,e){t.exports="data:image/png;base64,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"},"674d":function(t,e,s){},"85ec":function(t,e,s){},af1e:function(t,e,s){"use strict";s("05d6")},db66:function(t,e,s){}});
//# sourceMappingURL=app.34482e94.js.map