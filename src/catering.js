import './catering.css'

const content = document.createElement('div');
content.setAttribute('id', 'catering-content');

// let header0 = document.createElement('h1')
// header0.classList.add('catering-header');
// header0.textContent = "Meet";
// content.appendChild(header0);

let header = document.createElement('h1')
header.classList.add('catering-header');
header.textContent = "Meet Catering Like No Other"
content.appendChild(header);

const loopingObjectsArray = new Array();

function createLoopingNode(title, disc, array){
    let htmlNode = document.createElement('div');
    let titleElement = document.createElement('div');
    let loopingElement = document.createElement('div');
    let descriptionElement = document.createElement('div');
    htmlNode.classList.add('loop-group')
    titleElement.classList.add('text');
    loopingElement.classList.add('looping-text');
    descriptionElement.classList.add('lower-text');
    titleElement.textContent = title;
    loopingElement.textContent = ''; //controlled externally via loopContent function
    descriptionElement.textContent = disc;
    htmlNode.appendChild(titleElement);
    htmlNode.appendChild(loopingElement);
    htmlNode.appendChild(descriptionElement);
    content.appendChild(htmlNode);
    let loopCountProperty = 0;
    loopingObjectsArray.push({loopingElement, array, loopCountProperty});
    return htmlNode;
}

let eventsArray = ['Party', 'Barbeque', 'Wedding', 'Birthday', 'Baby Shower'];
let eventsLoopingObject = createLoopingNode('events', '(or come to us)', eventsArray);


let appetizerArray = ['Antipasto Platters', 'Bacon Wrapped Shrimp', 'Meat or Fish Cakes', 'Artichoke Dip', 'Lobster Cocktail']
let appetizerLoopingObject = createLoopingNode('appetizers', '(or nearly 30 more)', appetizerArray);

let soupArray = ['Chipotle Chicken and Rice Soup', 'Gazpacho', 'New England Clam Chowder', 'Chicken, Lemon, and Orzo', 'French Onion with Cheese'];
let soupLoopingObject = createLoopingNode('soups', '(or nearly 20 more)', soupArray);

let saladArray = ['Bacon, Pear, and Blue Cheese', 'Authentic Greek', 'Classic Ceasar', 'Fresh Fig, Pear & Mixed Greens', 'Lemon Shrimp']
let saladLoopObject = createLoopingNode('salads', '(or nearly 15 more)', saladArray);

let sandwichArray = ['Roast Turkey and Avocado', 'Panzanella Panini', 'Filet Mignon Sliders', 'Grilled Ahi on Ciabatta', 'Crustless Genoa Salami'];
let sandwichLoopObject = createLoopingNode('sandwichs', '(or countless more)', sandwichArray);

let menuAnchor = document.createElement('div')
menuAnchor.classList.add('full-menu');
content.appendChild(menuAnchor);
let menuButton = document.createElement('a')
menuButton.href = `https://www.brothersbistro.net/catering.pdf`
menuButton.classList.add('menu-button');
menuButton.textContent = "Click to Full Menu"
menuAnchor.appendChild(menuButton);


let header3 = document.createElement('div')
header3.classList.add('catering-description');
header3.textContent = "Our catering is built to give you a wide variety of foods to be inclusive to the pallete and diet of your entire party. View our full menu above and call the number below to set up catering that will impress your friends and family while maintaining your budget."
content.appendChild(header3);

let callText = document.createElement('div')
callText.classList.add('catering-description');
callText.textContent = "Call 760.728.4555 or visit our location"
content.appendChild(callText);

loopContent();
function loopContent(){
    loopA();
    function loopA(){
        checkCount();
        contentChange();
        setTimeout(()=>{  
            loopB();
        },4000);
    }
    function loopB(){
        checkCount();
        contentChange();
        setTimeout(()=>{  
            loopA();
        },4000);
    }
    function checkCount(){
        loopingObjectsArray.forEach((object)=>{
            if(object.loopCountProperty>=(object.array.length-1)){
                object.loopCountProperty=0;
            }else{
                object.loopCountProperty++;
            }
        });
    }
    function contentChange(){
        loopingObjectsArray.forEach((object) => {
            object.loopingElement.style.opacity=0;
        });
        setTimeout(()=>{
            loopingObjectsArray.forEach((object) => {
                object.loopingElement.textContent=object.array[object.loopCountProperty];
                object.loopingElement.style.opacity=1;
            })
        }, 800);
    }
}



export default content;