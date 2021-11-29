import './catering.css'

const content = document.createElement('div');
content.setAttribute('id', 'catering-content');

let header = document.createElement('h1')
header.classList.add('catering-header');
header.textContent = "Catering Like No Other"
content.appendChild(header);

let intro = document.createElement('p');
intro.classList.add('text');
intro.textContent = "Will you be having a party? A barbecue? A wedding shower? Birthday? Anniversary? Church function? Baby shower? Welcome home party? Open house? or a 'Just Because' get together?"
content.appendChild(intro);

let intro2 = document.createElement('p');
intro2.classList.add('text');
intro2.textContent = "For any of these events and more, we cater large groups, small groups, at your place or ours! To find out how we work within your budget, call Dee at 760.728.4555"
content.appendChild(intro2);

let intro3 = document.createElement('p');
intro3.classList.add('text');
intro3.textContent = "A cut above the ordinary, we custom design our menus to fit your budget and occasion! From Pizza's to Lobster. If you need great food at great prices for your next event, you've come to the right place!"
content.appendChild(intro3);

let intro4 = document.createElement('p');
intro4.classList.add('text');
intro4.textContent = "Our food is prepared with only the finest and freshest ingredients. Our experienced staff are happy to provide you with outstanding service that will make your special event a truly memorable one."
content.appendChild(intro4);

export default content;