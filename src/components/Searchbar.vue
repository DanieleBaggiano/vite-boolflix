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
            axios.get("https://api.themoviedb.org/3/search/movie", {
                params: {
                    api_key: this.store.apiKey,
                    query: this.store.searchQuery,
                }
            })
                .then((searchMovie) => {
                    return axios.get("https://api.themoviedb.org/3/search/tv", {
                        params: {
                            api_key: this.store.apiKey,
                            query: this.store.searchQuery,
                        }
                    })
                        .then((searchSerie) => {
                            this.store.movieList = [...searchMovie.data.results, ...searchSerie.data.results];
                            console.log(this.store.movieList);
                        });
                })
        }
    }
}
</script>

<template>
    <div class="searchbar">
        <h1>BOOLFLIX</h1>
        <div>
            <input v-model="store.searchQuery" type="text" placeholder="Cosa vuoi guardare?">
            <button @click="btnClick">Invio</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.searchbar {
    background-color: black;
    padding: 30px;
    display: flex;
    justify-content: space-between;

    h1 {
        color: red;
    }

    input {
        border: none;
        padding: 10px 20px;
    }

    button {
        border: none;
        padding: 10px 15px;
    }
}
</style>
