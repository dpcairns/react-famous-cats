
const URL = 'https://www.omdbapi.com/?apikey=3db77742&s=harry+potter';

export async function getMovies() {  
    const response = await fetch(URL);
    return await response.json();
}
