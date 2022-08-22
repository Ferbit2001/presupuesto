const datos = async () => {
    return fetch('/v1/ingredient/').then(res => res.json())
}
const nav = document.getElementById('nav');
nav.addEventListener('click', e => (e.target.innerText == 'Recetas') ? decks[e.target.innerText]() : (e.target.innerText == 'Precios') ? decks[e.target.innerText]() : null);

