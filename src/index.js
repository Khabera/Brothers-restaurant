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
contentDiv.appendChild(home);
document.body.appendChild(footer);

let buttonsArray = [buttons.menubutton, buttons.cateringbutton, buttons.discoverbutton, buttons.homebutton];
let respectivePage = [menu, catering, discover, home];
// Commented Due to Unknown Load
// window.addEventListener('resize', () => {
//     if(window.innerWidth<1000){
//         header.childNodes[0].textContent = '';
//     }else{
//         header.childNodes[0].textContent = `Brother's Bistro`;
//     };
// });
buttonsArray.forEach((button, index) => {
    button.addEventListener('click', () => {
        contentDiv.style.opacity=0;
        buttonsArray.forEach((button) => button.style.borderStyle = 'dotted');
        button.style.borderStyle = 'solid';
        window.scrollTo({ top: 22, behavior: 'smooth' });
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
    header.childNodes[0].style.fontSize = '72px';
    header.childNodes[0].style.marginBottom = '-36px';
    header.childNodes[1].style.marginTop = '24px';
    header.childNodes[1].style.marginBottom = '-12px';
    header.style.justifyContent = 'space-around';
    console.log('scrolling');
    }
    else{
        header.style.flexDirection = 'column';
        header.style.height = '143';
    }
})