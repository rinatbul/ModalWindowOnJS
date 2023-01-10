let button = document.querySelector('.button'); //get button
let modal = document.querySelector('.modalWrapper'); //get modal window div
let close = document.querySelector('.close'); // get 'close' div
let body = document.querySelector('body'); //get body
let text = document.querySelector('.text'); //get text in modal window div

button.addEventListener('click',()=>{modal.style.display = 'block';}); 
//on button click set modal window visible

close.addEventListener('click',()=>{modal.style.display = 'none';}); 
// on close click set modal window hidden

body.addEventListener('click',(event)=>{
    if (button !== event.target && modal !== event.target && text !== event.target)
    modal.style.display = 'none';
}); // on click outside modal window set modal window hidden