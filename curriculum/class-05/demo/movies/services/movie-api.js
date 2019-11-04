
const URL = 'https://www.omdbapi.com/?apikey=3db77742&';

export async function getMovies() {
    // get rid of the first character of the hash (#)
    let queryString = window.location.hash.slice(1);
    // build a url out of the url and querytstring
    //https://www.omdbapi.com/?apikey=3db77742&y=1940
    const url = `${URL}${queryString}`;

    // send that url along to the fetch
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
