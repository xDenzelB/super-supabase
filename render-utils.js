export function renderHeroCard(hero) {
    const heroDiv = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    heroDiv.classList.add('hero-card');

    p.textContent = hero.Name;
    img.src = `./assets/${hero.id}.jpg`;
    a.href = `./detail/?id=${hero.id}`;

    heroDiv.append(p, img);
    a.append(heroDiv);

    return a;
}

export function renderHeroDetail(hero) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const descriptionEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const yearEl = document.createElement('p');
    const comicEl = document.createElement('p');
    const powersEl = document.createElement('p');
    const yearComicEl = document.createElement('div');

    div.classList.add('hero-detail');

    nameEl.textContent = hero.Name;
    nameEl.classList.add('name');

    descriptionEl.textContent = hero.Detail;
    descriptionEl.classList.add('detail');

    yearEl.textContent = `Year debuted: ${hero.year}`;
    yearEl.classList.add('year');

    comicEl.textContent = `Company: ${hero.Comic}`;
    comicEl.classList.add('comic');

    powersEl.textContent = `Powers and abilities: ${hero.Powers}`;
    powersEl.classList.add('powers');

    yearComicEl.append(comicEl, yearEl);

    img.src = `../assets/${hero.id}.jpg`;

    div.append(nameEl, img, powersEl, yearComicEl, descriptionEl);

    return div;


}