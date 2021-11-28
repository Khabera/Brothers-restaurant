import './style.css';
import {header, buttons} from './head.js';
import home from './home.js';
import footer from './footer.js'
import menu from './menu.js';
import content from './menu.js';

document.body.appendChild(header);
let contentDiv = document.createElement('div');
contentDiv.setAttribute('id', 'content-holder');
document.body.appendChild(contentDiv);
contentDiv.appendChild(menu);
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
//buttons.menubutton.onclick = removeAndAppend(menu);
