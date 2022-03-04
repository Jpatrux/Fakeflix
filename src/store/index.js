import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchMovie: "",
    movies: {},
    posters: {}
 
  },
  getters: {
  },
  mutations: {
    setSearchMovie: function(state, query){
      state.searchMovie = query
    },
    setSearchResults: function(state, query){
      state.movies = query
    },
    setCarouselMovies: function(state, query){
      state.posters = query
    }
  },
  actions: {
    submit: function () {
    
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=b6f9c908dce72ac8331957b8388cdf00&query=` +
          this.state.searchMovie +
          "&language=fr"
      )
        .then((response) => response.json())
        .then((data) => {
          this.commit("setSearchResults", data.results );
        });
    },
    // pickMovie: function (filmid) {
    //   console.log(filmid);
    //   fetch(
    //     `https://api.themoviedb.org/3/movie/` +
    //       filmid +
    //       `?api_key=b6f9c908dce72ac8331957b8388cdf00`
    //   )
    //     .then((response) => response.json())
    //     .then((data) => console.log(data));
    // },
    carousel: function () {
      fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=b6f9c908dce72ac8331957b8388cdf00&language=fr`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.commit("setCarouselMovies", data.results)
      })
    }
  }
  
})
