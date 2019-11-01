
const URL = 'https://www.omdbapi.com/?apikey=3db77742&';

export async function getMovies() {  
    let queryString = window.location.hash.slice(1);
    const url = `${URL}${queryString}`;

    const response = await fetch(url);
    const data = await response.json();

    // this api fails if no search :(
    if (data.Response === 'False') {
        return {
            Search: [],
            totalResults: 0
        };
    }

    return data;
}
