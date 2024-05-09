<script>
import { store } from "./store";
import axios from "axios";
import Searchbar from './components/Searchbar.vue'
import AppMain from './components/AppMain.vue'

export default {
  components: {
    Searchbar,
    AppMain,
  },
  data() {
    return {
      store,
    }
  },
  // created() {
  //   axios
  //       .get("https://api.themoviedb.org/3/search/movie", {
  //         params: {
  //           api_key: this.store.apiKey,
  //           query: this.store.searchQuery,
  //         }
  //       })
  //      .then((resp) => {
  //       console.log(resp);
  //         this.store.movieList = resp.data.results;
  //      })
  // },
  // methods: {
  //   getMovie() {
  //     console.log("Get movie", this.store.selectedMovie);
  //     axios.get("https://api.themoviedb.org/3/search/movie", {
  //       params: {
  //         api_key: this.store.apiKey,
  //         query: "vita",
  //       }
  //     }).then((resp) => {
  //       this.store.movieList = resp.data.results;
  //     })
  //   }
  // },
}
</script>

<template>
  
  <Searchbar />
  <AppMain />
</template>

<style scoped lang="scss">

</style>
