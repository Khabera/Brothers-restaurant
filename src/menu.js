import './menu.css'
import {lunch, dinner, alcohol} from './menuitems.js';

const switchLunch = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    menuContainer.style.opacity = 0.3;
    setTimeout(()=>{
        resetMenucontainer();
        const appetizersTitle = makeTitle('Appetizers');
        lunch.appetizers.forEach((item) => addItem(item));
        const soupsSaladsTitle = makeTitle('Soups and Salads');
        lunch.soupssalads.forEach((item) => addItem(item));
        const sandwichesTitle = makeTitle('Artisan Sandwiches');
        lunch.artisansandwiches.forEach((item => addItem(item)));
        menuContainer.style.opacity = 1;
    }, 400);
}
const switchDinner = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    menuContainer.style.opacity = 0.3;
    setTimeout(() => {
        (menuContainer.style.opacity = 1)
        resetMenucontainer();   
        const appetizersTitle = makeTitle('Appetizers');
        dinner.appetizers.forEach((item) => addItem(item));
        const soupsSaladsTitle = makeTitle('Soups and Salads');
        dinner.soupssalads.forEach((item) => addItem(item));
        }, 400)
}
const switchWine = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    menuContainer.style.opacity = 0.3;
    setTimeout(()=> {
        resetMenucontainer();
        const redwineTitle = makeTitle('Red Wine');
            const cabernetTitle = makeWineTitle('Cabernet');
            alcohol.cabernet.forEach((item) => addWine(item));
            const merlotTitle = makeWineTitle('Merlot');
            alcohol.merlot.forEach((item) => addWine(item));
            const pinotTitle = makeWineTitle('Merlot');
            alcohol.pinot.forEach((item) => addWine(item));
            makeWineTitle('Other Red Wines');
            alcohol.other.forEach((item) => addWine(item));
            makeWineTitle("Ron's Blends");
            alcohol.rons.forEach((item)=> addWine(item));
        makeTitle('White Wine');
            makeWineTitle('Chardonnay');
            alcohol.chardonnay.forEach((item) => addWine(item));
            makeWineTitle('Other Whites');
            alcohol.otherwhite.forEach((item) => addWine(item));
            makeWineTitle('Sauvignon Blanc');
            alcohol.sauvignon.forEach((item) => addWine(item));
        makeTitle('Beer');
            alcohol.beer.forEach((item) => addBeer(item));
        menuContainer.style.opacity = 1;
    }, 400);
}
const resetMenucontainer = () => {
    while(menuContainer.hasChildNodes()){
     menuContainer.firstChild.remove();
    }
}

const content = document.createElement('div');
content.setAttribute('id', 'menu-content')
const switchBar = content.appendChild(document.createElement('div'));
switchBar.setAttribute('id', 'switch-buttons')
const lunchButton = switchBar.appendChild(document.createElement('button'));
lunchButton.innerHTML = `Lunch`;
lunchButton.classList.add('switch-button');
lunchButton.addEventListener('click', switchLunch);
const dinnerButton = switchBar.appendChild(document.createElement('button'));
dinnerButton.classList.add('switch-button');
dinnerButton.innerHTML = 'Dinner';
dinnerButton.addEventListener('click', switchDinner);
const wineButton = switchBar.appendChild(document.createElement('button'));
wineButton.classList.add('switch-button');
wineButton.innerHTML = `Wine`;
wineButton.addEventListener('click', switchWine);
content.appendChild(switchBar);

const menuContainer = content.appendChild(document.createElement('div'));
menuContainer.setAttribute('id', 'menu-items')

//start page with Lunch
const appetizersTitle = makeTitle('Appetizers');
lunch.appetizers.forEach((item) => addItem(item));
const soupsSaladsTitle = makeTitle('Soups and Salads');
lunch.soupssalads.forEach((item) => addItem(item));
const sandwichesTitle = makeTitle('Artisan Sandwiches');
lunch.artisansandwiches.forEach((item => addItem(item)));

function makeTitle(name){
    let holder = menuContainer.appendChild(document.createElement('div'));
    holder.innerHTML = `${name}`;
    holder.classList.add('main-title');
    return holder;
}
function makeWineTitle(name){
    let holder = menuContainer.appendChild(document.createElement('div'));
    holder.innerHTML = `${name}`;
    holder.classList.add('wine-title');
    return holder;
}
function addItem(item){
    let itemDiv = menuContainer.appendChild(document.createElement('div'));
    itemDiv.classList.add('item');
    let title = itemDiv.appendChild(document.createElement('div'));
    title.textContent = item[0];
    title.classList.add('item-title');
    let description = itemDiv.appendChild(document.createElement('div'));
    description.textContent = item[1];
    description.classList.add('item-description');
}
function addWine(item){
    let itemDiv = menuContainer.appendChild(document.createElement('div'));
    itemDiv.classList.add('wine');
    let title = itemDiv.appendChild(document.createElement('div'));
    title.textContent = item[0];
    title.classList.add('wine-name');
    let prices = itemDiv.appendChild(document.createElement('div'));
    prices.classList.add('prices')
    let glassPrice = prices.appendChild(document.createElement('div'));
    glassPrice.textContent = item[1];
    glassPrice.classList.add('glass-price');
    let bottlePrice = prices.appendChild(document.createElement('div'));
    bottlePrice.textContent = item[2];
    bottlePrice.classList.add('bottle-price');
}
function addBeer(item){
    let itemDiv = menuContainer.appendChild(document.createElement('div'));
    itemDiv.classList.add('beer');
    let nameCountry = itemDiv.appendChild(document.createElement('div'));
    nameCountry.classList.add('name-country');
    let title = nameCountry.appendChild(document.createElement('div'));
    title.textContent = item[0];
    title.classList.add('beer-name');
    let country = nameCountry.appendChild(document.createElement('div'));
    country.textContent = item[2];
    country.classList.add('beer-country');
    let glassPrice = itemDiv.appendChild(document.createElement('div'));
    glassPrice.textContent = item[1];
    glassPrice.classList.add('beer-price');
   
}


export default content;