let homeScore = document.getElementById("homescore");
let guestScore = document.getElementById("guestscore");
let countHome = 0;
let countGuest = 0;

function addOneH() {
    countHome += 1;
    homeScore.textContent = countHome;
}
function addTwoH() {
    countHome += 2;
    homeScore.textContent = countHome;
}
function addThreeH() {
    countHome += 3;
    homeScore.textContent = countHome;
}

function addOneG() {
    countGuest += 1;
    guestScore.textContent = countGuest;
}
function addTwoG() {
    countGuest += 2;
    guestScore.textContent = countGuest;
}
function addThreeG() {
    countGuest += 3;
    guestScore.textContent = countGuest;
}

function newGame() {
    countGuest = 0;
    countHome = 0;
    guestScore.textContent = countGuest;
    homeScore.textContent = countHome;
}