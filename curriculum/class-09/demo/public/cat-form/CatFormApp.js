import Component from '../Component.js';
import Header from '../common/Header.js';
import CatForm from './CatForm.js';
import { getTypes } from '../services/cat-api.js';

class CatFormApp extends Component {

    async onRender(dom) {
        const header = new Header({ title: 'Add a Cat' });
        dom.prepend(header.renderDOM());

        const main = dom.querySelector('main');

        const types = await getTypes();
        const catForm = new CatForm({ types });
        main.appendChild(catForm.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
                <main>
                    
                </main>
            </div>
        `;
    }
}

export default CatFormApp;