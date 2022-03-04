<template>
  <hooper :settings="hooperSettings">
    <slide v-for="poster of posters" :key="poster.id">
      <router-link :to="'/movie/' + poster.id">
        <img
          :src="poster.poster_path | posterURL"
          v-if="poster.poster_path != null"
        />
        <img
          src="https://webboy.fr/wp-content/uploads/2022/03/image-non-disponible.png"
          v-else
        />
      </router-link>
    </slide>
  </hooper>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "App",
  components: {
    Hooper,
    Slide,
  },

  data() {
    return {
      hooperSettings: {
        centerMode: true,
        vertical: true,
      },
    };
  },
};
</script>
