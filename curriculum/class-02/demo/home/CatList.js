import Component from '../Component.js';
import CatItem from './CatItem.js';

class CatList extends Component {

    renderHTML() {
        return /*html*/`
            <ul class="cats"></ul>
        `;
    }

    onRender(dom) {
        const cats = this.props.cats;

        cats.forEach(cat => {
            const props = { cat: cat };
            const catItem = new CatItem(props);
            const catItemDOM = catItem.renderDOM();
            dom.appendChild(catItemDOM);
        });
    }
}

export default CatList;