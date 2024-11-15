export async function getResultados(json) {
    console.log("Recibido: ",json);
    
    try {

        const response = await fetch(`http://alvaro.daw.inspedralbes.cat/calculadora.php?op=${json.op}&a=${json.a}&b=${json.b}`)

        if(!response.ok){
            throw new Error(`HTTP ERROR ${response.status}`) 
        }

        const data = await response.json();
        console.log("Manager",data);

        return data;
    }catch(error){
        console.log(error);
        return error
    }
    
}