
export default function generateCatItemHtmlString(cat) {
    if (!cat) {
        throw new Error('you need to supply a cat');
    }
    const html = /*html*/`
        <li>
            <div class="info-container">
                <h2>${cat.name}</h2>
                <p class="cat-type">${cat.type}</p>
            </div>

            <div class="image-container">
                <img src="${cat.url}" alt="${cat.name} image">
            </div>
            <p class="year">${cat.year}</p>
        </li>
    `;

    return html;
}