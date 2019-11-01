import Component from '../Component.js';

class MovieItem extends Component {
    renderHTML() {
        const movie = this.props.movie;
        let poster = movie.Poster;
        if (poster === 'N/A') {
            poster = 'assets/placeholder.png';
        }

        return /*html*/`
            <li class="movie-item">
                <h2>
                    <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank">
                        ${movie.Title}
                    </a>
                </h2>
                <img 
                    src="${poster}"
                    alt="${movie.Title} movie poster"
                >
                <time>${movie.Year}</time>
            </li>
        `;
    }
}

export default MovieItem;