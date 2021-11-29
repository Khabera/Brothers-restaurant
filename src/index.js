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

let buttonsArray = [buttons.menubutton, buttons.cateringbutton, buttons.discoverbutton, buttons.homebutton];
let respectivePage = [menu, catering, discover, home];
buttonsArray.forEach((button, index) => {
    button.addEventListener('click', () => {
        contentDiv.style.opacity=0;
        buttonsArray.forEach((button) => button.style.borderColor = 'white');
        button.style.borderColor = 'white';
        window.scrollTo({ top: 21, behavior: 'smooth' });
        setTimeout(() => {
            contentDiv.firstChild.remove();
            contentDiv.appendChild(respectivePage[index]);
            contentDiv.style.opacity=1;
        }, 400)
    })
})
window.addEventListener('scroll', () => {
    if(window.scrollY>20){
    header.style.flexDirection = 'row';
    header.style.height = '77';
    header.childNodes[0].style.fontSize = '64px';
    header.style.justifyContent = 'space-around';
    console.log('scrolling');
    }
    else{
        header.style.flexDirection = 'column';
        header.style.height = '143';
    }
})