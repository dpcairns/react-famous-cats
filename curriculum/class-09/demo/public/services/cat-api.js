const URL = '/api';

export async function getCats() {
    const url = `${URL}/cats`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function getTypes() {
    const url = `${URL}/types`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function addCat(cat) {
    const url = `${URL}/cats`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cat)
    });

    const data = await response.json();
    return data;
}
