import Component from '../Component.js';

class MovieItem extends Component {
    renderHTML() {
        const { movie: {
            pokedex,
            ability_1,
            url_image,
            pokebase,
            shape,
        },
        } = this.props;

        return /*html*/`
            <li class="movie-item">
                <h2>
                    <a href=${pokedex}>
                        ${ability_1}
                    </a>
                </h2>
                <img 
                    src="${url_image}"
                    alt="${pokebase} movie poster"
                >
                <time>${shape}</time>
            </li>
        `;
    }
}

export default MovieItem;