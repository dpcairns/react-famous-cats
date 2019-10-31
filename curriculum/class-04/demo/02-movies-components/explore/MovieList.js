import Component from '../Component.js';
import MovieItem from './MovieItem.js';

class MovieList extends Component {
    
    onRender(dom) {
        const movieItem = new MovieItem();
        dom.prepend(movieItem.renderDOM());
    }

    renderHTML() {
        
        return /*html*/`
            <ul class="movies">
                <li class="movie-item"></li>
                <li class="movie-item"></li>
                <li class="movie-item"></li>
                <li class="movie-item"></li>
                <li class="movie-item"></li>
                <li class="movie-item"></li>
                <li class="movie-item"></li>
                <li class="movie-item"></li>
                <li class="movie-item"></li>
                <li class="movie-item"></li>
                <li class="movie-item"></li>
                <li class="movie-item"></li>
                <li class="movie-item"></li>
                <li class="movie-item"></li>
                <li class="movie-item"></li>
                <li class="movie-item"></li>
                <li class="movie-item"></li>
                <li class="movie-item"></li>
            </ul>
        `;
    }
}

export default MovieList;
