//Allons-y

//Initial render
//do work on page load
document.addEventListener("DOMContentLoaded", initialise)

//declare variables here
const counter = document.querySelector('#counter')
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
let compte = 0;
const myInterval = () => setInterval(startTimer, 1000);

//As a user, I can see the timer increment every second once the page has loaded
//As a user, I can manually increment and decrement the counter using the plus and minus buttons
function initialise(){

    myInterval();

    plusBtn.addEventListener("click", () => {
        console.log("clickity clackity thang");
        compte++;
        counter.innerHTML = compte;
    });

    minusBtn.addEventListener("click", () => {
        console.log("clickity clackity thang");
        compte--;
        counter.innerHTML = compte;
    })
}

function startTimer(){
    compte++;
    counter.innerHTML = compte;
}

// function stopTimer(){
//     clearInterval(myInterval);
// }