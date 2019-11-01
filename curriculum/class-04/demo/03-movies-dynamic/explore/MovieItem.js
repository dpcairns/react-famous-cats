import Component from '../Component.js';

class MovieItem extends Component {
    renderHTML() {
        const movie = this.props.movie;

        console.log('MOOOVIE', movie);

        return /*html*/`
            <li class="movie-item">
                <h2>
                    <a href=${movie.pokedex} target="_blank">
                        ${movie.Title}
                    </a>
                </h2>
                <img 
                    src="${movie.url_image}"
                    alt="${movie.ability_1} movie poster"
                >
                <time>${movie.Year}</time>
            </li>
        `;
    }
}

export default MovieItem;