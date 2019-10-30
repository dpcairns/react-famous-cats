import cats from '../data/cats.js';
import htmlToDOM from '../util/html-to-DOM.js';
import generateCatItemHtmlString from './render-cat-item.js';

const list = document.querySelector('.cats');
const catTypeFilter = document.querySelector('.cat-type-filter');


catTypeFilter.addEventListener('change', () => {

    const filterString = catTypeFilter.value;
    let filteredCats = null;

    if (!filterString) {
        filteredCats = cats;
    }
    else {
        filteredCats = cats.filter(cat => {
            // should this be in the new array?
            if (cat.type === filterString) {
                return true;
            } else {
                return false;
            }
        });
    }

    const coolCats = filteredCats.map(cat => {
        return {
            appelation: cat.name,
            bornOn: cat.year,
            website: cat.url,
            category: cat.type
        };
    });

    console.log(coolCats);

    render(coolCats);
});

// kick off initial render on load with all cats

const mapFunc = ({
    name,
    year,
    url,
    type,
}) => ({
    appelation: name + 7,
    bornOn: year,
    website: url,
    category: type
});


const coolInitalCats = cats.map(mapFunc);

render(coolInitalCats);

// put render functionality into function as
// we want to call repetitively when list is filtered
function render(catsToRender) {
    // remove any existing list items
    while (list.lastElementChild) {
        list.lastElementChild.remove();
    }

    // render new list items
    catsToRender.forEach(cat => {
        const html = generateCatItemHtmlString(cat);
        const dom = htmlToDOM(html);
        list.appendChild(dom);
    });
}