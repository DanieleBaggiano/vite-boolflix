import { reactive } from "vue";

export const store = reactive({
    apiKey: "d2bfc21acba5cd2879ebbb4ba487cdda",
    searchQuery: "",
    movieList: [],
    tvList: [],
    ArrFlags: [
        {
            flagName: "it",
            flagImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png",
        },
        {
            flagName: "fr",
            flagImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png",
        },
        {
            flagName: "en-US",
            flagImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png",
        },
        {
            flagName: "zh",
            flagImg: "https://www.officine-vimercati.it/imgs/1109/Bandiera_ZH.jpeg?s=large",
        },
        {
            flagName: "ru",
            flagImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png",
        },
    ]
});