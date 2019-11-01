import Component from '../Component.js';

class MovieItem extends Component {
    renderHTML() {
        const movie = this.props.movie;

        return /*html*/`
            <li class="movie-item">
                <h2>
                    <a href=${movie.pokedex}>
                        ${movie.ability_1}
                    </a>
                </h2>
                <img 
                    src="${movie.url_image}"
                    alt="${movie.pokebase} movie poster"
                >
                <time>${movie.shape}</time>
            </li>
        `;
    }
}

export default MovieItem;