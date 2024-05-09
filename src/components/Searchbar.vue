<script>
import { store } from "/src/store";
import axios from "axios";
export default {
    data() {
        return {
            store,
        }
    },
    created() {
        this.btnClick();
    },
    methods: {
        btnClick() {
            console.log(store.searchQuery);
            axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: this.store.apiKey,
            query: this.store.searchQuery,
          }
        })
        .then((resp) => {
           this.store.movieList = resp.data.results;
           console.log(this.store.movieList);
        })
        },
        searchAPI() {
        //     axios
        // .get("https://api.themoviedb.org/3/search/movie", {
        //   params: {
        //     api_key: this.store.apiKey,
        //     query: this.store.searchQuery,
        //   }
        // })
        // .then((resp) => {
        //  console.log(resp);
        //    this.store.movieList = resp.data.results;
        //    console.log(this.store.movieList);
        // })
        }
    }
}
</script>

<template>
    <div>
        <input v-model="store.searchQuery" type="text" placeholder="Inserisci il nome di un film.">
        <button @click="btnClick">Invio</button>
    </div>
</template>

<style scoped lang="scss">

</style>
