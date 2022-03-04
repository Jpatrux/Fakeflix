<template>
  <div class="post">
    <img
      :src="movie.poster_path | posterURL"
      v-if="movie.poster_path != null"
    />
    <img
      src="https://webboy.fr/wp-content/uploads/2022/03/image-non-disponible.png"
      v-else
    />
    <h2>{{ movie.title }}</h2>
    <i>{{ movie.original_title }} ({{ movie.release_date }})</i>
    <p>{{ movie.overview }}</p>
    <h4>Informations</h4>
    <ul>
      <li>Popularité : {{ movie.popularity }}</li>
      <li>Note : {{ movie.vote_average }}/10</li>
      <li>Nombre de votes : {{ movie.vote_count }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MoviePost",
  props: [],
  data() {
    return {
      movie: [],
      trailer: [],
    };
  },
  created: function () {
    this.pickMovie();
    // this.$store.dispatch("pickMovie", { id: this.$route.params.id });
    //this.viewTrailer();
  },
  filters: {
    posterURL: function (value) {
      return "https://image.tmdb.org/t/p/w200/" + value;
    },
  },
  computed: {
    searchMovie: function () {
      //TODO : essayer les mapState
      return this.$store.state.searchMovie;
    },
  },
  methods: {
    pickMovie: function () {
      fetch(
        `https://api.themoviedb.org/3/movie/` +
          this.$route.params.id +
          `?api_key=b6f9c908dce72ac8331957b8388cdf00&language=fr`
      )
        .then((response) => response.json())
        .then((data) => (this.movie = data));
    },
  },
  /*viewTrailer: function () {
    fetch(
      `https://api.themoviedb.org/3/movie/` +
        this.$route.params.id +
        `/videos?api_key=b6f9c908dce72ac8331957b8388cdf00&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => (this.trailer = data));
  },*/
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background-color: black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.post {
  text-align: left;
  color: white;
}

img {
  float: left;
  width: 200px;
  display: block;
  padding-right: 20px;
}
</style>