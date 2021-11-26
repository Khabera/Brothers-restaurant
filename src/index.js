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
    console.log('homebutotn lcikc')
    contentDiv.firstChild.remove();
    contentDiv.appendChild(home);
})
buttons.menubutton.addEventListener('click', () => {
    console.log('menubutotn lcikc')
    contentDiv.firstChild.remove();
    contentDiv.appendChild(menu);
})
//buttons.menubutton.onclick = removeAndAppend(menu);
