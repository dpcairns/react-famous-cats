import Component from '../Component.js';
import CatType from './CatType.js';

class CatTypeList extends Component {

    onRender(list) {
        const types = this.props.types;
        const onUpdate = this.props.onUpdate;
        const onRemove = this.props.onRemove;

        // With forEach:
        todos.forEach(todo => {
            const todoItem = new TodoItem({ todo, onUpdate, onRemove });
            list.appendChild(todoItem.renderDOM());
        });

        // Consider use of functional array methods:
        // types
        //     .map(type => new CatType({ type, onUpdate, onRemove }))
        //     .map(catType => catType.renderDOM())
        //     .forEach(dom => list.appendChild(dom));
    }
    renderHTML() {

        return /*html*/`
            <ul class="cat-types"></ul>
        `;
    }
}

export default CatTypeList;
