import Component from '../Component.js';

class SearchOptions extends Component {

    renderHTML() {
        return /*html*/`
            <div>
                <form class="search">
                    <p>Search For:</p>
                    <input name="search">
                    <button>🔍</button>
                </form>

                <fieldset class="type">
                    <label>
                        <input type="radio" name="type" value="movies" checked>
                        Movies
                    </label>
                    <label>
                        <input type="radio" name="type" value="series">
                        Series
                    </label>
                    <label>
                        <input type="radio" name="type" value="episode">
                        Episode
                    </label>
                </fieldset>
            </div>
        `;
    }
}

export default SearchOptions;