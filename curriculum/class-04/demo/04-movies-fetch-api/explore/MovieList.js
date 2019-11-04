import Component from '../Component.js';
import MovieItem from './MovieItem.js';

class MovieList extends Component {

    onRender(el) {
        const { movies } = this.props;

        movies.forEach(movie => {
            const movieItem = new MovieItem({ movie });
            const movieItemDOM = movieItem.renderDOM();
            el.appendChild(movieItemDOM);
        });

    }

    renderHTML() {

        return /*html*/`
            <ul class="movies">
            </ul>
        `;
    }
}

export default MovieList;
