<template>
  <header>
    <div class="head">
      <h1>FAKEFLIX</h1>
    </div>

    <nav>
      <div class="router">
        <router-link to="/">Accueil</router-link> |
        <router-link to="/favoris">Favoris</router-link> |
        <router-link to="/watchlist">Films à voir</router-link>
      </div>
      <div>
        <input
          type="search"
          placeholder="Rechercher un film"
          id="search"
          @keyup.enter="submit"
        />
        <button @click="submit">&#128269;</button>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NavSite",
  props: {},
  data() {
    return {
      movies: [],
      searchValue: "",
    };
  },
  computed: {
    ...mapState({}),
  },

  methods: {
    submit: function () {
      this.$store.commit(
        "setSearchMovie",
        document.getElementById("search").value
      );
      this.$store.dispatch("submit");
      // fetch(
      //   `https://api.themoviedb.org/3/search/movie?api_key=b6f9c908dce72ac8331957b8388cdf00&query=` +
      //     this.setSearchMovie +
      //     "&language=fr"
      // )
      //   .then((response) => response.json())
      //   .then((data) => {
      //     this.movies = data.results;
      //   });
    },
    pickMovie: function () {
      fetch(
        `https://api.themoviedb.org/3/movie/` +
          this.movie.id +
          `?api_key=b6f9c908dce72ac8331957b8388cdf00`
      )
        .then((response) => response.json())
        .then((data) => (this.movies = data));
    },
  },
  filters: {
    posterURL: function (value) {
      return "https://image.tmdb.org/t/p/w200/" + value;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: red;
  font-size: 5.5rem;
  font-weight: 300;
  height: 200px;
  text-align: center;
}
nav {
  background-color: grey;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 20px;
}
img {
  width: 200px;
}
ul {
  list-style: none;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
li {
  width: 200px;
  padding: auto;
  margin-bottom: 25px;
}
a {
  text-decoration: none;
  color: white;
}
</style>
