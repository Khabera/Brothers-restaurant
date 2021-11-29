import './style.css';
import {header, buttons} from './head.js';
import home from './home.js';
import footer from './footer.js'
import menu from './menu.js';
import catering from './catering.js';
import discover from './discover.js';

document.body.appendChild(header);
let contentDiv = document.createElement('div');
contentDiv.setAttribute('id', 'content-holder');
document.body.appendChild(contentDiv);
contentDiv.appendChild(catering);
document.body.appendChild(footer);

buttons.homebutton.addEventListener('click', () => {
    contentDiv.style.opacity=0;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
        contentDiv.firstChild.remove();
        contentDiv.appendChild(home);
        contentDiv.style.opacity=1;
    }, 400)
})
buttons.menubutton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    contentDiv.style.opacity=0;
    setTimeout(() => {
        contentDiv.firstChild.remove();
        contentDiv.appendChild(menu);
        contentDiv.style.opacity=1;
    }, 400)
})
buttons.cateringbutton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    contentDiv.style.opacity=0;
    setTimeout(() => {
        contentDiv.firstChild.remove();
        contentDiv.appendChild(catering);
        contentDiv.style.opacity=1;
    }, 400)
})
//buttons.menubutton.onclick = removeAndAppend(menu);
buttons.discoverbutton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    contentDiv.style.opacity=0;
    setTimeout(() => {
        contentDiv.firstChild.remove();
        contentDiv.appendChild(discover);
        contentDiv.style.opacity=1;
    }, 400)
})