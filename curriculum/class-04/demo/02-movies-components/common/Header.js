import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
                <section>
                    <img src="assets/alchemy-logo.png" alt="Alchemy Code Lab Logo">
                    <h1>Open Movie Database</h1>
                </section>
                <nav>
                    <a href="./">Home</a>
                    <a href="explore.html">Explore</a>
                </nav>
            </header>
        `;
    }
}

export default Header;