<template>
  <div class="watchlist">
    <NavSite />
    <p>Page Films à voir en cours de construction !</p>
  </div>
</template>

<script>
// @ is an alias to /src
import NavSite from "@/components/NavSite.vue";

export default {
  name: "WatchList",
  components: {
    NavSite,
  },
};
</script>
