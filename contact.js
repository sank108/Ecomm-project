const arrow1 = document.querySelector(".arrow");
const arrow2 = document.querySelector(".arrow-1");
const arrow3 = document.querySelector(".arrow-2");
const arrow4 = document.querySelector(".arrow-3");
const arrow5 = document.querySelector(".arrow-4");
const arrow6 = document.querySelector(".arrow-5");
const answer1 = document.querySelector(".answer0");
const answer2 = document.querySelector(".answer-1");
const answer3 = document.querySelector(".answer-2");
const answer4 = document.querySelector(".answer-3");
const answer5 = document.querySelector(".answer-4");
const answer6 = document.querySelector(".answer-5");
const quearrow1 = document.querySelector(".que-arrow-1");
const quearrow2 = document.querySelector(".que-arrow-2");
const quearrow3 = document.querySelector(".que-arrow-3");
const quearrow4 = document.querySelector(".que-arrow-4");
const quearrow5 = document.querySelector(".que-arrow-5");
const quearrow6 = document.querySelector(".que-arrow-6");

quearrow1.addEventListener("click",() => {
    answer1.classList.toggle("answeractive");
})

quearrow2.addEventListener("click",() => {
    answer2.classList.toggle("answeractive");
})

quearrow3.addEventListener("click",() => {
    answer3.classList.toggle("answeractive");
})

quearrow4.addEventListener("click",() => {
    answer4.classList.toggle("answeractive");
})

quearrow5.addEventListener("click",() => {
    answer5.classList.toggle("answeractive");
})

quearrow6.addEventListener("click",() => {
    answer6.classList.toggle("answeractive");
})


