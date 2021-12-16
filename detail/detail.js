import { getHero } from '../fetch-utils.js';
import { renderHeroDetail } from '../render-utils.js';

const heroDetailContainer = document.getElementById('hero-detail-container');

window.addEventListener('load', async() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const hero = await getHero(id);

    const herodDetailEl = renderHeroDetail(hero);
    heroDetailContainer.append(herodDetailEl);
});