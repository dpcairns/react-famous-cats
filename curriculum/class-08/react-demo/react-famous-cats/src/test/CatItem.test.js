import CatItem from '../home/CatItem.js';
const test = QUnit.test;

QUnit.module('Render Cat Item');

test('renders html from data', assert => {
    // arrange
    const cat = {
        name: 'Felix',
        type: 'Tuxedo',
        url: 'assets/cats/felix.png',
        year: 1892
    };

    const expected = /*html*/`
        <li class="cat-item">
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
    const props = { cat: cat };
    const catItem = new CatItem(props);
    const html = catItem.renderHTML();
    
    // assert
    assert.htmlEqual(html, expected);
});