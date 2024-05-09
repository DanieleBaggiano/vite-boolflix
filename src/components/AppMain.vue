<script>
import { store } from "/src/store";
import axios from "axios";
export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        getPosterUrl(img) {
            const baseUrl = "https://image.tmdb.org/t/p/w500";
            return img ? `${baseUrl}${img}` : '';
        }
    },
}
</script>

<template>
    <div class="container">
        <div v-for="movie in store.movieList" :value="movie" class="card">
            <img :src="getPosterUrl(movie.poster_path)" alt="">
            <div class="title">
                <h2>{{ movie.title}}</h2>
                <h3>{{ movie.original_title }}</h3>
                <span>{{ movie.original_language }}</span>
                <span>{{ movie.vote_average }}</span>
            </div>
            
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    .card {
       width: 100px;
       height: 200px;
       border: 1px solid black;
       overflow: hidden;
       position: relative;
   
       img {
       object-fit: cover;
       width: 100%;
       height: 100%;
       }
     
       &:hover .title {
         position: absolute;
         top: 0;
         color: white;
         background-color: rgba(0, 0, 0, .5);
         width: 100%;
         height: 100%;
       }
    }
}
</style>