<script setup>
import { userFilm } from '@/js/fimls.js'

const film = userFilm();
const props = defineProps({
    pelis: Object
})

</script>

<template>
    <div class="container">
        <h1>Pelis</h1>
        <div class="info-peli">
            <div class="card">
                <!-- <img :src="peli.Poster" style="width: 10rem; height: 15rem;" /> -->
                <!-- <p><b>Title: </b>{{ peli.Title }}</p>
                <span><b>Year: </b>{{ peli.Year }}</span>
                <span><b>Type: </b>{{ peli.Type }}</span> -->
            </div>
        </div>
    </div>
</template>