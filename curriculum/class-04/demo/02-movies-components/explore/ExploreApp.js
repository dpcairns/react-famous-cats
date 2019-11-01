import Component from '../Component.js';
import Header from '../common/Header.js';
import SearchOptions from './SearchOptions.js';
import Paging from './Paging.js';
import MovieList from './MovieList.js';

class ExploreApp extends Component {

    onRender(el) {
        const header = new Header();
        el.prepend(header.renderDOM());

        const optionsSection = el.querySelector('.options-section');
        const searchOptions = new SearchOptions();
        optionsSection.prepend(searchOptions.renderDOM());

        const listSection = el.querySelector('.list-section');
        const paging = new Paging();
        listSection.appendChild(paging.renderDOM());

        const movieList = new MovieList();
        listSection.appendChild(movieList.renderDOM());

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

export default ExploreApp;