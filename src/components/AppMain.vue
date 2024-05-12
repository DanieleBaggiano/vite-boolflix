<script>
import { store } from "/src/store";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.css";
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
        },
        getFlag(img) {
            const flagMap = {
                'it': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png',
                'fr': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png',
                'en': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png',
                'ru': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png',
            }
            return flagMap[img] || '/src/assets/sfondo.png';
        },
        getFull(vote) {
            return Math.ceil(vote / 2);
        },
        getEmpty(vote) {
            let max = 5;
            let stars = Math.ceil(vote / 2);
            return max - stars;
        }
    }
}
</script>

<template>
    <div class="container">
        <div v-for="(movie) in store.movieList" :value="movie" class="card">
            <img :src="getPosterUrl(movie.poster_path)" alt="">
            <div class="title">
                <h2>{{ movie.title }}</h2>
                <h2>{{ movie.name }}</h2>
                <h3>{{ movie.original_title }}</h3>
                <h3>{{ movie.original_name }}</h3>
                <img class="flag" :src="getFlag(movie.original_language)" alt="">
                <span>{{ movie.original_language }}</span>

                <div class="stars">
                    <i v-for="star in getFull(movie.vote_average)" :key="star" class="fa-solid fa-star"></i>

                    <i v-for="star in getEmpty(movie.vote_average)" :key="star" class="fa-regular fa-star"></i>
                </div>
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
    background-color: rgb(67 67 67);
    padding: 50px;
    min-height: 100vh;

    .card {
        width: 200px;
        height: 400px;
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

            .flag {
                width: 60px;
                height: 30px;
            }
        }
    }
}
</style>