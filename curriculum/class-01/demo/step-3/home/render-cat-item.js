
export default function generateCatItemHtmlString(cat) {
    const html = /*html*/`
        <li>
            <div class="info-container">
                <h2>${cat.appelation}</h2>
                <p class="cat-type">${cat.category}</p>
            </div>

            <div class="image-container">
                <img src="${cat.website}" alt="${cat.appelation} image">
            </div>
            <p class="year">${cat.bornOn}</p>
        </li>
    `;

    return html;
}