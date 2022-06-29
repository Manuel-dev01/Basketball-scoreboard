const homeEl = document.getElementById("num")
const guestEl = document.getElementById("nums")
const homeHeaderEl = document.querySelector('#home');
const guestHeaderEl = document.querySelector('#guest');

let homeCount = 0
let guestCount = 0

function incrementHome(count){
    homeCount += count;
    homeEl.textContent = homeCount
    highlightLeader();
}

function incrementGuest(count){
    guestCount += count;
    guestEl.textContent = guestCount
    highlightLeader();
}

function newGame(){
    homeEl.textContent = 0
    guestEl.textContent = 0
    homeCount = 0
    guestCount = 0
    highlightLeader();
}

function highlightLeader() {
    if(homeCount > guestCount) {
        homeHeaderEl.classList.add('highlight');
        guestHeaderEl.classList.remove('highlight');
    } else if (guestCount > homeCount) {
        homeHeaderEl.classList.remove('highlight');
        guestHeaderEl.classList.add('highlight');
    } else {
        homeHeaderEl.classList.remove('highlight');
        guestHeaderEl.classList.remove('highlight');
    }
}

newGame(); // initialize the game on first load...