<template>
  <div>
    <input type="text" placeholder="user" />
    <input type="text" placeholder="password" />
    <button @click="token">Connexion</button>
  </div>
</template>

<script>
export default {
  name: "LogSite",
  components: {},
};

/*fetch(https://api.themoviedb.org/3/authentication/token/new?api_key=b6f9c908dce72ac8331957b8388cdf00)
.then((response) => response.json())
.then((data) => {})*/
</script>

<style scoped>
</style>
