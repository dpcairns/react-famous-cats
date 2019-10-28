import cats from '../data/cats.js';
import htmlToDOM from '../util/html-to-DOM.js';
import renderCatItem from './render-cat-item.js';

const list = document.querySelector('.cats');
const catTypeFilter = document.querySelector('.cat-type-filter');

catTypeFilter.addEventListener('change', () => {
    const filter = catTypeFilter.value;
    let filteredCats = null;

    if (!filter) {
        filteredCats = cats;
    }
    else {
        filteredCats = cats.filter(cat => {
            return cat.type === filter;
        });
    }

    render(filteredCats);
});

// kick off initial render on load with all cats
render(cats);

// put render functionality into function as
// we want to call repetitively when list is filtered
function render(catsToRender) {
    // remove any existing list items
    while (list.lastElementChild) {
        list.lastElementChild.remove();
    }

    // render new list items
    catsToRender.forEach(cat => {
        const html = renderCatItem(cat);
        const dom = htmlToDOM(html);
        list.appendChild(dom);
    });
}