import './home.css'

function addElement(type, text, id, classes, appendich){
    let element = document.createElement(type);
    element.textContent = text;
    if(id){
        element.setAttribute('id', id)
    }
    if(classes){
        element.classList.add(classes)
    }
    appendich.appendChild(element);
    return element;
}

let homeDiv = document.createElement('div');
homeDiv.setAttribute('id', 'content');

let hoursContainer = addElement('div', '', 'hours-container', 0, homeDiv);
let hoursHeader = addElement('h1', 'Hours & Location', 'hours', 0, hoursContainer);
let hoursText = addElement('ul', '', 'hours-list', 0, hoursContainer);
let servingLunch = addElement('li', 'Serving Lunch', '', 'serving', hoursText);
let sLDays = addElement('li', 'Monday-Friday', '', 'days', hoursText);
let sLHours = addElement('li', '11:30AM - 2:00PM', '', 'hours', hoursText);
let servingDinner = addElement('li', 'Serving Dinner', '', 'serving', hoursText);
let sDDays = addElement('li', 'Monday-Thursday', '', 'days', hoursText);
let sDHours = addElement('li', '5:00PM - 8:00PM', '', 'hours', hoursText);
let sDDays2 = addElement('li', 'Friday & Saturday', '', 'days', hoursText);
let sDHours2 = addElement('li', '5:00PM - 9:00PM', '', 'hours', hoursText);

let locationContainer = addElement('div', '', 'location-container', 0, homeDiv);



export default homeDiv;
