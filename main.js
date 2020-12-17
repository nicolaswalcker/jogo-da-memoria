const cards = document.querySelectorAll(".card");
let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip'); 
    if (!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    checkForMath();
}

cards.forEach((card)=>{
    card.addEventListener('click', flipCard)

})

