import Component from '../Component.js';
import Header from './Header.js';
import CatList from './CatList.js';
import FilterCats from './FilterCats.js';
import cats from '../data/cats.js';

class App extends Component {

    onRender(dom) {
        const header = new Header({
            person: 'caleb',
            sayHello: (name) => { console.log(`Hello, ${name}`); }
        });
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const props = {
            cats: cats
        };

        const catList = new CatList(props);
        const catListDOM = catList.renderDOM();

        const listSection = dom.querySelector('.list-section');
        listSection.appendChild(catListDOM);


        const filterCats = new FilterCats({
            cats: cats,
            onFilter: (catType) => {
                let filteredCats;
                if (!catType) {
                    filteredCats = cats;
                }
                else {
                    filteredCats = cats.filter(cat => {
                        return cat.type === catType;
                    });
                }

                const updateProps = { cats: filteredCats };
                catList.update(updateProps);
            }
        });

        const filterCatsDOM = filterCats.renderDOM();

        const optionsSection = dom.querySelector('.options-section');
        optionsSection.appendChild(filterCatsDOM);

    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- Header goes here -->
        
                <main>
                    <section class="options-section">
                        <!-- FilterCats goes here -->
                    </section>

                    <section class="list-section">
                        <!-- CatList goes here -->
                    </section>
                </main>
            </div>
        `;
    }
}

export default App;
