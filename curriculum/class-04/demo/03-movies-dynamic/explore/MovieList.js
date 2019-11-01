import Component from '../Component.js';
import MovieItem from './MovieItem.js';

class MovieList extends Component {

    onRender(dom) {
        const movies = this.props.movies;

        movies.forEach(movie => {
            const props = { movie: movie };
            const movieItem = new MovieItem(props);
            const movieItemDOM = movieItem.renderDOM();
            dom.appendChild(movieItemDOM);
        });

    }

    renderHTML() {

        return /*html*/`
            <ul class="movies"></ul>
        `;
    }
}

export default MovieList;
