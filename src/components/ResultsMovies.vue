<template>
  <div class="results">
    <ul>
      <li v-for="movie of movies" :key="movie.id">
        <router-link :to="'/movie/' + movie.id">
          <img
            :src="movie.poster_path | posterURL"
            v-if="movie.poster_path != null"
          />
          <img
            src="https://webboy.fr/wp-content/uploads/2022/03/image-non-disponible.png"
            v-else
          />
          {{ movie.title }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ResultsMovies",
  props: {},
  data() {
    return {};
  },

  computed: {
    ...mapState(["searchMovie", "movies"]),
    searchMovie: function () {
      //TODO : essayer les mapState
      return this.$store.state.searchMovie;
    },
  },
  methods: {},

  filters: {
    posterURL: function (value) {
      return "https://image.tmdb.org/t/p/w200/" + value;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
