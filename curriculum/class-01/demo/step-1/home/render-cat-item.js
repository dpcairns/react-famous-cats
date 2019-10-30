export default function generateCatItemHtmlString() {
    const html = /*html*/`
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

    return html;
}