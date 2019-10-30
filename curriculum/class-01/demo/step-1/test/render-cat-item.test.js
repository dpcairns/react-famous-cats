import generateCatItemHtmlString from '../home/render-cat-item.js';
const test = QUnit.test;

QUnit.module('Render Cat Item');

test('renders html from data', assert => {
    // arrange
    const expected = /*html*/`
        <li>
            <div class="info-container">
                <h2>Felix</h2>
                <p class="cat-type">Tuxedo</p>
            </div>

            <div class="image-container">
                <img src="assets/cats/felix.png" alt="Felix image">
            </div>
            <p class="year">1892</p>
        </li>
    `;

    // act
    const html = generateCatItemHtmlString();

    // assert
    assert.htmlEqual(html, expected);
});