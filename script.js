const toggleswitch =document.querySelector('input[type="checkbox"]');
const nav= document.getElementryById('nav');
const toggleIcon= document.getElementryById('toggle-icon');
const image1= document.getElementryById('image1');
const image2= document.getElementryById('image2');
const image3= document.getElementryById('image3');
const textBox= document.getElementryById('text-box');
//Dark Mode Style
function darkMode(){
nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
textBox.style.backgroundcolor = 'rgb(255 255 255 / 50%)';
console.log(toggleIcon.children);
}
//switch theme dynam
function switchtheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        darkMode();
    } else{
        document.documentElement.setAttribute('data-theme','light');
        lightMode();
    }
}
//Event Listener
toggleswitch.addEventListener('change',switchtheme);
