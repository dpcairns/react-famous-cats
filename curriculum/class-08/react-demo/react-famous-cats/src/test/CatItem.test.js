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
        <li className="cat-item">
            <div className="info-container">
                <h2>Felix</h2>
                <p className="cat-type">Tuxedo</p>
            </div>

            <div className="image-container">
                <img src="assets/cats/felix.png" alt="Felix image">
            </div>
            <p className="year">1892</p>
        </li>
    `;

    // act
    const props = { cat: cat };
    const catItem = new CatItem(props);
    const html = catItem.renderHTML();
    
    // assert
    assert.htmlEqual(html, expected);
});