//Allons-y

//Initial render
//do work on page load
document.addEventListener("DOMContentLoaded", initialise)

//As a user, I can see the timer increment every second once the page has loaded
function initialise(){
    const counter = document.querySelector('#counter');
    console.log(counter);
    setInterval(() => {
        counter.innerHTML = parseInt(counter.innerHTML);
        counter.innerHTML++;
    }, 1000)
}