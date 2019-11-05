function htmlToDOM(html, componentName) {
    const template = document.createElement('template');
    template.innerHTML = html;
    const content = template.content;

    if (content.children.length > 1) {
        throw new Error(`html in ${componentName} needs to have single parent element`);
    }

    const firstElementChild = content.firstElementChild;
    return firstElementChild;
}

export default htmlToDOM;