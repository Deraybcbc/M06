import {
    createApp,
    ref,
    onMounted,
    computed,
    reactive,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

import * as coms from './comunicationManager.js'

createApp({
    setup() {

        const divActivo = ref("pantallaInicio")

        const operacion = reactive({ data: {} })
        const resultado = ref()
        const loading = ref(false);

        function cambiarPantalla(newDiv) {
            divActivo.value = newDiv
        }

        async function resultadoOperacion() {
            const ops = document.querySelector('#operaciones').value;
            operacion.data.op = ops;

            loading.value = true;
            divActivo.value = 'resultados'


            try{
                resultado.value = await coms.getResultados(operacion.data);
                console.log("Recibido Front: ", resultado.value);
            }catch(error){
                console.log(error);
            }finally{
                loading.value = false;
            }

        }

        return {
            divActivo,
            operacion,
            loading,
            resultado,


            cambiarPantalla,
            resultadoOperacion
        }
    }

}).mount('#app')
