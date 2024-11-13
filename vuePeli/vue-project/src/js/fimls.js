import { onMounted, reactive, ref } from 'vue';
import * as coms from '@/communicationManager/communicationManager.js'

export function userFilm() {

    const filmsApi = reactive({ data: [] });

    // Función para obtener las películas desde el manager de comunicación
    onMounted(async () => {
        filmsApi.data = await coms.getPeliculas();  // Suponiendo que coms.getPeliculas() devuelve un array de películas
    });

    return {
        filmsApi
    };
}

