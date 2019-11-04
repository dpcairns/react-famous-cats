import Component from '../Component.js';

class ActorsList extends Component {
    onRender(el) {
        window.location.hash = 's=harry&page=4&type=series';
    }

    renderHTML() {
        `<ul class="actors-list"></ul>`;
    }
}

export default ActorsList;