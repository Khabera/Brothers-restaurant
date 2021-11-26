import './head.css'

let header = document.createElement('div');
header.classList.add('header');


let title = document.createElement('div');
title.classList.add('title');
title.textContent = `Brother's Bistro`;
header.appendChild(title);


let navBar = document.createElement('div');
navBar.setAttribute('id', 'nav-bar')

let button1 = document.createElement('button');
button1.classList.add('nav-button')
button1.textContent = `Home`
navBar.appendChild(button1);
let button2 = document.createElement('button');
button2.classList.add('nav-button')
button2.textContent = `Menu`
navBar.appendChild(button2);
let button3 = document.createElement('button');
button3.classList.add('nav-button')
button3.textContent = `Catering`
navBar.appendChild(button3);
let button4 = document.createElement('button');
button4.classList.add('nav-button')
let testContent = document.createElement('div');
button4.appendChild(testContent);
testContent.textContent = `Discover`
navBar.appendChild(button4);
header.appendChild(navBar);
let buttons = {
    homebutton: button1,
    menubutton: button2,
    cateringbutton: button3,
    discoverbutton: button4
}



export {header, buttons};