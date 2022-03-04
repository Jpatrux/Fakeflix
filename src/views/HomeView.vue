<template>
  <div class="home">
    <NavSite />
    <ResultsMovies />
    <CarouselHooper />
  </div>
</template>

<script>
// @ is an alias to /src
import NavSite from "@/components/NavSite.vue";
import ResultsMovies from "@/components/ResultsMovies.vue";
import CarouselHooper from "@/components/CarouselHooper.vue";

export default {
  name: "HomeView",
  components: {
    NavSite,
    ResultsMovies,
    CarouselHooper,
  },
};
</script>

<style scoped>
</style>
