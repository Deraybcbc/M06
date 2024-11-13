<script setup>
import { userFilm } from '@/js/fimls.js'
import PeliCard from '@/components/FilmComponent.vue'

const film = userFilm();

</script>

<template>
    <div class="container">
        <div class="card">
            <PeliCard v-for="peli in film.filmsApi.data" :pelis="peli" :key="peli.imdbID"></PeliCard>
        </div>
    </div>
</template>

<style scoped></style>