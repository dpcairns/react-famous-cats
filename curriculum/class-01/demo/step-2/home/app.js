// import cat data
import cats from '../data/cats.js';
// import html-to-DOM utility
import htmlToDOM from '../util/html-to-DOM.js';
// import generateCatItemHtmlString function
import generateCatItemHtmlString from './render-cat-item.js';

// reference the list
const list = document.querySelector('.cats');

// loop the cat data
cats.forEach(cat => {
    // call template function to get html
    const htmlString = generateCatItemHtmlString(cat);

    // make DOM from html
    const dom = htmlToDOM(htmlString);

    // append to the list
    list.appendChild(dom);
});