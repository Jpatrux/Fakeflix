<template>
  <div class="about">
    <NavSite />
    <MoviePost />
    <p>Page Favoris en cours de construction !</p>
  </div>
</template>

<script>
// @ is an alias to /src
import NavSite from "@/components/NavSite.vue";
import MoviePost from "@/components/MoviePost.vue";

export default {
  name: "FavMovie",
  components: {
    NavSite,
    MoviePost,
  },
};
</script>
