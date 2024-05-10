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
}
</script>

<template>
  
  <Searchbar />
  <AppMain />
</template>

<style scoped lang="scss">

</style>
