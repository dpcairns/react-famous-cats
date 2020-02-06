import React from 'react';
import './App.css';

function App() {
  return (
    <main>
      <header>
        <section>
          <img src="assets/alchemy-logo.png" alt="Alchemy Code Lab Logo" />
          <h1>Futurama Quotes</h1>
        </section>
        <nav>
          <a href="./">Home</a>
          <a href="quotes.html">Quotes</a>
        </nav>
      </header>

      <section class="options-section">
        <form class="search">
          <p>Search Quotes:</p>
          <input name="search" />
          <button>🔍</button>
        </form>
      </section>

      <section class="list-section">
        <p class="paging">
          <button class="prev" disabled>◀</button>
          <span>Page 1 of 5</span>
          <button class="next">▶</button>
        </p>

        <ul class="quotes">
          <li class="quote-item">
            <h2>
              <img src="https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png"
                alt="Bender image" />
              <span>Bender</span>
            </h2>

            <quote>
              Everybody's a jerk: you, me, this jerk.
                    </quote>

          </li>
          <li class="quote-item">
            <h2>
              <img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904133/fry.png"
                alt="Fry image" />
              <span>Fry</span>
            </h2>

            <quote>
              Not everyone turns out like their parents. Look at me: my parents were honest, hard-working
              people.
                    </quote>

          </li>
          <li class="quote-item"></li>
          <li class="quote-item"></li>
          <li class="quote-item"></li>
          <li class="quote-item"></li>
          <li class="quote-item"></li>
          <li class="quote-item"></li>
          <li class="quote-item"></li>
          <li class="quote-item"></li>
          <li class="quote-item"></li>
          <li class="quote-item"></li>
          <li class="quote-item"></li>
          <li class="quote-item"></li>
          <li class="quote-item"></li>
          <li class="quote-item"></li>
          <li class="quote-item"></li>
          <li class="quote-item"></li>
          <li class="quote-item"></li>
          <li class="quote-item"></li>
        </ul>
      </section>
    </main>
  );
}

export default App;
