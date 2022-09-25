//Allons-y

//declare variables here
const counter = document.querySelector('#counter')
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const coeurBtn = document.querySelector('#heart');
const pauseBtn = document.querySelector('#pause');
const submitBtn = document.querySelector('#submit');
const likes = document.querySelector('.likes');
const comments = document.querySelector('.comments');
const form = document.querySelector('#comment-form');
let compte = 0;
let likesObj = {}; //will store the number and count of likes
let isPaused = false;
const myInterval = () => setInterval(startTimer, 1000);


function handleEvents(){

    //As a user, I can see the timer increment every second once the page has loaded
    myInterval();

    //As a user, I can manually increment and decrement the counter using the plus and minus buttons
    plusBtn.addEventListener("click", () => {
        compte++;
        counter.innerHTML = compte;
    });

    minusBtn.addEventListener("click", () => {
        compte--;
        counter.innerHTML = compte;
    })

    //As a user, I can "like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
    coeurBtn.addEventListener("click", () => {
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

    //As a user, I can pause the counter which should pause the counter, disable all buttons except the pause button and switch the label on the button from "pause" to "resume"
    pauseBtn.addEventListener("click", () => {
        if (pauseBtn.textContent !== "resume") {
            [minusBtn, plusBtn, coeurBtn, submitBtn].forEach((btn => {
                btn.setAttribute('disabled', '');
            }))
            pauseBtn.textContent = "resume";
            isPaused = true;
            counter.innerHTML = compte;
        }
        else {
            //As a user, I can click on the "restart" button to restart the counter and re-enable the buttons
            pauseBtn.textContent = "pause";
            [minusBtn, plusBtn, coeurBtn, submitBtn].forEach((btn => {
                btn.removeAttribute('disabled');
            }))
            isPaused = false;
        }
        
    });

    //As a user, I can leave comments on my gameplay
    form.addEventListener("submit", e => {
        //prevent default form functionality
        e.preventDefault();
        const input = document.querySelector('#comment-input');
        const p = document.createElement('p');
        p.innerHTML = input.value;
        comments.appendChild(p);
        form.reset();
    });
}

function startTimer(){
    if (!isPaused){
        compte++;
        counter.innerHTML = compte;
    }
    
}

handleEvents();
