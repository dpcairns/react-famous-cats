import Component from '../Component.js';
import Header from '../common/Header.js';

class HomeApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
                
                <main>
                    <p>
                        This will be the home page.
                        <a href="explore.html">Click here to explore OMDb</a>
                    </p>
                </main>
            </div>
        `;
    }
}

export default HomeApp;