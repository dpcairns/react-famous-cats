import Component from '../Component.js';
import Header from '../common/Header.js';
import SearchOptions from './SearchOptions.js';
import Paging from './Paging.js';
import MovieList from './MovieList.js';
import { getMovies } from '../services/movie-api.js';

class HomeApp extends Component {

    async onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const optionsSection = dom.querySelector('.options-section');
        const searchOptions = new SearchOptions();
        optionsSection.prepend(searchOptions.renderDOM());
        
        const listSection = dom.querySelector('.list-section');
        const paging = new Paging();
        listSection.appendChild(paging.renderDOM());

        const movieList = new MovieList({ movies: [] });
        listSection.appendChild(movieList.renderDOM());

        const response = await getMovies();
        const movies = response.Search;
        movieList.update({ movies: movies });
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
                
                <main>
                    <section class="options-section">
                        <!-- options go here -->
                    </section>
                        
                    <section class="list-section">
                        <!-- paging goes here -->
 

                        <!-- quote list goes here -->        

                    </section>
                </main>
            </div>
        `;
    }
}

export default HomeApp;