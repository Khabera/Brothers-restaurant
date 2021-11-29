import './catering.css'

const content = document.createElement('div');
content.setAttribute('id', 'catering-content');

let header0 = document.createElement('h1')
header0.classList.add('catering-header');
header0.textContent = "Meet";
content.appendChild(header0);

let header = document.createElement('h1')
header.classList.add('catering-header');
header.textContent = "Catering Like No Other"
content.appendChild(header);

let loopingObjects = new Array();

let intro = document.createElement('div');
intro.classList.add('text');
intro.textContent = "Order our delicious food for your next:"
content.appendChild(intro);
let cateringEvents = ['Party', 'Barbeque', 'Wedding', 'Birthday', 'Baby Shower'];
let cateringBackground = document.createElement('div');
content.appendChild(cateringBackground);
cateringBackground.classList.add('loop-background')
let eventsLoop = document.createElement('div');
cateringBackground.appendChild(eventsLoop);
eventsLoop.classList.add('looping-text');
let text2 = document.createElement('div');
text2.classList.add('lower-text');
text2.textContent=`(or bring your party to us)`;
content.appendChild(text2);
loopingObjects.push({
    htmlLocation: eventsLoop,
    contentArray: cateringEvents,
});


let horsdoeurves = ['Antipasto Platters', 'Bacon Wrapped Shrimp', 'Meat or Fish Cakes', 'Artichoke Dip', 'Lobster Cocktail']
let appetizers = document.createElement('div');
content.appendChild(appetizers);
appetizers.classList.add('text');
appetizers.textContent = `with Appetizers such as:`
let appetizersBackground = document.createElement('div');
content.appendChild(appetizersBackground);
appetizersBackground.classList.add('loop-background')
let appetizersLoop = document.createElement('div');
appetizersBackground.appendChild(appetizersLoop);
appetizersLoop.classList.add('looping-text');
let text3 = document.createElement('div');
text3.classList.add('lower-text');
text3.textContent=`(or nearly 50 other options)`;
content.appendChild(text3);
loopingObjects.push({
    htmlLocation: appetizersLoop,
    contentArray: horsdoeurves,
});


let soups = ['Chipotle Chicken and Rice Soup', 'Gazpacho', 'New England Clam Chowder', 'Chicken, Lemon, and Orzo', 'French Onion with Cheese']
let soupsTitle = document.createElement('div');
content.appendChild(soupsTitle);
soupsTitle.classList.add('text');
soupsTitle.textContent = `Soups such as:`
let soupsBackground = document.createElement('div');
content.appendChild(soupsBackground);
soupsBackground.classList.add('loop-background')
let soupsLoop = document.createElement('div');
soupsBackground.appendChild(soupsLoop);
soupsLoop.classList.add('looping-text');
let soupsDesc = document.createElement('div');
soupsDesc.classList.add('lower-text');
soupsDesc.textContent=`(or nearly 15 other options)`;
content.appendChild(soupsDesc);
loopingObjects.push({
    htmlLocation: soupsLoop,
    contentArray: soups,
});



let salads = ['Bacon, Pear, and Blue Cheese', 'Authentic Greek', 'Classic Ceasar', 'Fresh Fig, Pear & Mixed Greens', 'Lemon Shrimp']
let saladsTitle = document.createElement('div');
content.appendChild(saladsTitle);
saladsTitle.classList.add('text');
saladsTitle.textContent = `Salads such as:`;
let saladsBackground = document.createElement('div');
content.appendChild(saladsBackground);
saladsBackground.classList.add('loop-background')
let saladsLoop = document.createElement('div');
saladsBackground.appendChild(saladsLoop);
saladsLoop.classList.add('looping-text');
let saladsDesc = document.createElement('div');
saladsDesc.classList.add('lower-text');
saladsDesc.textContent=`(or nearly 20 other options)`;
content.appendChild(saladsDesc);
loopingObjects.push({
    htmlLocation: saladsLoop,
    contentArray: salads,
});


changeContentA(0);
function changeContentA(num){
    console.log(num);
    if(num>=5){
        num=0;
    }
    loopingObjects.forEach((object) => {
        object.htmlLocation.style.opacity=0;
        setTimeout(()=>{
            object.htmlLocation.textContent=object.contentArray[num];
            object.htmlLocation.style.opacity=1;
        }, 800);
    });
    setTimeout(()=>{  
        changeContentA(++num);
    },4000);
}
function changeContentB(num){
    console.log(num);
    if(num>=5){
        num=0;
    }
    loopingObjects.forEach((object) => {
        object.htmlLocation.style.opacity=0;
        setTimeout(()=>{
            object.htmlLocation.textContent=object.contentArray[num];
            object.htmlLocation.style.opacity=1;
        }, 800);
    });
    setTimeout(()=>{  
        changeContentA(++num);
    },4000);
}


export default content;