<template>
  <div>
    <NavSite />
    <MoviePost id="id" />
  </div>
</template>

<script>
// @ is an alias to /src
import MoviePost from "@/components/MoviePost.vue";
import NavSite from "@/components/NavSite.vue";

export default {
  name: "ResultMovie",
  components: {
    MoviePost,
    NavSite,
  },
  computed: {
    id: function () {
      return this.$route.params.id;
    },
  },
};
</script>