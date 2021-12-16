// import functions and grab DOM elements
import { getHeroes } from './fetch-utils.js';
import { renderHeroCard } from './render-utils.js';

// let state
const heroListContainer = document.getElementById('hero-list-container');
// set event listeners 
window.addEventListener('load', async() => {
    const superHero = await getHeroes();
    // console.log(superHero);
    for (let hero of superHero) {
        const heroEl = renderHeroCard(hero);
        heroListContainer.append(heroEl);
    }
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
