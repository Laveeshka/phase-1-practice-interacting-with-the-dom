//Allons-y

//Initial render
//do work on page load
document.addEventListener("DOMContentLoaded", initialise)

//declare variables here
const counter = document.querySelector('#counter')
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const coeur = document.querySelector('#heart');
const pauseBtn = document.querySelector('#pause');
const submitBtn = document.querySelector('#submit');
const likes = document.querySelector('.likes');
let compte = 0;
let likesObj = {}; //will store the number and count of likes
let isPaused = false;
const myInterval = () => setInterval(startTimer, 1000);

//As a user, I can see the timer increment every second once the page has loaded
//As a user, I can manually increment and decrement the counter using the plus and minus buttons
//As a user, I can "like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
//As a user, I can pause the counter which should pause the counter, disable all buttons except the pause button and switch the label on the button from "pause" to "resume"
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

    coeur.addEventListener("click", () => {
        console.log("clickity clackity thang");
        console.log(likesObj);
        if (likesObj[compte] && document.getElementById(`${compte}`)) {
            const existingLi = document.getElementById(`${compte}`);
            likesObj[compte]++;
            existingLi.innerHTML = `${compte} has been liked ${likesObj[compte]} times`;
        }
        else {
            likesObj[compte] = 1;
            const li = document.createElement("li");
            li.setAttribute('id', `${compte}`);
            li.innerHTML = `${compte} has been liked ${likesObj[compte]} time`;
            likes.appendChild(li);
        }

    })

    pauseBtn.addEventListener("click", () => {
        if (pauseBtn.textContent !== "resume") {
            console.log("clickity clackity thang");
            minusBtn.setAttribute('disabled', '');
            plusBtn.setAttribute('disabled', '');
            coeur.setAttribute('disabled', '');
            submitBtn.setAttribute('disabled', '');
            pauseBtn.textContent = "resume";
            isPaused = true;
            counter.innerHTML = compte;
        }
        else {
            pauseBtn.textContent = "pause";
            minusBtn.removeAttribute('disabled');
            plusBtn.removeAttribute('disabled');
            coeur.removeAttribute('disabled');
            submitBtn.removeAttribute('disabled');
            isPaused = false;
        }
        
    });
}

function startTimer(){
    if (!isPaused){
        compte++;
        counter.innerHTML = compte;
    }
    
}

// function stopTimer(){
//     clearInterval(myInterval);
// }