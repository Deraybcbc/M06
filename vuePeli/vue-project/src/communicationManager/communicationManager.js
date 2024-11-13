export async function getPeliculas() {
    try {
        const response = await fetch('https://www.omdbapi.com/?s=Batman&apikey=535d16cc');
        const data = await response.json();
        return data.Search;
    }catch(error){
        return error
    }
}